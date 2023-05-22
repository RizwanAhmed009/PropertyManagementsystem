import React from 'react'
import "./Sidebar.css";
const Sidebar = () => {
  return (
   <div className="sidebar">
    <div className="sidebar__top">
     <h2> <span><i class="ri-car-line"></i></span> Uber</h2>
    </div>
    <div className="sidebar__content">
      <div className="menu">
       
      </div>
      <div className="sidebar__bottom">
        <span><i class="ri-logout-circle-r-line"></i>LogOut</span>
      </div>
    </div>
   </div>
  )
}

export default Sidebar
