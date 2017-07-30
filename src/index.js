import 'babel-polyfill';//to transpile other things apart from standard es5
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/style.css';//webpack cn import files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
)

