import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import React from 'react';
import App from './App';
import Landing from './Landing';
import ModuleOneRoutes from './Module1/Routes';
import ModuleTwoRoutes from './Module2/Routes';

const ReactR = (
                <Route path="/" component={App} >
                    <IndexRoute component={Landing} />
                    {ModuleOneRoutes}
                    {ModuleTwoRoutes}
                </Route>


    );

    export default ReactR;
