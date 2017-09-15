import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
//"Container" react component
class CoursesPage extends React.Component {
  //constructor good place to initialize state and call "bind" functions
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
    //debugger  4, but also is step 1; from the react-redux flow
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
  //ownProps let us access props that has been attached to this component
  //state represents the store from redux
  //debugger step 3 from the react-redux flow
  return{
    courses: state.courses// comming from the reducers folder index.js "rootReducer"

  };
}
//what actions you want to dispatch in your component!
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)//course => dispatch(courseActions.createCourse(course)) manual way to do it
    //could be done action by action for example: but better preference get all actions
    //createCourse: bindActionCreators(courseActionscreateCourse, dispatch)
  };

}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);

//export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);
//this was the original and we dont use mapDispatchToProps becuase we use the default from connect
