import React from 'react'
import styled from 'styled-components'

function SectionEgg(props) {
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
        <img src={`../images/${props.image}`} alt="Photograph of an egg"/>
      </Image>
     
    </Main>
  )
}

export default SectionEgg

const Main = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    
  }
  
`

const Text = styled.div`
  padding: 150px;
  text-align: left;
`

const MainText = styled.div` 
  font-family: Fraunces;
  font-size: 1.2em;
  max-width: 400px;
  color: hsl(212, 27%, 19%);
`

const SmallText = styled.div`
  font-family: Barlow;
  font-size: 1em;
  max-width: 350px;
  color: hsl(232, 10%, 55%);

`

const Image = styled.div`
  

`

const Button = styled.div`
  font-family: Fraunces;
  text-transform: uppercase;
  border-bottom: 6px solid hsl(51, 100%, 49%);
  display: inline-block;
  line-height: 7px;
  

`
/*- Very dark desaturated blue: hsl(212, 27%, 19%)
- Very dark grayish blue: hsl(213, 9%, 39%)
- Dark grayish blue: hsl(232, 10%, 55%)
- Grayish blue: hsl(210, 4%, 67%)
- White: hsl(0, 0%, 100%)_*/