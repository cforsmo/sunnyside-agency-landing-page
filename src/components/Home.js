import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
      <Section 
        title='We are creatives'
        description=''
        backgroundImg='image-header.jpg'
        leftBtnText=''
        rightBtnText=''
      />
      <Section 
        title='Transform your brand'
        description='We are a full-service creative agency specialixing in helping 
        brands grow fast. Engage your clients through compelling visuals that do most 
        of the marketing for you.'
        backgroundImg='image-transform.jpg'
        leftBtnText='Learn more'
        rightBtnText=''
      />
      <Section 
        title='Stand out to the right audience'
        description="Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we'll build and extend your brand in digital places."
        backgroundImg='image-stand-out.jpg'
        leftBtnText='Learn more'
        rightBtnText=''
      />
      <Section 
        title='Model X'
        description='Order Online for Touchless Delivery'
        backgroundImg='image-photography.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        backgroundImg='image-graphic-design.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn more'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Cost Less Than a New Roof Plus Solar Panels'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn more'
      />
       <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Shop Now'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`

