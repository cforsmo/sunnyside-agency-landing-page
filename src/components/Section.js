import React from 'react'
import styled from 'styled-components'

function Section({title, description, leftBtnText, rightBtnText, backgroundImg, image}) {

  return (
    <Wrap bgImage={`../images/${backgroundImg}`}>
      <ItemText>
        <h1>{title}</h1>
      </ItemText>
      <Text>
        <p>{description}</p>
      </Text>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          { rightBtnText &&
            <RightButton>
              {rightBtnText}
            </RightButton>
          }
        </ButtonGroup>
      </Buttons>
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

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: Fraunces;
  text-transform: uppercase;
`

const Text = styled.div`
  color: black;
  font-family: Barlow;
  max-width: 350px;
`


const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-family: Fraunces;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  height: 40px;
  width: 256px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`




