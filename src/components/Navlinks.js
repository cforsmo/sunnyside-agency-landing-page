import React from "react"
import classes from "../Navbar.module.css"


function NavLinks () {
  return(
      <nav>
        <ul className={classes.NavListItems}>
          <li><div className={classes.Triangle}></div></li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className={classes.ContactButton}><button>Contact</button></li>
        </ul>
      </nav>
  )
}

export default NavLinks

