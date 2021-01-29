import React, { useState } from 'react';
import {connect} from 'react-redux';
import { Navbar, Nav } from 'rsuite';
import Logo from './';



function Header() {
    return (
        <Navbar>
          <Navbar.Header>
          <Logo />
          </Navbar.Header>
          <Navbar.Body>
          <Nav>
            <Nav.Item  >Home</Nav.Item>
            <Nav.Item>News</Nav.Item>
            <Nav.Item>Products</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item  >Settings</Nav.Item>
          </Nav>
          </Navbar.Body>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Header)
