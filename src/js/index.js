//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import mdbreact from 'mdbreact';
import 'bootstrap';
//include your index.scss file into the bundle
import 'mdbreact/dist/css/mdb.css';
import '../styles/index.scss';
import '../styles/SpecialsStyles.scss';

import '../styles/login.scss';
import '../styles/AboutThisItem.scss';
import '../styles/NavbarComponent.scss';
import '../styles/ProductCard.scss';


//import your own components

import Layout from './Layout.jsx';







//render your react application

ReactDOM.render(

    <Layout />,

    document.querySelector('#app')
);
