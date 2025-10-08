import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

 import { FaSearch } from "react-icons/fa";

import LogoImg from './Images/CarHive Logo2.png';
import './Nav.css'


function NavBar() {
  return (
    <>
      
      <Navbar className="justify-content-end MyNavBar" expand="lg" activeKey="/home">

    
        <Container>
          <Navbar.Brand className='WholeLogo' href="#home">
            <img 
              alt="Logo Image"
              src={LogoImg}
              width="55"
              height="70"
              className=" "
            />{' '}
            <span className="LogoHead">Car<span>Hive</span></span> 
          </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ms-auto" activeKey="/home">
            <Nav.Link className='LinkTab' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='LinkTab' as={Link} to="/cars">Cars</Nav.Link>
            <Nav.Link className='LinkTab' as={Link} to="/MyBookings">My Bookings</Nav.Link>
            <div className="LinkTab SearchBoxWrap">
                  <input type="text" className="SearchInput" placeholder="Search..." />
                  <FaSearch className="SearchIcon" />
            </div>
            <Nav.Link className='LinkTab' as={Link} to="/DashBoard">Dashboard</Nav.Link>
            
            <Button type="submit" className='SubBtn'>Logout</Button>
          </Nav>

         </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <hr/> */}
    </>
  );
}

export default NavBar;