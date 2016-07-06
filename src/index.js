import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import RootRoute from './Routes';


export default ReactDOM.render(         
    <Router history={browserHistory}>
    { RootRoute }
    </Router>
        , document.getElementById('root'));