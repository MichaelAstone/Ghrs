import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import GeneralLogo from '../../../img/general-logo-with-tag.png';

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse
        });
    }
    render() {
        return (
            <Router>
                <Navbar color="green" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <img src={GeneralLogo} className="nav-logo" height="50px"/>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem active>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#"><i className="fas fa-shopping-cart"></i></NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown>
                                    <DropdownToggle nav caret><i className="fas fa-user-alt"></i></DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="#">Action</DropdownItem>
                                        <DropdownItem href="#">Another Action</DropdownItem>
                                        <DropdownItem href="#">Something else here</DropdownItem>
                                        <DropdownItem href="#">Something else here</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <form className="form-inline md-form mt-0">
                                    <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                                </form>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}
export default NavbarComponent;
