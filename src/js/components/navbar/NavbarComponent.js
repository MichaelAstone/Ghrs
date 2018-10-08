import React, { Component } from 'react';
import GeneralLogo from '../../../img/general-logo-with-tag.png';
import {Link} from 'react-router-dom';

class NavbarComponent extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-default" role="navigation">
                <Link to = "/" className="navbar-brand"><img src={GeneralLogo} /></Link>
                <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <Link to = "/login">
                        <button className="login">Log In</button>
                    </Link>
                    <Link to = "/register">
                        <button className="signup">Sign Up</button>
                    </Link>
                    <Link to = "/cart">
                        <button className="shoppingCart"><i className="fas fa-shopping-cart fa-1x"></i></button>
                    </Link>
                </div>
            </nav>
            );
    }
}
export default NavbarComponent;

