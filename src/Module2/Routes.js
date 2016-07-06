import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import React from 'react';
import LandingPage from './LandingPage';

const ReactR = (
    <Route path="module2">
        <IndexRoute component={LandingPage} />
    </Route>
);

export default ReactR;
