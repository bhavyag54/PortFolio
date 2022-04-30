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
            
        <Cont>
            <Stroke/>
            
            {links?
            <Links>
                <Link url={links[1].url} icon={<IoLogoLinkedin size={20}/>}/>
                <Link url={links[2].url} icon={<IoLogoInstagram size={20}/>}/>
                <Link url={links[3].url} icon={<IoLogoGithub size={20}/>}/>
                <Link url="mailto:bhavyagoyal54@gmail.com" icon={<IoMailOpen size={22}/>}/>
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
    width: 3px;
    height: 300px;
    border-radius: 10px;
    background-color:var(--text-color);
   

`

const Network = styled.a`
    color: white;
    transition: all 0.25s ease-in;
    cursor: pointer;
    font-size: 10px;
    z-index: 10;
    &:hover{
        color: var(--text-color);
    }
`

const Links = styled.div`
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    right: 7px;
`