import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import EditPassenger from './components/EditPassenger'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
// ReactDOM.render(<EditPassenger />, document.querySelector('.editmodal'));

