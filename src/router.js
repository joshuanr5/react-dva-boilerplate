import React from 'react';
import { Router } from 'dva/router';
import Example from './routes/example';


  // const cached = {};
  // function registerModel(app, model) {
  //   if (!cached[model.namespace]) {
  //     app.model(model);
  //     cached[model.namespace] = true;
  //   }
  // }

export default ({ history }) => {
  const routes = [{
    path: '/home',
    component: Example,
  }]

  return (
    <Router history={history} routes={routes} ></Router>
  )
}
