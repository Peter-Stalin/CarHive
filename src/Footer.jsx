import React from "react";

import Logo from './Images/CarHive Logo2.png'
import './footer.css'

import {Container, Nav, NavBar} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";



function Footer(){
    return(
        <>
                <Container className="Footer">
                {/* First Row - 4 Columns */}
                <Row>
                    {/* column 1................................. */}
                    <Col md={6}>
                        <div className="LogoFlex">
                            <img className="LogoImg" src={Logo} alt="Logo"  />
                            <h2>Car<span>Hive</span></h2>
                        </div>
                        <p className="CompDesc">Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.</p>

                         <div className="contact-icons">
                            <FaFacebook className="icon facebook" />
                            <FaInstagram className="icon instagram" />
                            <FaTwitter className="icon twitter" />
                            <FaEnvelope className="icon mail" />
                         </div>
                    </Col>

                     {/* column 2................................. */}
                    <Col md={2}>
                        <h6 className="FootHead">QUICK LINKS</h6>
                        <Nav className="justify-content-end FootFlex" activeKey="/home">
                            <Nav.Item>
                            <Nav.Link className="FootLink" as={Link} to="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link as={Link} to="/cars">Browse Cars</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link as={Link} to="/MyBookings">List your car</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link as={Link} to="/">About</Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
        
                    </Col>

                     {/* column 3................................. */}
                    <Col md={2}>
                        <h6 className="FootHead">RESOURCES</h6>
                        <Nav className="justify-content-end FootFlex" activeKey="/home">
                            <Nav.Item>
                            <Nav.Link as={Link} to="/">Help Center</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link as={Link} to="/">Terms of Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link as={Link} to="/">Privacy Policy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link as={Link} to="/">Insurance</Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                    </Col>

                     {/* column 4................................. */}
                    <Col md={2}>
                        <h6 className="FootHead">CONTACT</h6>
                        <p className="FootPara">1/89, Sri Abirami Nagar</p>
                        <p className="FootPara">Chinnamapalayam, Pollachi</p>
                        <p className="FootPara">+91 70107 26912</p>
                        <p className="FootPara">carhive2025@gmail.com</p>
                    </Col>
                </Row>
   
                <hr />

                {/* Second Row - 2 Columns .................................................*/}
                <Row className="mt-3">
                    <Col><p>&copy; 2025 CarHive. All rights reserved.</p></Col>


                    <Col>
                        <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                            <Nav.Link as={Link} to="/">Privacy</Nav.Link>
                            </Nav.Item>
                            
                                <span className=" PipeSymb">|</span> 

                            <Nav.Item>
                            <Nav.Link as={Link} to="/">Terms</Nav.Link>
                            </Nav.Item>

                                 <span className="PipeSymb">|</span> 

                            <Nav.Item>
                            <Nav.Link as={Link} to="/">Cookies</Nav.Link>
                            </Nav.Item>
                            
                            
                        </Nav>
                    </Col>
                </Row>
                </Container>
        </>
    )
}

export default Footer;