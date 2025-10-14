import React, {useState} from "react";

import { Row, Col, Container} from "react-bootstrap";

import { FaCar, FaTasks } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";

import { NavLink } from 'react-router-dom';
import DefProfImg from './Images/DefaultProfile-removebg-preview.png';
import { FaCamera } from "react-icons/fa";

import './DashAddCars.css'

function DashAddCars(){

    const [Image , SetImage] = useState(null);
    
      const UploadProfile = (e) => {
        const ProfileImg = e.target.files[0];
    
        if(ProfileImg && ProfileImg.type.startsWith("image/")){
            const reader = new FileReader();
    
            reader.onload = () => {
              SetImage(reader.result) // saves base 64 data to Store
            }
            reader.readAsDataURL(ProfileImg);
        }
        else{
          SetImage(null)
        }
          
    
      }
    
    return(
         <>
      <Container fluid>

        <Row>
          <Col className="DashNav" lg={2} md={3} xs={2}>

              <input type="file" className="InputProfile" id="FileInput" onChange={UploadProfile} />
              <label htmlFor="FileInput" className="ProfImgLabel">
                <div className="ParentProfImg">

                    <div className="ProfileImage">
                        <img src={Image ? Image : DefProfImg} alt="Profile" />
                        <div className="UploadOverlay">
                          <FaCamera className="CameraIcon" />
                        </div>
                    </div>

                </div>
              </label>
              
            <div className="LinkMenu">
            <ul>
              <li className="DashMenu">
                <NavLink to="/DashBoard" className={({ isActive }) => isActive ? "active" : ""}>
                  <MdHome title="App / Home" />
                  <p>DashBoard</p>
                </NavLink>
              </li>

              <li className="DashMenu">
                <NavLink to="/DashAddCars" className={({ isActive }) => isActive ? "active" : ""}>
                  <BsPlusSquare title="Add New" />
                  <p>Add Car</p>
                </NavLink>
              </li>

              <li className="DashMenu">
                <NavLink to="/DashManageCars" className={({ isActive }) => isActive ? "active" : ""}>
                  <FaCar title="Car" />
                  <p>Manage Cars</p>
                </NavLink>
              </li>

              <li className="DashMenu">
                <NavLink to="/DashBookings" className={({ isActive }) => isActive ? "active" : ""}>
                  <FaTasks title="Notes / Task" />
                  <p>Bookings</p>
                </NavLink>
              </li>
            </ul>
            </div>
          </Col>

          <Col lg={10} md={9} xs={10}>
              <div className="AddCarsMarPad">
                  <h2 >Add New Cars</h2>
                  <p className="AddCarsContentPara">Fill in details to list a new car for booking, including pricing, availability, and car specifications.</p>
                  <form action="" className="AddCarForm">

                  <Container>
                    <Row>
                        <Col xs={12} sm={12}>
                        <div className="AddCarFormFlex">
                          <label htmlFor="">Brand</label>
                          <input type="text" placeholder="eg., Toyota, Honda, Kia..."/>
                        </div>
                        </Col>
                        <Col xs={12} sm={12}>
                        <div className="AddCarFormFlex">
                          <label htmlFor="">Model</label>
                          <input type="text" placeholder="eg., XUV-700, VDI, X5..."/>
                        </div>
                        </Col>
                    </Row>

                    
                    <div>
                      <Row>
                        <Col xs={12} sm={12} md={4}>
                        <div className="AddCarFormFlex Design">
                          <label htmlFor="">Year</label>
                          <input type="number" />
                        </div>
                        </Col>

                        <Col xs={12} sm={12} md={4}>
                        <div className="AddCarFormFlex Design">
                          <label htmlFor="">Price(₹)</label>
                          <input type="number"  min="700" />
                        </div>
                        </Col>

                        <Col xs={12} sm={12} md={4}>
                        <div className="AddCarFormFlex Design">
                          <label htmlFor="Category">Category</label>
                          <select name="Category" id="Category">
                            <option value="SelectCategory">Select a Category</option>
                            <option value="SUV">SUV</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Van">Van</option>
                          </select>
                        </div>
                        </Col>
                      </Row>
                     
                      <Row>
                        <Col xs={12} sm={12} md={4}>
                        <div className="AddCarFormFlex Design">
                          <label htmlFor="Transmision">Transmission</label>
                          <select name="Transmission" id="Transmission">
                            <option value="SelectTransmission">Select a Transmission</option>
                            <option value="Manual">Manual</option>
                            <option value="Automatic">Automatic</option>
                            <option value="SemiAutomatic">Semi-Automatic</option>
                          </select>
                        </div> 
                        </Col>

                        <Col xs={12} sm={12} md={4}>
                        <div className="AddCarFormFlex Design">
                            <label htmlFor="">Fuel Type</label>
                              <select name="Category" id="Category">
                                <option value="SelectCategory">Select a Category</option>
                                <option value="SUV">SUV</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Van">Van</option>
                              </select>
                        </div>
                        </Col>
                      
                        <Col xs={12} sm={12} md={4}>
                        <div className="AddCarFormFlex Design">
                          <label htmlFor="">Seating Capacity</label>
                          <input type="number"  min="3" max="25"/>
                        </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="AddCarFormFlex">
                      <label htmlFor="Location">Location</label>
                      <select name="Location" id="Location">
                          <option value="SelectLocation">Select a Location</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Coimbatore">Coimbatore</option>
                          <option value="Thuthukudi">ThuThukudi</option>
                          <option value="Pollachi">Pollachi</option>
                        </select>
                    </div>

                    <div className="AddCarFormFlex">
                       <label htmlFor="Description">Description</label>
                       <textarea name="Descrition" id="Description" placeholder="Type Your Car Descrition" rows='4' maxLength='200'></textarea>
                    </div>  

                    <button className="btn btn-primary btn-ListCar">List Your Car</button>                   
                  </Container>
                  </form>

              </div>
              
          </Col>
        </Row>

      </Container>
      
    </>
    )
}

export default DashAddCars;