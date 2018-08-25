//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap';
//include your index.scss file into the bundle
import '../styles/index.scss';
import '../styles/login.scss';

//import your own components
import AddItem from './components/AddItem.jsx';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


ReactDOM.render(
    <AddItem />,
    document.querySelector('#app')
);