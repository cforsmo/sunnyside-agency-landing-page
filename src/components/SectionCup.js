import React from 'react'
import styled from 'styled-components'
import classes from "../Section.module.css"


function SectionCup(props) {
  return(
    <Main>
      <div>
        <section className={classes.TextCup}>
          <h1 className={classes.TitleCup}>{props.title}</h1>
          <p className={classes.ParagraphCup}>{props.description}</p>
        </section>
      
        <div className={classes.ButtonCup}>{props.buttonText}</div>
        <div className={classes.FigureCup}></div>
       
      </div>

        <img src={`../images/${props.image}`} alt="Photograph of a cup" className={classes.Cup}/>
     
    </Main>
  )
}

export default SectionCup

const Main = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  
  
  @media (max-width: 860px) {
    flex-direction: column-reverse;
    align-items: center;
    

  }

`

/*const Text = styled.div`
  
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
  max-width: 400px;
  color: hsl(232, 10%, 55%);

`

const Image = styled.div`


`

const Button = styled.div`
  font-family: Fraunces;
  text-transform: uppercase;
  border-bottom: 6px solid hsl(7, 99%, 70%);
  display: inline-block;
  line-height: 7px;
`*/