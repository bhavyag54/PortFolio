import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoMailOpen} from 'react-icons/io5'
import "aos/dist/aos.css";
import AOS from 'aos'

function Contact({resumeData}) {

  const [links, SetLinks] = useState(null)

    useEffect(() => {
        if(resumeData != null)
            SetLinks(resumeData.social)

    }, [resumeData, links])



  const Link = ({url, name, icon}) => {

    return (
      <Network href={url} target="_blank">
          {icon}
      </Network>
    )
  }


  return (
    <Container className='contact'>
        
        <Header data-aos="zoom-in-down">Get In Touch</Header>
        
        <Text data-aos="zoom-in-up">I am actively looking for internship 
          opportunities. Feel free to drop a
           mail in my Inbox.</Text>

        <MailButton data-aos="fade-in"><a href="mailto:bhavyagoyal54@gmail.com">Say Hello</a></MailButton>

        {links?
            <Links >
                <Link url={links[1].url} icon={<IoLogoLinkedin size={22}/>}/>
                <Link url={links[2].url} icon={<IoLogoInstagram size={22}/>}/>
                <Link url={links[3].url} icon={<IoLogoGithub size={22}/>}/>
                <Link url="mailto:bhavyagoyal54@gmail.com" icon={<IoMailOpen size={22}/>}/>
            </Links>
            :
            <></>
        }   


        <Bottom>Designed & Built by <span>Bhavya Goyal</span></Bottom>

    </Container>
  )
}

export default Contact

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    padding: 150px 0px;

    justify-content: center;

    @media (min-width: 768px)
    {
      padding: 100px 0px;

    }
`


const Header = styled.div`
    font-size: 30px;
    font-weight: 800;
    color: var(--text-color);

    @media (min-width: 768px)
    {
      font-size: 42px;
    }

`

const Text = styled.div`

    font-size: 20px;
    font-weight: 500;
    color: white;
    text-align: center;
    width: 400px;
    margin-top: 30px;
    padding: 0px 50px;


    @media (min-width: 768px)
    {
      font-size: 20px;
      padding: 0px;
    }

`

const Bottom = styled.div`
  color: white;
  bottom: 20px;
  position: absolute;
    width: 80vw;
    text-align: center;

  span{
    color: var(--text-color);
  }

`

const Links = styled.div`

    display: flex;
    gap: 15px;
    margin-top: 30px;
    position: absolute;
    bottom: 60px;

`

const Network = styled.a`
    color: white;
    transition: all 0.25s ease-in;
    cursor: pointer;
    z-index: 9;
    &:hover{
        color: var(--text-color);
    }

`

const MailButton = styled.div`

    position: relative;
    z-index: 1;
    margin-top: 60px;

    a{
        text-decoration: none;
        color: white;
        padding: 10px 20px;
        background-color: var(--text-color);
        border: 1px solid var(--text-color);
        
        :after{
            position: absolute;
            content:"";
            width: 100%;
            height: 100%;
            background-color: white;
            top: -10px;
            padding: 10px 0px;
            right: 0px;
            z-index: -1;
            transition: all 0.25s ease;

        }

        &:hover{
            :after{
                right: -5px;
                top: -5px;
            }
        }
    }

`