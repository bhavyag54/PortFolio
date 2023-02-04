import React from 'react'
import styled from 'styled-components'
import "aos/dist/aos.css";
import AOS from 'aos'

function SideEmail() {
  return (
    <Container >
        
        <Cont  data-aos="fade-up" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            
            <Email><a href="mailto:bhavyagoyal54@gmail.com">Bhavyagoyal54@gmail.com</a></Email>
            
            <Stroke/>
        </Cont>

    </Container>
  )
}

export default SideEmail

const Container = styled.div`

    z-index: 0;
   
    @media (max-width: 768px)
    {
        display: none;
    }
    position: fixed;
    z-index: 3;
    bottom: 40vh;
    left: 50px;
    
`

const Cont = styled.div`
    position: absolute;
    bottom: 0px;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Stroke = styled.div`

    position: absolute;
    width: 0.2vw;
    max-width: 10px;
    height: 35vh;
    border-radius: 10px;
    background-color:var(--text-color);
   

`

const Email = styled.div`
    color: white;
    position: absolute;
    transform: rotateZ(-90deg);
    transform-origin: top;
    transition: all 0.2s ease;
    margin-left: 2px;

    a{
        color: white;
        text-decoration: none;
        transition: all 0.2s ease;
        &:hover{
            color: var(--text-hover);
            font-weight: 500;
        }
        font-weight: 500;
        font-size: 1.1vw;
    }

    &:hover{
        /* font-weight: 600; */
        /* font-size: 1vw; */
        transform:rotateZ(-90deg) translateX(2px);
    }
`