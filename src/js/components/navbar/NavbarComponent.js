import React, { Component } from 'react';
import GeneralLogo from '../../../img/general-logo-with-tag.png';

class NavbarComponent extends React.Component {
    render(){
        return(
            <div>    
                <nav className="navbar navbar-default" role="navigation">
                    <a className="navbar-brand" href="#"><img src={GeneralLogo} /></a>
                    <div className="menuButtons">
                        <button className="shoppingCart"><i className="fas fa-shopping-cart fa-1x"></i></button>
                        <button className="login">Log In</button>
                        <button className="signup">Sign Up</button>
                    </div>
                </nav>
                <form className="searchBarContainer">
                    <input className="searchInput" type="text" placeholder="Search"/>  
                </form> 
            </div>    
            );
    }
}
export default NavbarComponent;


//need to make new component for search bar bc it doesnt fit in the navbar