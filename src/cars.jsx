
import './cars.css'
import { FaSearch , FaFilter} from "react-icons/fa";

import Footer from './Footer';


function Carousel2(){
  return(
    <>
        <div className='carousel'>
          <h1>Available Cars</h1>
          <h6>Browse our selection of premium vehicles available for your next adventure</h6>
          
          <div className="CarInputWrap">
            <FaSearch className="SearchIcon" />
            <input className='CarInput' type="text" placeholder='Search'/>
            <FaFilter className="FilterIcon" />
          </div>

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
