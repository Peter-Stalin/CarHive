import NavBar from './Nav';
import './App.css';

import Home from './home';
import Cars from './cars';
import MyBookings from './MyBookings';
import DashBoard from './DashBoard';
import CarDetail from './Car-Details';

import DashAddCars from './DashAddCars';
import DashBookings from './DashBookings';
import DashManageCars from './DashManageCars';

import { CarProvider } from "./Context/CarContext";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div >
      <CarProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/MyBookings" element={<MyBookings />} />
        <Route path="/DashBoard" element={<DashBoard />} />
         <Route path="/Car-Details/:carID" element={<CarDetail />} />

         <Route path="/DashAddCars" element={<DashAddCars />} />
          <Route path="/DashManageCars" element={<DashManageCars />} />
          <Route path="/DashBookings" element={<DashBookings />} />

      </Routes>
    </Router>
    </CarProvider>  {/* </CarDetailProvider>  */}
    </div>
  );
}

export default App;
