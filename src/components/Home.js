import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import SectionEgg from "./SectionEgg"
import SectionCup from "./SectionCup"
import SectionFruit from "./SectionFruit"

function Home() {
  return (
    <Container>
      <Section 
        title='We are creatives'
        description=''
        backgroundImg='image-header.jpg'
        backgroundImgMobile='image-header-mobile.jpg'
      />
      <SectionEgg
        title="Transform your brand"
        description='We are a full-service creative agency specialixing in helping 
        brands grow fast. Engage your clients through compelling visuals that do most 
        of the marketing for you.'
        image='image-transform.jpg'
        imageMobile='image-transform-mobile.jpg'
        buttonText="Learn more"
      />
            <SectionCup
        title="Stand out to the right audience"
        description="Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we'll build and extend your brand in digital places."
        image='image-stand-out.jpg'
        imageMobile='image-stand-out-mobile.jpg'
        buttonText="Learn more"
      />
            <SectionFruit
        titleCherry="Graphic Design"
        titleOrange="Photography"
        descriptionCherry="Great design makes you memorable. We deliver artwork that underscores 
        your brand message and captures potettial client's attention."
        descriptionOrange="Increase your credibility by getting the most stunning, high-quality photos
        that improve your business image."
        imageCherry='image-graphic-design.jpg'
        imageCherryMobile='image-graphic-design-mobile.jpg'
        imageOrange="image-photography.jpg"
        imageOrangeMobile="image-photography-mobile.jpg"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  
`

