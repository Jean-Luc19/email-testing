require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import EmailContainer from './components/email-container';
import MessageContainer from './components/message-container';



const routes = (
        <Router history ={hashHistory}>

            <Route path= ":folder" component={EmailContainer}>
              <Route path = ":messageid" component = {MessageContainer}/>
            </Route>
        < /Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);
