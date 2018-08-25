//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import Layout from './Layout.jsx';


//render your react application

// Footer styles css
import '../styles/footerStylesheet.scss';
// Footer Component
import Footer from './components/Footer.jsx';
ReactDOM.render(
    <Footer />,
    document.querySelector('#app')
);
