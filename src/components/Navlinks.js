import React from "react"
import classes from "../Navbar.module.css"


function NavLinks () {
  return(
    <div className={classes.NavLinks}>
      <nav>
        <p className={classes.Logo}>sunnyside</p>
        <ul className={classes.NavListItems}>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className={classes.ContactButton}>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavLinks

