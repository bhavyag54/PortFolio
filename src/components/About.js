import React from 'react'
import styled from 'styled-components'

function About({resumeData}) {

  // AOS.init()

  return (
    <Container className='about'>

        {/* <div style="color:Tomato;">HHELLOO</div> */}

        <Head data-aos='fade-right'>Hello <HelloSpan>👋</HelloSpan>! I'm</Head>
        <Name data-aos='fade-left'>Bhavya Goyal</Name>
        
        <Text data-aos='fade-right'>{resumeData?.bio}</Text>
        
        <ContactBtn data-aos='fade-zoom-in' data-aos-easing="ease-in-back"
     data-aos-delay="100" data-aos-duration="500" onClick={() => {
          document.getElementsByClassName('contact')[0].scrollIntoView(
            {
              behavior: "smooth", 
              block: "end", 
              inline: "nearest"
            })
        }}>{resumeData?.contactmessage}</ContactBtn>


    </Container>
  )
}

export default About

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    top:0px;
    padding-top: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px)
    {
      padding-top: 0px;
    }

`

const HelloSpan = styled.span`

  position: relative;
  display: inline-block;
  padding: 2px;
  cursor: pointer;
  font-size: calc(15px + 1vw);
    /* background-color: aliceblue; */
  animation: hand 1.2s linear normal;
/* animation-duration: 1s; */
  animation-play-state: paused;
  transform-origin: center;

  &:hover{
  animation-play-state: running;
  }

`


const Head = styled.div`
  font-size: 20px;
  color: white;
  z-index: 1;
  position: relative;
  
  @media (min-width: 768px)
  {
    // margin-left: 3px;
    font-size: 1.7vw;
  }


`

const Name = styled.div`

  color: var(--text-color);
  font-size: 44px;
  font-weight: 800;
  position: relative;

  @media (min-width: 768px)
  {
    font-size: 4vw;
  }
`

const ContactBtn = styled.div`
    
    position: relative;
    color: white;
    width: 18vw;
    min-width: 200px;
    padding: 10px 20px;
    transition: all 0.2s ease-in-out;
    text-align: center;
    background-color: var(--text-color);
    margin-top: 30px;
    cursor: pointer;
    left: 10px;
    z-index: 3;
    font-size: 16px;
    &:hover{
        filter: brightness(80%);
    }

    @media (min-width: 768px)
    {
      font-size: 1.4vw;
    }



`

const Text = styled.div`
  color: var(--name-color);
  font-size: 16px;
  position: relative;
  margin-top: 10px;
  text-align: center;
  width: 100%;

  @media (min-width: 768px)
  {
    width: 60%;
    font-size: 1.5vw;
    // margin-left: 3px;
  }
`