//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap';
//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import Layout from './Layout.jsx';
import ProductCard from './components/ProductCard.jsx';




//render your react application

ReactDOM.render(
    <ProductCard />,

    document.querySelector('#app')
);
