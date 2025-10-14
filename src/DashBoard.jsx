// src/pages/Contact.js
import React, {useState} from "react";

import { Row, Col, Container} from "react-bootstrap";

import { FaCar, FaTasks } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";

import { NavLink } from 'react-router-dom';
import DefProfImg from './Images/DefaultProfile-removebg-preview.png';
import { FaCamera } from "react-icons/fa";

import { FaBookOpen } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

import './DashBoard.css'
// import { img } from "motion/react-client";


function DashBoard() {

  // Profile Image in Dashboard Function...................................
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

  //  Contents in Dashboard.......................................
  const [Cars , SetCars] = useState(0);

  const [Bookings , SetBookings] = useState(0);

  const [Pending , SetPending] = useState(0);

  const [Confirmed , SetConfirmed] = useState(0);

  return(
    <>
      <Container fluid>

        
        <Row>
          <Col className="DashNav ps-0" lg={2} md={2}>

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
                  <MdHome className="DashIcon" title="App / Home" />
                  <p>DashBoard</p>
                </NavLink>
              </li>

              <li className="DashMenu">
                <NavLink to="/DashAddCars" className={({ isActive }) => isActive ? "active" : ""}>
                  <BsPlusSquare className="DashIcon" title="Add New" />
                  <p>Add Car</p>
                </NavLink>
              </li>

              <li className="DashMenu">
                <NavLink to="/DashManageCars" className={({ isActive }) => isActive ? "active" : ""}>
                  <FaCar className="DashIcon" title="Car" />
                  <p>Manage Cars</p>
                </NavLink>
              </li>

              <li className="DashMenu">
                <NavLink to="/DashBookings" className={({ isActive }) => isActive ? "active" : ""}>
                  <FaTasks className="DashIcon" title="Notes / Task" />
                  <p>Bookings</p>
                </NavLink>
              </li>
            </ul>
            </div>
          </Col>

          <Col>
            <div className="DashMarPad">
                <h2>Admin Dashboard</h2>
                <p className="DashContentPara">Monitor overall platform performance including total cars, bookings, revenue, and recent activities</p>

                <div className="FirstRowCards">
                {/* Total Cars */}
                <div className="DashCards">
                    <div className="DashCardContent">
                        <p>Total Cars</p>
                        <h5>{Cars}</h5>
                    </div>
                    <div className="DashCardIcon">
                       <FaCar title="Car" className="NavIcon"/>               
                    </div>
                </div>

                {/* Total Bookings */}
                <div className="DashCards">
                    <div className="DashCardContent">
                        <p>Total Bookings</p>
                        <h5>{Bookings}</h5>
                    </div>
                    <div className="DashCardIcon">
                       <FaBook className="NavIcon" />               
                    </div>
                </div>

                {/* Pending */}
                <div className="DashCards">
                    <div className="DashCardContent">
                        <p>Pending</p>
                        <h5>{Pending}</h5>
                    </div>
                    <div className="DashCardIcon">
                       <FaBook className="NavIcon" />               
                    </div>
                </div>

                {/* Confirmed */}
                <div className="DashCards">
                    <div className="DashCardContent">
                        <p>Confirmed</p>
                        <h5>{Confirmed}</h5>
                    </div>
                    <div className="DashCardIcon">
                       <FaBook className="NavIcon" />               
                    </div>
                </div>

              </div>  {/* FirstRowCard class ending...........*/}

            </div>
          </Col>
        </Row>

      </Container>
      
    </>
  )
}

export default DashBoard;




