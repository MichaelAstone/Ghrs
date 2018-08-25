import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, TabPane, TabContent, Nav, NavItem, NavLink, Fa } from 'mdbreact';
import classnames from 'classnames';

class AboutThisItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItemPills: '1'
    };
    this.togglePills = this.togglePills.bind(this);
  }

  togglePills(tab) {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  }

  render() {
    return (
        
        <Container className="mt-4">
            <Nav pills color="secondary" className="nav-justified ">
                <NavItem>
                    <NavLink to="#" className={classnames({ active: this.state.activeItemPills === '1' })} onClick={() => { this.togglePills('1'); }}>
            Details
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="#" className={classnames({ active: this.state.activeItemPills === '2' })} onClick={() => { this.togglePills('2'); }}>
            Shipping & returns 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="#" className={classnames({ active: this.state.activeItemPills === '3' })} onClick={() => { this.togglePills('3'); }}>
            Advance
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="#" className={classnames({ active: this.state.activeItemPills === '4' })} onClick={() => { this.togglePills('4'); }}>
            Help
                    </NavLink>
                </NavItem>
            </Nav>
           
        </Container>
    );
  }
}

export default AboutThisItem;