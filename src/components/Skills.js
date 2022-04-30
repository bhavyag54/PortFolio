import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils'
import React from 'react'
import styled from 'styled-components'
import SkillData from '../variables/skillData'

function Skills() {

    const SkillSets = () => SkillData.map(skill => {
    
        return (
            <SkillSet key={skill.id}>
                <Heading>{skill.heading}</Heading>
                <Skillss>
                {
                    skill.imageList.map(image => {
                        return (
                            <Skill key={image.id}>
                                <img src={image.src}/>
                                <SkillText>{image.caption}</SkillText>
                            </Skill>
                        )
                    })
                }
                </Skillss>
            </SkillSet>
        )
    })

    return (
    <Container className="skills">
        
        <SkillHeader>Skills</SkillHeader>

        <SkillSets/>

    </Container>
    )
}

export default Skills

const Container = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    color: white;
    padding-top: 60px;

    @media (min-width: 768px)
    {
        

    }

`


const SkillHeader = styled.div`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-bottom: 40px;
`

const SkillSet = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
`

const Heading = styled.div`

    font-size: 20px;

`

const Skillss = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
    align-items: center;

    @media (min-width: 768px)
    {
        column-gap: 50px;
    }
`


const SkillText = styled.div`
    opacity: 0;
    transition: all 0.2s ease;
`
const Skill = styled.div`
    
    img{
        width: 8vw;
        height: 8vw;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &:hover{
        ${SkillText}
        {
            opacity: 1;
        }
    }


`