import React from 'react'
import styled from 'styled-components'

function About({resumeData}) {



  return (
    <Container className='about'>

        <Head>Hello <span>👋</span>! I'm</Head>
        <Name>Bhavya Goyal</Name>

        <Text>{resumeData?.bio}</Text>

        <ContactBtn onClick={() => {
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

    @media (min-width: 768px)
    {
      padding-top: 100px;
    }

`


const Head = styled.div`
  font-size: 20px;
  color: white;
  z-index: 1;
  position: relative;

  span{
    font-size: 20px;
  }

`

const Name = styled.div`

  color: var(--text-color);
  font-size: 44px;
  font-weight: 800;
  position: relative;

  @media (min-width: 768px)
  {
    font-size: 60px;
  }
`

const ContactBtn = styled.div`
    
    color: white;
    max-width: 200px;
    padding: 10px 20px;
    text-align: center;
    background-color: var(--text-color);
    margin-top: 50px;
    cursor: pointer;
    transition: all 0.25s ease;
    position: relative;
    left: 10px;

    &:hover{
        filter: brightness(80%);
    }


`

const Text = styled.div`
  color: var(--name-color);
  font-size: 20px;
  position: relative;
  margin-top: 10px;
  text-align: left;
  width: 100%;

  @media (min-width: 768px)
  {
    width: 60%;
    font-size: 24px;
    text-align: justify;
  }
`