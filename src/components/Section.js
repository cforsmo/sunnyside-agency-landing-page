import React from 'react'
import styled from 'styled-components'

function Section({title, description, backgroundImg, backgroundImgMobile, image, iconDown}) {

  return (
    <Wrap bgImage={`../images/${backgroundImg}`}>
      <ItemText>
        <h1>{title}</h1>
      </ItemText>
      <DownArrow src="/images/icon-arrow-down.svg" />
      <Text>
        <p>{description}</p>
      </Text>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../images/image-header.jpg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`}
`
const MobileImage = styled.div`
  /*display: none;

  @media (max-width: 768px) {
    display: flex;
    background-image: url(../images/image-header-mobile.jpg);

  }*/
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  color: white;
  font-size: 2.1em;
  letter-spacing: .2em;
  font-family: Fraunces;
  text-transform: uppercase;
`

const Text = styled.div`
  color: black;
  font-family: Barlow;
  max-width: 350px;
`


const DownArrow = styled.img`
  height: 100px;
  margin-top: -250px;

`


