import React from 'react';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility } from '../../reducers/Layout';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';

const Header = ({
  showMobileMenu,
  toggleMobileNavVisibility
}) => (
    <Navbar fluid={true}>
      <Navbar.Header>
        <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={toggleMobileNavVisibility}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </Navbar.Header>

      <Navbar.Collapse>

        <Nav>
          <NavItem><i className="fa fa-dashboard"></i></NavItem>
        </Nav>
        <div className="separator"></div>
        <Nav pullRight>
          <NavItem className={this.isPathActive('/components/buttons') ? 'active' : null}>Coaching Staff</NavItem>
          <NavItem className={this.isPathActive('/components/buttons') ? 'active' : null}>Captains</NavItem>
          <NavItem className={this.isPathActive('/components/buttons') ? 'active' : null}>Apparel Store</NavItem>
          <NavDropdown title="Forms" id="right-nav-bar">
            <MenuItem href="https://www.aasd.k12.wi.us/families/athletic_forms">Appleton West</MenuItem>
            <MenuItem href="https://www.kimberly.k12.wi.us/kimberly-high/athletics/forms-and-policies">Kimberly</MenuItem>
          </NavDropdown>
          <NavItem className={this.isPathActive('/components/buttons') ? 'active' : null}>Account</NavItem>
          <NavItem>Log out</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

const mapDispatchToProp = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default connect(null, mapDispatchToProp)(Header);