import React from "react";
import Footer from './Footer';
import './Car-Details.css'

import Ertiga from './Images/RentalCars/Ertiga.png'
import Swift from './Images/RentalCars/SwiftDzire.png'
import HondaCity from './Images/RentalCars/HondaCity.png'
import Volkswagen from './Images/RentalCars/Volkswagen-Vento.png'
import Innova from './Images/RentalCars/InnovaCrysta.png'
import Ford from './Images/RentalCars/FordFigoAspire.png'
import Mahindra from './Images/RentalCars/Mahindra_Marazo.png'
import CarRent from './Images/Luxury_Car.webp'

import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { faCarSide, faGasPump, faPeopleGroup, faTruckLoading  } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CarBooking(){

    const navigate = useNavigate();
    const {carID} = useParams();  // Get Car ID from the URL..,

    const RentCars = [
      {
        id: 1,
        Car: "Swift Dzire",
        image: Swift,
        Model: "VXi 2023",
        Seats: "4 Seats",
        Fuel: "Diesel" ,
        Gear: "Manual",
        Status: "Available",
        Capacity: "378 L",
        Price: "1500",
        Desc: "Maruti Swift VDi is a fuel-efficient diesel hatchback offering a comfortable ride with smooth handling. Its compact design makes it perfect for city driving while delivering reliable performance.",
        Camera: "360 Camera",
        GPS:"GPS",
        Mirror:"Rear View Mirror",
        Bluetooth: "Bluetooth",
        SeatDesign: "Heated Seat"
      },
      {
        id: 2,
        Car: "Maruti Ertiga",
        image: Ertiga,
        Model: "ZXi 2020",
        Seats: "4 Seats",
        Fuel: "Diesel" ,
        Gear: "Manual",
        Status: "Available",
        Capacity: "209 L",
        Price: "1500",
        Camera: "360 Camera",
        GPS:"GPS",
        Mirror:"Rear View Mirror",
        Bluetooth: "Bluetooth",
        SeatDesign: "Heated Seat"
      },
      {
        id: 3,
        Car: "Volkswagen",
        image: Volkswagen,
        Model: "Sedan",
        Seats: "4 Seats",
        Fuel: "Hybrid" ,
        Gear: "Automatic",
        Status: "Available",
        Capacity: "521 L",
        Price: "1500",
        Camera: "360 Camera",
        GPS:"GPS",
        Mirror:"Rear View Mirror",
        Bluetooth: "Bluetooth",
        SeatDesign: "Heated Seat"
      },
      {
        id: 4,
        Car: "HondaCity",
        image: HondaCity,
        Model: "ZX CVT 2021",
        Seats: "4 Seats",
        Fuel: "Petrol" ,
        Gear: "Automatic",
        Status: "Available",
        Capacity: "506 L",
        Price: "1500",
        Camera: "360 Camera",
        GPS:"GPS",
        Mirror:"Rear View Mirror",
        Bluetooth: "Bluetooth",
        SeatDesign: "Heated Seat"
      },
      {
        id: 5,
        Car: "Mahindra",
        image: Mahindra,
        Model: "M4 2022",
        Seats: "4 Seats",
        Fuel: "Diesel" ,
        Gear: "Manual",
        Status: "Available",
        Capacity: "190 L",
        Price: "1500",
        Camera: "360 Camera",
        GPS:"GPS",
        Mirror:"Rear View Mirror",
        Bluetooth: "Bluetooth",
        SeatDesign: "Heated Seat"
      },
      {
        id: 6,
        Car: "Ford Aspire",
        image: Ford,
        Model: "Titanium 2021",
        Seats: "4 Seats",
        Fuel: "Diesel" ,
        Gear: "Manual",
        Status: "Available",
        Capacity: "359 L",
        Price: "1500",
        Camera: "360 Camera",
        GPS:"GPS",
        Mirror:"Rear View Mirror",
        Bluetooth: "Bluetooth",
        SeatDesign: "Heated Seat"
      },
      {
        id: 7,
        Car: "Innova Crysta",
        image: Innova,
        Model: "ZX 2021",
        Seats: "4 Seats",
        Fuel: "Diesel" ,
        Gear: "Manual",
        Status: "Available",
        Capacity: "300 L",
        Price: "1500",
        Camera: "360 Camera",
        GPS:"GPS",
        Mirror:"Rear View Mirror",
        Bluetooth: "Bluetooth",
        SeatDesign: "Heated Seat"
      }
    ]

    const SelectedCar = RentCars.find((car) => car.id === parseInt(carID) )
    if(!SelectedCar){
      return(
        <>
          <h1>The Car Not Found</h1>
        </>
      )
    }
    return(
        <>
            <Container className="SpaceForFooter">
              <Row>
                <Col xs={12} sm={12} md={8} lg={8}>
                  <img src={SelectedCar.image}  alt="Selected Car Image" style={{width: "800px"}}/>
                  <h2>{SelectedCar.Car}</h2>
                  <h5 className="CarModel">{SelectedCar.Model}</h5>

                   <hr />
                   
                  <Row>
                    <Col xs={4} sm={4} md={2} lg={2} className="CarDetailFlex"><FontAwesomeIcon className="CarDetailIcon" icon={faPeopleGroup} /><span className="IconDesc">{SelectedCar.Seats}</span></Col>
                    <Col xs={4} sm={4} md={2} lg={2} className="CarDetailFlex"><FontAwesomeIcon className="CarDetailIcon" icon={faGasPump} /><span className="IconDesc">{SelectedCar.Fuel}</span></Col>
                    <Col xs={4} sm={4} md={2} lg={2} className="CarDetailFlex"><FontAwesomeIcon className="CarDetailIcon" icon={faCarSide} /><span className="IconDesc">{SelectedCar.Gear}</span></Col>
                    <Col xs={4} sm={4} md={2} lg={2} className="CarDetailFlex"><FontAwesomeIcon className="CarDetailIcon" icon={faTruckLoading} /><span className="IconDesc">{SelectedCar.Capacity}</span></Col>
                  </Row>

                  <h5>Description</h5>
                  <p className="CarDesc">{SelectedCar.Desc}</p>

                  <h5>Features</h5>
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <p className="CarFeature">
                        <FontAwesomeIcon style={{color:"blue", paddingRight:"8px"}} icon={faCircleCheck} className="tickIcon2" />
                        {SelectedCar.Camera}
                      </p>

                      <p className="CarFeature">
                        <FontAwesomeIcon style={{color:"blue", paddingRight:"8px"}} icon={faCircleCheck} className="tickIcon2" />
                        {SelectedCar.GPS}
                      </p>
            
                      <p className="CarFeature">
                        <FontAwesomeIcon style={{color:"blue", paddingRight:"8px"}} icon={faCircleCheck} className="tickIcon2" />
                        {SelectedCar.Mirror}
                      </p>
                    </Col>

                    <Col xs={12} sm={12} md={8} lg={8}>
                        <p className="CarFeature">
                        <FontAwesomeIcon style={{color:"blue", paddingRight:"8px"}} icon={faCircleCheck} className="tickIcon2" />
                        {SelectedCar.Bluetooth}
                      </p>

                      <p className="CarFeature">
                        <FontAwesomeIcon style={{color:"blue", paddingRight:"8px"}} icon={faCircleCheck} className="tickIcon2" />
                        {SelectedCar.SeatDesign}
                      </p>
                    </Col>
                  </Row>
                 
                </Col>
                <Col>
                  <form action="" className="BookForm">
          
                      <div >
                        <Row>
                          <Col className="FormFlexCol1">
                            <h3>Rs. {SelectedCar.Price}</h3>
                          </Col>
                          <Col className="FormFlexCol2">
                            <h6>Per Day</h6>
                          </Col>
                        </Row>
                      </div>

                    <hr className="LineBreak"/>
                      <div className="BookFormFlex">
                         <label htmlFor="">Pickup Date</label>
                         <input className="DateInput" type="Date" />
                      </div>
                      <div className="BookFormFlex">
                         <label htmlFor="">Return Date</label>
                         <input className="DateInput" type="Date" />
                      </div>
                      <div className="BookBtn">
                        <button className="btn btn-primary ">Book Now</button>
                        <p className="CarBookPara">No Credit Card Required to Reserve</p>
                      </div>
                    
                  </form>
                </Col>
              </Row>
            </Container>
        </>
    )
}

function CarDetail(){
    return(
        <>
            <CarBooking/>
            <Footer/>
        </>
    )
}

export default CarDetail;