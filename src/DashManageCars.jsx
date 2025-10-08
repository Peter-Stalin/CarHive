import React, {useState} from "react";

import { Row, Col, Container} from "react-bootstrap";

import { FaCar, FaTasks } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";

import { NavLink } from 'react-router-dom';
import DefProfImg from './Images/DefaultProfile-removebg-preview.png';
import { FaCamera } from "react-icons/fa";

import './DashManageCars.css'

function DashManageCars(){

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
          <Col className="DashNav" lg={2} md={2}>

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

          <Col>
              <h1>DashManageCars</h1>
          </Col>
        </Row>

      </Container>
      
    </>
    )
}

export default DashManageCars