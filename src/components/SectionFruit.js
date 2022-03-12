import React from 'react'
import styled from 'styled-components'

function SectionFruit(props) {
  return(
    <Main>
      <div>
          <img src={`../images/${props.imageCherry}`} alt="Photograph of cherries"/>
          <CherryText>
              <h1>{props.titleCherry}</h1>
              <p>{props.descriptionCherry}</p>
          </CherryText>
      </div>
      <div>
          <img src={`../images/${props.imageOrange}`} alt="Photograph of an orange"/>
          <OrangeText>
              <h1>{props.titleOrange}</h1>
              <p>{props.descriptionOrange}</p>
          </OrangeText>  
      </div>
    </Main>
  )
}

export default SectionFruit

const Main = styled.div`
  height: 100vw;
  width: 100vw;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  
`
const CherryText = styled.div`
  font-family: Fraunces;
  position: relative;
  top: -230px;
  font-size: .9em;
  color: hsl(167, 40%, 24%);
  

  & > p {
    font-family: Barlow;
    font-size: 1.2em;
    max-width: 350px;
    margin-left: 25%;

  }

`
const OrangeText = styled.div`
  font-family: Fraunces;
  position: relative;
  top: -230px;
  font-size: .9em;
  color: hsl(198, 62%, 26%);

  
  & > p {
    font-family: Barlow;
    font-size: 1.2em;
    max-width: 350px;
    margin-left: 25%;
    
  }
`