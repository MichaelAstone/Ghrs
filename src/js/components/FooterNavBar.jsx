import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class FooterNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
        <div>


            <div onClick={this.toggleNavbar} className="mx-auto justify-content-center " >Services</div>
            <Collapse isOpen={!this.state.collapsed} navbar className ="bgcoloservices">
                <Nav navbar>
                    <NavItem>
                        <NavLink href="https://www.generalhotel.com/kitchen-design/">Commercial Kitchen Design</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.generalhotel.com/hospitality-design/">Hospitality Design</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>

        </div>
    );
  }
}
