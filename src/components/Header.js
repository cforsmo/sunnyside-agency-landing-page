import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

function Header() {
  return (
    <div>
      <Navbar 
      text="sunnyside" 
      about="About"
      services="Services"
      projects="Projects"
      contact="Contact"
      />

    </div>
  )
}

export default Header

