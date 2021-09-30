import React from 'react';
import ReactDOM from 'react-dom';
import App from './ReactApp';
import '../css/bootstrap.min.css';
import '../css/app.css';

ReactDOM.render(
  /*Redux Provider is included access the store values from anywhere inside the child components.*/
  <App/>,
  document.getElementById('app'),
);
