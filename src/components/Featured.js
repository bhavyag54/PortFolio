import React from 'react'
import { IoExitOutline, IoFolderOpenOutline, IoLogoGithub } from 'react-icons/io5'
import styled from 'styled-components'
import Slider from 'react-styled-carousel';

function Featured({projects}) {

    const responsive = [
        {breakPoint:0, cardsToShow: 1, autoSlide:2000}
    ];

  return (
    <FeatureCont>
        <Heading data-aos="zoom-in-down">Featured Projects</Heading>
            {projects?
                projects.map(proj => {

                    if(proj.bg)
                        return (
                            <Fproj id={proj.id}>
        
                                <ImageCont>
                                {proj.bg.split(',').map(bg => {
                                    console.log(bg)
                                    return <Image src={`/${bg}`}/>
            
                                    
                                })}
                                </ImageCont>
                            
                                <Project key={proj.title} data-aos="zoom-in-down">
                                    <Header id={proj.id}>
                                        <Title>
                                            {proj.title} <span>{proj.tag}</span>
                                        </Title>
                                       
                                    </Header>
                                
                                <div>

                                <Disc>
                                    {proj.dis.split('.').map(d => {

                                        return <div>{d}</div>
                                    })}
                                </Disc>
                                </div>

                                <Group>
                                    {proj?.git_url?
                                        <a href={proj.git_url} target="_blank"><IoLogoGithub/></a>
                                    :""}
                                    {proj?.url?
                                        <a href={proj.url} target="_blank"><IoExitOutline/></a>:
                                        ""
                                    }
                                </Group>

                                <Build id={proj.id}>{
                                        proj.Build.split(',').map(b => {
                                            return <BuildItem>
                                                {b}
                                            </BuildItem>
                                        })
                                    }</Build>

                            </Project>


                            </Fproj>
                        )
                    
                        return <></>
                }):""}
    </FeatureCont>
  )
}

export default Featured

const FeatureCont = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;
    background-size: contain;
    margin-bottom: 20px;
    justify-content: center;
    vertical-align: center;
    width: 100%;
    height: 100%;
`

const Heading = styled.div`

    font-size: calc(16px + 2vw);
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-bottom: 40px;
    text-align: center;
`

const ImageCont = styled.div`

    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 0.25s ease;
    border-radius: 10px;
    filter: brightness(20%);
    /* background: red; */
    
    @media (min-width: 768px)
    {
        background: var(--bg-green);
        background-blend-mode: screen;
        filter: brightness(60%);
        width: 60%;
        position: relative;
    }


`

const Fproj = styled.div`

    position: relative;
    width:100%;
    /* background-color: aliceblue; */
    margin: auto;
    margin-bottom: 130px;
    height: 100%;
    min-height: 60vh;
    display: flex;
    vertical-align: middle;
    justify-content: center;
    flex-direction: ${props => props.id&1?"row-reverse":"row"};
    /* background: red; */

    @media (min-width: 768px) {
        height: 100%;
        min-height: 0px;
        width: 80%;
        &:hover{
            ${ImageCont}{
                background: transparent;
                filter: none;
            }
        }
    }


`


const Image = styled.img`

    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    top: 0;
    object-fit: fill;
    transform: scale(1.03);
    
    transition: all 0.2s ease-in;
    
    &:hover{
        filter: none;
    }
    z-index: 0;
    
    @media (min-width: 768px)
    {
        width: 100%;
        height: 100%;
        
    }

`

const Disc = styled.div`

display: flex;
flex-direction: column;
gap: 5px;
margin-top: 5px;
padding: 10px;
border-radius: 10px;
/* align-items: center; */
justify-content: flex-start;
/* white-space: nowrap; */
/* overflow: hidden; */
/* background-color: aqua; */

width: 80%;
/* text-align: justify; */
font-size: calc(12px + 0.5vw);
@media (min-width: 768px) {
    
    order: -1;
    /* text-align-last: right; */
    padding: 10px;
    font-size: calc(8px + 0.5vw);
        background-color: var(--pj-back);
        width: 150%;
        /* min-width: 400px; */
        margin-left: -50px;
    }

`

const Title = styled.div`
    transition: all 0.2s ease;
    font-size: calc(14px + 1vw);
    font-weight: 500;

    span{
        font-size: calc(8px + 1vw);
        color: var(--acsent2);
    }

    @media (min-width: 768px) {
        font-size: calc(10px + 1vw);
        span{
        font-size: calc(5px + 1vw);
        color: var(--acsent2);
    }
    }
`

const Header = styled.div`
    /* display: flex;
    position: relative;
    justify-content: space-between; */
    /* background-color: aliceblue; */
    width: 100%;
    text-align: center;
    
    @media (min-width: 768px) {
        
        text-align: ${props=> props.id&1?"left":"right"};
        /* margin-left: ${props => props.id&1?"0px":"0px"}; */
        width: 100%;
    }
`

const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: calc(14px + 1.5vw);
    /* background: red; */
    justify-content: flex-start;
    
    a{
        text-decoration: none;
        color: var(--ascent2);
        transition: all 0.2s ease;
        &:hover{
            color: var(--text-color);
        }
    }

    @media (min-width: 768px) {
        font-size: calc(10px + 1.5vw);
    }

`

const Icon = styled.div`

    color: var(--text-color);

`

const Build = styled.div`

    display: flex;
    margin-top: auto;
    width: 100%;
    /* background-color: aliceblue; */
    bottom: 0px;
    gap: 3px;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (min-width: 768px) {
        
    }
    
    /* align-items: center; */


`

const BuildItem = styled.div`

    font-size:calc(12px + 0.5vw);
    
    /* background: var(--acsent); */
    padding: 2px;
    color: var(--acsent2);
    
    @media (min-width: 768px) {
        font-size:calc(8px + 0.5vw);
        
    }
    /* display: inline-block; */
    /* background-color: aliceblue; */
`

const Project = styled.div`
    position: relative;
    width: 100%;
    color: white;
    /* background-color: aliceblue; */
    transition: all 0.2s ease;
    /* display: flex; */
    /* border: 1px solid white; */
    padding: 10px 20px;
    min-height: 100px;

    display: flex;
    flex-direction: column;
    /* background-color: rgb(20,20,20); */
    /* border-radius: 5px; */
    /* background-color: bisque; */

    gap: 10px;

    @media (min-width: 768px)
    {
        width: 30%;
    }

    &:hover{
        ${Title}{
            color: var(--text-color);
        }

        transform: translateY(-10px);
        /* border-color: var(--text-color); */
    }

`