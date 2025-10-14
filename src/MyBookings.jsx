// src/pages/Contact.js
import React, {useContext} from "react";
import NavBar from "./Nav";
import Footer from "./Footer";
import './MyBookings.css'

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import {CarContext} from './Context/CarContext'



function MyBookings() {

  const {BookingCar} = useContext(CarContext)

  if(!BookingCar){
     return (
    <>
      <h1>MyBookings</h1>
      <p>No Bookings Yet..,</p>
      <Footer/>
    </>
  );
  }

  return (
    <>
      <h1>MyBookings</h1>

<Container>
    {/* {BookingCar.map((car,index)=>(

    <Card className="MyBookingCard">
      <Card.Body>


        <div>
        <Row>
          <Col>
          <div className="BookingCardDiv">
                <div className="BookingCardDiv1">
                    <img className="MyBookingImage" src={car.image} alt={car.Car} />
                    <h3>{car.Car}</h3>
                    <p>{car.Model} - {car.Location}</p>
              </div>    

                <div className="BookingCardDiv2">
                      <div>
                        <span>Booking</span>
                        <span>Status</span>
                      </div>
                    <div>
                      <p>Rental Period</p>
                      <h5>{car.PickupDate} to {car.ReturnDate}</h5>
                    </div>
                    <div>
                      <p>Pickup Location</p>
                      <h5>{car.Location}</h5>
                    </div>
                </div>   
          </div>  
          </Col>

          <Col >
            <div >
              <p>Total Price</p>
              <h3>{car.Price}</h3>
              <p>Booked on {car.PickupDate}</p>
            </div>
          </Col>
        </Row>
        </div>
      </Card.Body>
    </Card>
    ))} */}


    

    <Card className="MyBookingCard">
      <Card.Body>

        <div>
        <Row>
          <Col>
          <div className="BookingCardDiv">
                <div className="BookingCardDiv1">
                    <img className="MyBookingImage" src={BookingCar.image} alt={BookingCar.Car} />
                    <h3>{BookingCar.Car}</h3>
                    <p>{BookingCar.Model} - {BookingCar.Location}</p>
              </div>    {/*  BookingCardDiv1 ends here ............*/}

                <div className="BookingCardDiv2">
                      <div>
                        <span>Booking</span>
                        <span>Status</span>
                      </div>
                    <div>
                      <p>Rental Period</p>
                      <h5>{BookingCar.PickupDate} to {BookingCar.ReturnDate}</h5>
                    </div>
                    <div>
                      <p>Pickup Location</p>
                      <h5>{BookingCar.Location}</h5>
                    </div>
                </div>   {/*  BookingCardDiv2 ends here ............*/}
          </div>  {/*  BookingCardDiv (for flex) ends here ............*/}
          </Col>

          <Col >
            <div >
              <p>Total Price</p>
              <h3>{BookingCar.Price}</h3>
              <p>Booked on {BookingCar.PickupDate}</p>
            </div>
          </Col>
        </Row>
        </div>
      </Card.Body>
    </Card>
  
  </Container>

      <Footer/>
    </>
    
  );
}

export default MyBookings;
