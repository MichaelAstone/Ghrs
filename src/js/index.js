//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap';
//include your index.scss file into the bundle
import '../styles/index.scss';
import '../styles/login.scss';

//import your own components
<<<<<<< HEAD
import AddItem from './components/AddItem.jsx';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


ReactDOM.render(
    <AddItem />,
=======
import Layout from './Layout.jsx';


ReactDOM.render(
    <Layout />,
>>>>>>> 698d066facb2c335bc9631f20b42f0693352fe04
    document.querySelector('#app')
);