import React from 'react'
import styled from 'styled-components'


function SideEmail() {
  return (
    <Container>
        
        <Cont>
            
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
    bottom: 0px;
    left: 50px;
    
`

const Cont = styled.div`
    position: absolute;
    bottom: 0px;
`

const Stroke = styled.div`

    position: relative;
    width: 3px;
    height: 200px;
    border-radius: 10px;
    background-color:var(--text-color);
   

`

const Email = styled.div`
    color: white;
    position: relative;
    transform: rotateZ(-90deg);
    transform-origin: left;

    a{
        color: white;
        text-decoration: none;
        transition: all 0.2s ease;
        &:hover{
            color: var(--text-color);

        }
    }
`