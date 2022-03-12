import React from 'react'
import {useState} from "react"
import NavLinks from "./Navlinks"
import {FiMenu} from 'react-icons/fi'
import classes from "../Navbar.module.css"


function MobileNavigation () {
 const [open, setOpen] = useState(false);
 
  return (
      <nav className={classes.MobileNavigation}>
        <FiMenu className={classes.Hamburger}
        size='30px' color='white'
        onClick={() => setOpen(!open)} />
            
        {open && <NavLinks />}
      </nav>
  )
}

export default MobileNavigation

