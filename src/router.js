import React from 'react';
import { Router } from 'dva/router';

import App from './routes/app';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = true;
  }
}

export default ({ history, app }) => {
  const routes = [];

  return (
    <Router history={history} routes={routes} />
  );
};
