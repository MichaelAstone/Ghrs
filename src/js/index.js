//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap';
//include your index.scss file into the bundle
import 'mdbreact/dist/css/mdb.css';
import '../styles/index.scss';

import '../styles/login.scss';


//import your own components

import Layout from './Layout.jsx';




//render your react application

ReactDOM.render(

    <Layout />,

    document.querySelector('#app')
);
