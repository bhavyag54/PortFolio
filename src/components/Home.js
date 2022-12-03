import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'

function Home({resumeData}) {

  return (
    <Container>
        
        {/* <Content> */}
          <About resumeData={resumeData?.main}/>
          <Skills resumeData={resumeData}/>
          <Projects resumeData={resumeData}/>
          <Contact resumeData={resumeData?.main}/>
        {/* </Content> */}
          
    </Container>
  )
}

export default Home

const Container = styled.div`

    width: 100vw;
    height: 100%;
    padding: 0px 30px;
    padding-top: 0px;

    // @media (min-width: 768px)
    // {
    //   padding: 0px 40px;
    // }
`

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100vh;

//   overflow-y: scroll;

// `