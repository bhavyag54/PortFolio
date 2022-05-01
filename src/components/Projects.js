import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {IoFolderOpenOutline, IoExitOutline} from 'react-icons/io5'

function Projects({resumeData}) {

    const [projects, setProjects] = useState(null)

    
    useEffect(() => {

        if(resumeData !== null)
        setProjects(resumeData.portfolio.projects)
    }, [resumeData, projects])




    return (
        <Container className='projects'>
            
            <Heading>Some Noteworthy Projects</Heading>

            <Main>
                {projects?
                    projects.map(proj => {
                        return (
                            <Project key={proj.title}>
                                <Header>
                                    <IoFolderOpenOutline size={40}/>
                                    <a href={proj.url} target="_blank"><IoExitOutline size={40}/></a>
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

    font-size: 30px;
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

`

const Title = styled.div`
    transition: all 0.2s ease;
    font-size: 20px;
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

const Project = styled.div`
    position: relative;
    width: 90%;
    color: white;
    transition: all 0.2s ease;
    border: 1px solid white;
    padding: 10px 20px;
    min-height: 100px;

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