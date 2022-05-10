import React from 'react'
import MobileNavigation from './MobileNav'
import Navbar from "./Navbar"
import classes from "../Navbar.module.css"


function Header() {
  return (
    
    <div className={classes.Header}>
      <MobileNavigation />
      <Navbar />
    </div>
  )
}

export default Header

//test change

