import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props,context);
    this.state = {
      course: {title: ""}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }
  onClickSave(){
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }
  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
  render(){
    //debugger step 4, but also is step 1;
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}

        <h2>Add Couse</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}
CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  //debugger step 3
  return{
    courses: state.courses// somehow comming from the reducers folder index.js rootReducer

  };
}

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(CoursesPage);

//export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);
//this was the original and we dont use mapDispatchToProps becuase we use the default from connect
