require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import EmailContainer from './components/email-container';
import MessageContainer from './components/message-container';
import AppChrome from './components/app-chrome';
import FolderContainer from './components/folder-container';


const routes = (
        <Router history ={hashHistory}>
            <Route path="/emails" component={AppChrome}>
                <IndexRoute component={FolderContainer} />
                <Route path=":folder" >
                    <IndexRoute component={EmailContainer}/>
                    <Route path=":messageid" component={MessageContainer} >
                    <IndexRoute />
                    </Route>
                </Route>
            </Route>
        </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);
