require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
//import EmailContainer from './components/email-container';
import InboxEmailList from './components/inbox-email-list';
import SpamEmailList from './components/spam-email-list';

const routes = (
        <Router history ={hashHistory}>
            <Route path="/inbox" component={InboxEmailList} />
            <Route path="/spam" component={SpamEmailList} />
        < /Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);
