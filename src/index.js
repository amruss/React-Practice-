/**
 * Created by AbbeyRussell on 2/16/16.
 * Commits fucjing up
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route, useRouterHistory, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import routes from './routes';

ReactDOM.render(
    <Router history={appHistory}  onUpdate={() => window.scrollTo(0, 0)}>
                {routes}
                
    </Router>,
    document.getElementById('app')
);