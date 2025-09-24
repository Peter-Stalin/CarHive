
import './cars.css'
import { FiSearch, FiFilter } from 'react-icons/fi'; // Feather Icons

import Footer from './Footer';


function Carousel2(){
  return(
    <>
        <div className='carousel'>
          <h1>Available Cars</h1>
          <h6>Browse our selection of premium vehicles available for your next adventure</h6>
          <input className='Carnpm startsInput' type="text" placeholder= 'Search by Make, Model or Feature'/>
        </div>
      </>
  )
}


function Cars() {
  return (
    <>

      <Carousel2/>
      <Footer/>
    </>
  );
}

export default Cars;
