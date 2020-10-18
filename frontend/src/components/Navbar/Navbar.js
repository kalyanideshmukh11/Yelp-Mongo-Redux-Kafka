import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import   '../../assets/style.css';
class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">                
                <Nav className="mr-auto">
                    <Navbar.Brand href="#"><img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Yelp</Navbar.Brand>                    
                    {localStorage.getItem('token') && cookie.load('persona')==='customer' && <Nav.Link  class="active" class="active" href="/dashboard">Dashboard</Nav.Link>}
                    {localStorage.getItem('token') && cookie.load('persona')==='restaurant' && <Nav.Link href="/restaurantdashboard">Dashboard</Nav.Link>}
                    {localStorage.getItem('token') && cookie.load('persona')==='customer' && <Nav.Link href="/orders">Orders</Nav.Link>}
                    {localStorage.getItem('token') && cookie.load('persona')==='customer' &&<Nav.Link class="active" href="/event">Events</Nav.Link>}
                    {localStorage.getItem('token') && cookie.load('persona')==='restaurant' && <Nav.Link href="/restaurantorder">Orders</Nav.Link>}
                    {localStorage.getItem('token') && cookie.load('persona')==='restaurant' &&<Nav.Link href="/restaurantevent">Events</Nav.Link>}
                </Nav>
                {!localStorage.getItem('token') && <Link to='/login'>Sign In</Link>}
                {!localStorage.getItem('token') && <Link className="pl-5" to='/signup'>Sign Up</Link>}  
                {localStorage.getItem('token') && cookie.load('persona')==='customer' && <Nav.Link href="/profile">Profile</Nav.Link>}
                {localStorage.getItem('token') && <Nav.Link href="/logout">Sign Out</Nav.Link>}
            </Navbar>
            //localStorage.getItem('first_name') ? localStorage.getItem('first_name') :
        );
    };
};
 
export default withRouter(connect(null)(Navigation));