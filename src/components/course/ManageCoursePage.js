import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

//import {authorsFormattedForDropdown} from '../../selectors/selectors';

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }
  //react sometimes run it even if state did no change!
  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }
  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  }
  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }
  render() {
    return (

      <CourseForm allAuthors={this.props.authors}
                  onChange={this.updateCourseState}
                  onSave={this.saveCourse}
                  course={this.state.course}
                  errors={this.state.errors}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
//Global variable, just for easy access, not recommended
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, courseId) {
  const course =  courses.filter(course=> course.id==courseId);
  if(course.length > 0) return course[0];// filter returns an array so I grab first
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from the path `/course/:id`  check <Route path="course/:id" component={ManageCoursePage}/> on routes.js file
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  if(courseId && state.courses.length > 0){
    course= getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
                              return {
                                value: author.id,
                                text: author.firstName + ' ' + author.lastName
                              };
  });
  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
