import React, { Component } from 'react';
import GeneralLogo from '../../../img/general-logo-with-tag.png';

class NavbarComponent extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-default" role="navigation">
                <a className="navbar-brand" href="#"><img src={GeneralLogo} /></a>
                <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <button className="login">Log In</button>
                    <button className="signup">Sign Up</button>
                    <button className="shoppingCart"><i className="fas fa-shopping-cart fa-1x"></i></button>
                </div>
            </nav>
            );
    }
}
export default NavbarComponent;

