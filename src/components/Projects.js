import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {IoFolderOpenOutline, IoExitOutline, IoLogoGithub} from 'react-icons/io5'
import "aos/dist/aos.css";
import AOS from 'aos'
import Featured from './Featured';

function Projects({resumeData}) {

    const [projects, setProjects] = useState(null)

    useEffect(() => {

        if(resumeData !== null)
        setProjects(resumeData.portfolio.projects)
    }, [resumeData, projects])

    const [isMobile, setIsMobile] = useState(window.matchMedia('(min-width: 1000px)').matches)

    useEffect(() => {

        window.addEventListener('resize', () => setIsMobile(window.matchMedia('(min-width: 768px)').matches))
    }, [])



    return (
        <Container className='projects'>

            {isMobile?
            <Featured projects={projects}/>:""
            }
            <Heading data-aos="zoom-in-down">{isMobile?"Other":"Some"} Noteworthy Projects</Heading>

            <Main>
                {projects?
                    projects.map(proj => {

                        if(proj.bg && isMobile)
                            return

                        return (
                            <Project key={proj.title} data-aos="zoom-in-down">
                                <Header>
                                    <Icon>
                                        <IoFolderOpenOutline size={30}/>
                                    </Icon>
                                    <Group>
                                        {proj?.git_url?
                                            <a href={proj.git_url} target="_blank"><IoLogoGithub/></a>
                                        :""}
                                        {proj?.url?
                                            <a href={proj.url} target="_blank"><IoExitOutline/></a>:
                                            ""
                                        }
                                    </Group>
                                </Header>
                                
                                <div>

                                <Title>
                                    {proj.title} <span>{proj.tag}</span>
                                </Title>

                                <Disc>
                                    {proj.dis}
                                </Disc>
                                </div>

                                <Build>{
                                        proj.Build.split(',').map(b => {
                                            return <BuildItem>
                                                {b}
                                            </BuildItem>
                                        })
                                    }</Build>

                            </Project>
                        )
                    })
                    
                    :<></>
                }
            </Main>


        </Container>
    )
}

export default Projects

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    color: white;
    justify-content: center;
    padding-top: 60px;

`






const Heading = styled.div`

    font-size: calc(16px + 2vw);
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-bottom: 40px;
    text-align: center;

`

const Main = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    position: relative;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
        width: 90%;
    }
`

const Disc = styled.div`

    font-size: calc(8px + 0.5vw);
    margin-top: 5px;

`

const Title = styled.div`
    transition: all 0.2s ease;
    font-size: calc(10px + 1vw);
    font-weight: 500;

    span{
        font-size: calc(6px + 1vw);
        color: var(--acsent2);
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a{
        text-decoration: none;
        color: white;
        transition: all 0.2s ease;
        &:hover{
            color: var(--text-color);
        }
    }
`

const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: calc(10px + 1.5vw);
    // background: red;
    justify-content: center;
`

const Icon = styled.div`

    color: var(--text-color);

`

const Build = styled.div`

    display: flex;
    margin-top: auto;

    bottom: 0px;
    gap: 3px;
    flex-wrap: wrap;
    justify-content: flex-start;
    
    /* align-items: center; */


`

const BuildItem = styled.div`

    font-size:calc(8px + 0.5vw);
    /* background: var(--acsent); */
    padding: 2px;
    color: var(--acsent2);
    /* display: inline-block; */
    /* background-color: aliceblue; */
`

const Project = styled.div`
    position: relative;
    width: 100%;
    color: white;
    transition: all 0.2s ease;
    /* border: 1px solid white; */
    padding: 10px 20px;
    min-height: 100px;

    display: flex;
    flex-direction: column;
    background-color: var(--pj-back);
    border-radius: 5px;


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