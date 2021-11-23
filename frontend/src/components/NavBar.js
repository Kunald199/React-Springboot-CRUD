import React from 'react'

import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
       <nav className="nav-wrapper blue darken-3">
           <div className="container">
               <b className="brand-logo">Customer Management Service</b>
               <ul className="right">
                   <li><b><NavLink to="/">All Records</NavLink></b></li>
                   <li><b><NavLink to="/customers/insert">Add</NavLink></b></li>
                   <li><b><NavLink to="/customers/update">Update</NavLink></b></li>
                   <li><b><NavLink to="/customers/get">Get Record</NavLink></b></li>
               </ul>
           </div>
       </nav>


    )
}

export default Navbar;

