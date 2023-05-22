// import React from 'react'
// import {Routes,Route,Navigate} from 'react-router-dom'
// import Dashboard from '../Pages/Dashboard'
// import Booking from '../Pages/Booking'
// import SellCar from '../Pages/SellCar'
// import Setting from '../Pages/Setting'
// const Router = () => {
//   return (
  
//    <Routes>
//    <Route path='/' element={<Navigate to='/dashboard' element={<Dashboard/>}/>}/>
//     <Route path='/dashboard' element={<Dashboard/>}/>
//     <Route path='/bookings' element={<Booking/>}/>
//     <Route path='/sellCar' element={<SellCar/>}/>
//     <Route path='/setting' element={<Setting/>}/>
//    </Routes>
   
//   )
// }

// export default Router

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import Booking from "../Pages/Booking";
import SellCar from "../Pages/SellCar";
import Setting from "../Pages/Setting";

const Router = () => {
  return (
    <Routes>
      {/* <Route
      //   path="/"
      //   element={<Navigate to="/dashboard" element={<Dashboard />} />}
      // /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/booking" element={<Booking/>} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
};

export default Router;
