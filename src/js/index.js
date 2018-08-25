//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap';
//include your index.scss file into the bundle
import '../styles/index.scss';
import "popper.js";
import "jquery";

//import your own components
import Layout from './Layout.jsx';




//render your react application

ReactDOM.render(

    <Layout />,

    document.querySelector('#app')
);
