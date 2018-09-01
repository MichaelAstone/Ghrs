import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../../../img/logo.jpg'; 

class NavbarComponent extends React.Component {
    render() {
        
        return (
            <div classNameNameName="container">
                {/*logo img*/}
                <img src={logo} />
                <div className="dropdown">
                    {/*user font awesome*/}
                    <i className="fas fa-user fa-lg"></i>
                    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Sign Up</a>
                        <a className="dropdown-item" href="#">Login</a>
                    </div>
                    {/*shopping cart*/}
                    <i className="fas fa-shopping-cart fa-lg"></i>
                </div>
                {/*insert search bar here*/}
            </div>
            
        );
    }
}
export default NavbarComponent;

