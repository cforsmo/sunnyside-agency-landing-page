import React from 'react'
import styled from 'styled-components'

function SectionCup(props) {
  return(
    <Main>
      <Text>
        <MainText>
          <h1>{props.title}</h1>
        </MainText>
        <SmallText>
          <p>{props.description}</p>
        </SmallText>
        <Button>
        <div>{props.buttonText}</div>
        </Button>
      </Text>
      <Image>
        <img src={`../images/${props.image}`}/>
      </Image>
     
    </Main>
  )
}

export default SectionCup

const Main = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

`

const Text = styled.div`
  padding: 150px;
  text-align: left;
`

const MainText = styled.h1` 
  font-family: Fraunces;
  font-size: 1.2em;
  max-width: 400px;
  color: hsl(212, 27%, 19%);

`

const SmallText = styled.p`
  font-family: Barlow;
  font-size: 1em;
  max-width: 400px;
  color: hsl(232, 10%, 55%);

`

const Image = styled.div`


`

const Button = styled.div`
  font-family: Fraunces;
  text-transform: uppercase;
`