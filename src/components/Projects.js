import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {IoFolderOpenOutline, IoExitOutline, IoLogoGithub} from 'react-icons/io5'
import "aos/dist/aos.css";
import AOS from 'aos'

function Projects({resumeData}) {

    const [projects, setProjects] = useState(null)

    
    useEffect(() => {

        if(resumeData !== null)
        setProjects(resumeData.portfolio.projects)
    }, [resumeData, projects])




    return (
        <Container className='projects'>
            
            <Heading data-aos="zoom-in-down">Some Noteworthy Projects</Heading>

            <Main>
                {projects?
                    projects.map(proj => {
                        return (
                            <Project key={proj.title} data-aos="zoom-in-down">
                                <Header>
                                    <IoFolderOpenOutline size={40}/>
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

                                <Title>
                                    {proj.title}
                                </Title>

                                <Disc>
                                    {proj.dis}
                                </Disc>

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
    padding-top: 60px;

`

const Heading = styled.div`

    font-size: calc(16px + 2vw);
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-bottom: 40px;

`

const Main = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    position: relative;
    justify-content: center;
`

const Disc = styled.div`

    font-size: calc(12px + 0.5vw);

`

const Title = styled.div`
    transition: all 0.2s ease;
    font-size: calc(10px + 1vw);
    font-weight: 500;
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
    gap: 1vw;
    font-size: calc(20px + 1vw);
    // background: red;
    justify-content: center;
`

const Project = styled.div`
    position: relative;
    width: 90%;
    color: white;
    transition: all 0.2s ease;
    border: 1px solid white;
    padding: 10px 20px;
    min-height: 100px;

    display: flex;
    flex-direction: column;

    gap: 10px;

    @media (min-width: 768px)
    {
        width: 45%;
    }

    &:hover{
        ${Title}{
            color: var(--text-color);
        }

        transform: translateY(-10px);
        border-color: var(--text-color);
    }

`