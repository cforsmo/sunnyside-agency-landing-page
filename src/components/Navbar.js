import React from 'react'
import NavLinks from "./Navlinks"
import classes from "../Navbar.module.css"


function Navbar() {
  return (
    <nav className={classes.Navigation}>
      <NavLinks />
    </nav>
  )
}


export default Navbar

