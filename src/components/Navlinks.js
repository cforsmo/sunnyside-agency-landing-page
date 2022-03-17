import React from "react"
import classes from "../Navbar.module.css"


function NavLinks () {
  return(
    <div className={classes.NavLinks}>
      <p className={classes.Logo}>sunnyside</p>
      <nav>
        <ul className={classes.NavListItems}>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className={classes.ContactButton}><button>Contact</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavLinks

