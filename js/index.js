require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import EmailContainer from './components/email-container';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<EmailContainer/>, document.getElementById('app'))
);
