import './home.css'
import CarCarousel from './Images/sedan.png'

import { useEffect } from 'react';

import { motion } from "motion/react"
import AOS from "aos";
import "aos/dist/aos.css";

import Ertiga from './Images/RentalCars/Ertiga.png'
import Swift from './Images/RentalCars/SwiftDzire.png'
import HondaCity from './Images/RentalCars/HondaCity.png'
import Volkswagen from './Images/RentalCars/Volkswagen-Vento.png'
import Innova from './Images/RentalCars/InnovaCrysta.png'
import Ford from './Images/RentalCars/FordFigoAspire.png'
import Mahindra from './Images/RentalCars/Mahindra_Marazo.png'
import CarRent from './Images/Luxury_Car.webp'

import Cust1 from './Images/Customers/Cust1.png'
import Cust2 from './Images/Customers/cust2.png'
import Cust3 from './Images/Customers/cust3.png'

import Footer from './Footer';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCarSide, faGasPump, faPeopleGroup , faTruckLoading } from "@fortawesome/free-solid-svg-icons";


function Carousel(){

useEffect(() => {
    AOS.init({
      duration: 800,   // animation duration (in ms)
      easing: "ease-in-out", 
      once: true,      // whether animation should happen only once
      mirror: false    // whether elements animate out while scrolling past
    });
  }, []);


   return(
    <div className='Carousel-Container'>
      <h1 className='CarouselH1' data-aos="fade-up">Luxury Cars on Rent</h1>

      <form className='CarForm' data-aos="fade-up" data-aos-delay="200">
        <div className='CarFormSub'>
        <div className='CarouselFormData'>
          <label htmlFor="location">Pickup Location</label>
            <select name="location" id="location">
              <option value="Pollachi">Pollachi</option>
              <option value="Pollachi">Chennai</option>
              <option value="Pollachi">Coimbatore</option>
              <option value="Pollachi">Thuthukudi</option>
            </select>
        </div>
        <div className='CarouselFormData'>
             <label htmlFor="PickupDate">Pick-up Date</label>
             <input type="Date" />
        </div>
        <div className='CarouselFormData'>
             <label htmlFor="ReturnDate">Return Date</label>
             <input type="Date" />
        </div>

          <button className='btn btn-primary SearchBtn'><FaSearch className="search-icon"/>Search</button>
        </div>
      </form>

      <img className='CarouselImg'  data-aos="fade-up" data-aos-delay="400" src={CarCarousel} alt="Car_Carousel-img" />
    </div>
   )
}

function ExploreVehicles(){

  useEffect(() => {
    AOS.init({
      duration: 800,   // animation duration (in ms)
      easing: "ease-in-out", 
      once: true,      // whether animation should happen only once
      mirror: false    // whether elements animate out while scrolling past
    });
  }, []);

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
        Capacity: "378 L"
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
        Capacity: "209 L"
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
        Capacity: "521 L"
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
        Capacity: "506 L"
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
        Capacity: "190 L"
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
        Capacity: "359 L"
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
        Capacity: "300 L"
      }
    ]


  return(
    <>
      <h2  className='ExploreH2' data-aos="fade-up" data-aos-delay="00">Explore Vehicles</h2>
      <h6 className='ExploreH6' data-aos="fade-up" data-aos-delay="00">Where luxury meets the road – explore CarHive’s premium vehicles tailored for your next trip.</h6>
      
      {/* <div className="CarsCards"> */}
      <Container>
      <Row data-aos="fade-up" data-aos-delay="200">
      {RentCars.map((carhive)=>(
        <Col key={carhive.id} xs={12} md={6} lg={4} className="mb-4">
        <Card className='Card'>
          <Card.Img className='CardImage' variant="top" src={carhive.image} />
          <Card.Body>
            <Card.Title>{carhive.Car}</Card.Title>
             <Card.Subtitle className='cardSub'>{carhive.Model}</Card.Subtitle>
              
              <Row >
                <Col xs={6} className='mb-6'>
                  <Card.Text><FontAwesomeIcon icon={faPeopleGroup} style={{ marginRight: "6px" }} />{carhive.Seats}</Card.Text>
                  <Card.Text><FontAwesomeIcon icon={faCarSide} style={{ marginRight: "6px" }} />{carhive.Gear}</Card.Text>
                </Col>
                <Col xs={6} className='mb-6'>
                  <Card.Text><FontAwesomeIcon icon={faTruckLoading} style={{ marginRight: "6px" }} />{carhive.Capacity}</Card.Text>
                  <Card.Text><FontAwesomeIcon icon={faGasPump} style={{ marginRight: "6px" }} />{carhive.Fuel}</Card.Text>
                </Col>
              </Row>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        </Col>
        ))
        
      }
      </Row >
      <div className='ExpBtnWrapper'>
          <div className='ExpBtn'>Explore all Cars  <FontAwesomeIcon icon={faArrowRight} /></div>
      </div>
     </Container>
      
    </>
  );
}

function LuxuryCar(){
  return(
    <>
    <Container>
      <div className='Luxury'>
        <Row>
          <Col className='LuxPara' >
            <h3 className='LuxH3'>Turn Your Luxury Car Into Income</h3>
             <p className='LuxP'>
                Earn passive income effortlessly by listing your premium car with us.  
                We handle insurance, driver checks, and payments — you just enjoy the earnings.
            </p>
            <div className='ListCar'>List your cars</div>
          </Col>
          <Col>
            <img className='LuxuryRent' src={CarRent} alt="" />
          </Col>
        </Row>
      </div>
    </Container>
    </>
  );
}

function Customers(){

  const Customers =[
    {
        id: 1,
        CustImg: Cust1,
        CustName: 'Thamizh',
        CustLocation: 'Coimbatore,TamilNadu',
        CustReview: "I've rented cars from various companies, but the experience with CarHive was exceptional."
    },
    {
        id: 2,
        CustImg: Cust2,
        CustName: 'Abdhul Rahman',
        CustLocation: 'Madurai,TamilNadu',
        CustReview: "CarHive made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!"
    },
    {
        id: 3,
        CustImg: Cust3,
        CustName: 'Immanuel',
        CustLocation: 'Thuthukudi,TamilNadu',
        CustReview: "I highly recommend CarHive! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service."
    },
      
    ]
  


  return(
    <>
      <h2 className='ExploreH2'>What Our Customers Says</h2>
      <h6 className='ExploreH6'>Discover why discerning travelers choose StayVenture for their luxury accommodations around the world.</h6>

    <Container >
      <Row >
      {Customers.map((CustRev)=>(
        <Col key={CustRev.id} xs={12} md={4} >
        <Card  className='CustCard'>
        
        <Card.Body >
            <Card.Title className='CustTittle'>
                <Row>
                    <Col md={3}>
                      <img className='CustImg' src={CustRev.CustImg} alt="Customer Image" />
                    </Col>
                    <Col md={9}>
                      <h4>{CustRev.CustName}</h4>
                      <h6 className='CustLoc'>{CustRev.CustLocation}</h6>
                    </Col>
                </Row>
              </Card.Title>
              
              <Card.Text>
                {CustRev.CustReview}
              </Card.Text>

        </Card.Body>
      </Card>
      </Col>
      ))}
     </Row>
    </Container>
    </>
  );
}


// Subscribe............................................,

function Subscribe(){
  return(
    <>
      <div className="subscribe">

          <h2 className='ExploreH2'>Never Miss a Deal</h2>
          <h6 className='ExploreH6'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</h6>
        <div className='emailSubs'>
          <input className='email' type="email" placeholder='Your Mail-id to Subscribe'/>
          <button className='button'>Subscribe</button>
        </div>

      </div>
        
    </>
  )
}


function Home() {
  return (
    <>
      <Carousel/>
      <ExploreVehicles/>
      <LuxuryCar/>
      <Customers/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default Home;
