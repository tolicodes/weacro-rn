import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import PoseLoader from './components/PoseLoader';

export default () => (
  <PageLayout>
    <Switch>
      <Route
        exact
        path="/"
        component={PoseLoader}
      />
      <Route
        exact
        path="/pose/:singlePose?"
        component={PoseLoader}
      />
      <Route path="/about" component={PoseLoader} />
      <Route component={PoseLoader} />
    </Switch>
  </PageLayout>
);
