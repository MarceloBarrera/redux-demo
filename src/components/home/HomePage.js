import React from 'react';
import {Link} from 'react-router';
class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>Plural admini</h1>
        <p>React, Redux and React Router in ES6 for ultra resposive web pps</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More </Link>

      </div>
    );
  }
}
export default HomePage;
