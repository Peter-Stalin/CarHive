import NavBar from './Nav';
import './App.css';

import Home from './home';
import Cars from './cars';
import MyBookings from './MyBookings';
import List from './list';


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
        <Route path="/list" element={<List />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
