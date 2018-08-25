import React from "react";
import { Button, FormGroup, FormControl, ControlLabel,Collapse,NavbarToggler,NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from "react-bootstrap";

class Navbar extends React.Component{
   render() {
      return <Navbar>
          <Navbar.Header>
              <Navbar.Brand>
                  <a href="#home">Brand</a>
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              <Navbar.Form pullLeft>
                  <FormGroup>
                      <FormControl type="text" placeholder="Search" />
                  </FormGroup>{' '}
                  <Button type="submit">Submit</Button>
              </Navbar.Form>
          </Navbar.Collapse> </Navbar>;
      }
}
export default Navbar();
