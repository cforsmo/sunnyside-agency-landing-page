import React from 'react'
import styled from 'styled-components'
import classes from "../Section.module.css"


function SectionFruit(props) {
  return(
    <div className={classes.Fruit}>
      <div className={classes.FigureCherry}>
        <img src={`../images/${props.imageCherry}`} alt="Photograph of cherries" className={classes.Cherry}/>
              <figcaption className={classes.FigcaptionCherry}>
                  <h1 className={classes.TitleCherry}>{props.titleCherry}</h1>
                  <p className={classes.ParagraphCherry}>{props.descriptionCherry}</p>
              </figcaption>
        </div>
        <div className={classes.FigureOrange}>
        <img src={`../images/${props.imageOrange}`} alt="Photograph of an orange" className={classes.Orange}/>
            <figcaption className={classes.FigcaptionOrange}>
              <h1 className={classes.TitleOrange}>{props.titleOrange}</h1>
              <p className={classes.ParagraphOrange}>{props.descriptionOrange}</p>
            </figcaption>
      </div>
    </div>
  )
}

export default SectionFruit

