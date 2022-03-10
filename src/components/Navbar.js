import React from 'react'
import styled from 'styled-components'

function Navbar(props) {

  return (
    <NavBar>
      <NavText>{props.text}</NavText>
      <NavList>
        <li>{props.about}</li>
        <li>{props.services}</li>
        <li>{props.projects}</li>
        <ContactButton>{props.contact}</ContactButton>
      </NavList>
      
      
      
    </NavBar>
  )
}


export default Navbar

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 30px;
  left: 30px;
  right: 10px;
  bottom: 0;
  z-index: 0;
  color: white;
 
  
`

const NavText = styled.div`
  font-family: Barlow;
  font-size: 2em;
  font-weight: bold;
`

const NavList = styled.div`
    display: flex;


  & > * { 
  font-family: Barlow;
  font-size: 1.3em;
  list-style-type: none;
  padding: 20px;

  }
`
const ContactButton = styled.button`
  height: 50px;
  width: 150px;
  border-radius: 30px;
  border: 0;
  text-align: center;
  padding: 10px;
  margin: 10px;
  font-family: Fraunces;
  text-transform: uppercase;
  font-size: 1.1em;
  color: hsl(212, 27%, 19%);
`
