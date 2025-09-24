import NavBar from './Nav';
import './App.css';

import Home from './home';
import Cars from './cars';
import MyBookings from './MyBookings';
import DashBoard from './DashBoard';
import CarDetail from './Car-Details';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div >
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/MyBookings" element={<MyBookings />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Car-Details" element={<CarDetail />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
