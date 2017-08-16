import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
class CoursesPage extends React.Component {
  constructor(props, context){
    super(props,context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }
  render(){
    const {courses} = this.props;
    //debugger  4, but also is step 1;
    //{this.props.courses.map(this.courseRow)}
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}
CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired, because now we are using our own mapDispatchToProps
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  //debugger step 3
  return{
    courses: state.courses// somehow comming from the reducers folder index.js rootReducer

  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)//course => dispatch(courseActions.createCourse(course))

  };

}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);

//export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);
//this was the original and we dont use mapDispatchToProps becuase we use the default from connect
