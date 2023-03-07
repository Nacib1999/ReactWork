    import React from 'react';
    import { Navbar, Nav } from 'react-bootstrap';
    import { NavLink } from 'react-router-dom';

    function NavigationBar () {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand as={NavLink} to="/home">
            MyStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            <Nav.Link as={NavLink} to="/home" style={({isActive}) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={({isActive}) => ({ textDecoration: isActive ? 'underline' : 'none' })}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/products" style={({isActive}) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Products</Nav.Link>
            <Nav.Link as={NavLink} to="/products/add" style={({ isActive }) => ({textDecoration: isActive && "underline",})}>Add NewProduct</Nav.Link>
            {/* <NavLink to="/products" style={({isActive}) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Products</NavLink>  s7i7a ama zarga   */}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
    };

    export default NavigationBar;
