import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import './assets/styles/main.scss';

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('app'));
