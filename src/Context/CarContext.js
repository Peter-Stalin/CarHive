// src/Context/CarContext.js
import React, { createContext, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [BookingCar, SetBookingCar] = useState(null); // only stores one booking

  return (
    <CarContext.Provider value={{ BookingCar, SetBookingCar }}>
      {children}
    </CarContext.Provider>
  );
};

