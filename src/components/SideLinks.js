import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub, IoMailOpen} from 'react-icons/io5'

function SideLinks({resumeData}) {

    const [links, SetLinks] = useState(null)

    useEffect(() => {

        if(resumeData != null)
            SetLinks(resumeData.social)

    }, [resumeData, links])


    const Link = ({url,name,  icon}) => {

        return (
        <Network href={url} target="_blank">
            {icon}
        </Network>

        )
    }

    return (
        <Container>
            
        <Cont data-aos="fade-down" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     {/* <Cont> */}
            <Stroke/>
            
            {links?
            <Links>
                <Link url={links[1].url} icon={<IoLogoLinkedin/>}/>
                <Link url={links[2].url} icon={<IoLogoInstagram/>}/>
                <Link url={links[3].url} icon={<IoLogoGithub/>}/>
                <Link url="mailto:bhavyagoyal54@gmail.com" icon={<IoMailOpen/>}/>
            </Links>
            :
            <></>
            }   
        </Cont>

    </Container>
  )
}

export default SideLinks

const Container = styled.div`

    z-index: 0;

    @media (max-width: 768px)
    {
        display: none;
    }
    position: fixed;
    background-color: blue;
    top: 0px;
    right: 50px;
`

const Cont = styled.div`
    position: absolute;
    top: 0px;
`

const Stroke = styled.div`

    position: relative;
    width: 0.5vw;
    max-width: 10px;
    height: 50vh;
    border-radius: 10px;
    background-color:var(--text-color);
   

`

const Network = styled.a`
    color: white;
    transition: all 0.25s ease-in;
    cursor: pointer;
    z-index: 10;
    &:hover{
        color: var(--text-color);
    }
    font-size: 1.75vw;
`

const Links = styled.div`
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    right: 7px;
    
    // margin-left: 0.2vw;
`