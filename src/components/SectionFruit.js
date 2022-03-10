import React from 'react'
import styled from 'styled-components'

function SectionFruit(props) {
  return(
    <Main>
      <Cherry>
          <img src={`../images/${props.imageCherry}`}/>
          <CherryText>
              <h1>{props.titleCherry}</h1>
              <p>{props.descriptionCherry}</p>
          </CherryText>
      </Cherry>
      <Orange>
          <img src={`../images/${props.imageOrange}`}/>
          <OrangeText>
              <h1>{props.titleOrange}</h1>
              <p>{props.descriptionOrange}</p>
          </OrangeText>  
      </Orange>
    </Main>
  )
}

export default SectionFruit

const Main = styled.div`
  height: 100vw;
  width: 100vw;
  display: flex;

  
`

const Cherry = styled.image`


`

const Orange = styled.image` 

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