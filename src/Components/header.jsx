import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends Component {
  
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
          <Navbar style={{backgroundColor: "green"}} color="faded" light>
          <NavbarBrand href="/" className="mr-auto">{this.props.judul}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
          <hr color="black"></hr>
          <Nav navbar>
          <NavItem>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/restaurant">Restaurant</NavLink>
              <NavLink href="/Menu">Menu</NavLink>
              <NavLink href="/pembayaran">Payment</NavLink>
          </NavItem>
          </Nav>
          </Collapse>
          </Navbar>
      </div>
    )
  }
}