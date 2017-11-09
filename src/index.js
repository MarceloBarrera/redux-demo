import 'babel-polyfill';//to transpile other things apart from standard es5
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; //Provider is a higher order component that attach our store to our React container components

import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";

import './styles/style.css';//webpack cn import files too
import './styles/table-data-style.css';//webpack cn import files too

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/react-datasheet/lib/react-datasheet.css';
const store = configureStore();
//if you were creating a server render app you might choose to pass parameters INitial state to the configure store method but not in this course
//dont be confused by Reducers initial state default parameter
//question is when would you pass initial state to this configurationStore call?
//well if you are wanting to rehydrate your store using some separate state thats passed down from the server or stored in local storage, then this
//is a good place to do so

//here I pass actions that I like to dispatch:
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

