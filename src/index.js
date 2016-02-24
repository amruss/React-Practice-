/**
 * Created by AbbeyRussell on 2/16/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import Detail from './pages/Detail';
import List from './pages/List';

ReactDOM.render(
    <Router history={appHistory}  onUpdate={() => window.scrollTo(0, 0)}>
                
                <Route path="/VotingRecord" component = {Detail} />
                <Route path="/" component={List } />
    </Router>,
    document.getElementById('app')
);