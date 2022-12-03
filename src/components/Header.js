import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import '../CSSs/MenuClose.css'


const MenuClose = () => {

    return (
        <>
            <button className="menu" 
              aria-label="Main Menu">
              
              <svg width="100" height="100" viewBox="0 0 100 100">
                  <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
          
            </button>
        </>
    )
}

  
function Header() {
      
    const [open, setOpen] = useState(false)

    useEffect(() => {

        const menu = document.getElementsByClassName('menu')
        if(open)
        {
            menu[0].classList.add('opened');
            menu[0].setAttribute('aria-expanded', menu[0].classList.contains('opened'))
        }
        else
        {
            menu[0].classList.remove('opened');
        }


    }, [open])

    useEffect(() => {

        window.addEventListener('resize', (w) => {
            console.log(w.target.innerWidth)

            if(w.target.innerWidth > 768)
            {
                setOpen(false);
            }
        })
        
    }, [])

    const NavItem = (props) => {
        return (
            <NavCont onClick={() => {
                const s = document.getElementsByClassName(props.text.toLowerCase())[0]
                s.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
                setOpen(false)
            }}>
                {props.text}
            </NavCont>
        )
    }


    return (
        <MainContainer isOpen={open}>
            <Mobutton onClick={() => setOpen(!open)}>
                <MenuClose/>
            </Mobutton>
            <Logo>Bhavya Goyal</Logo>
            <Container id='navbar' isOpen={open}>
                
                <Name>Bhavya Goyal</Name>
        
                <Nav> 
                    <NavItem text="About"/>
                    <NavItem text="Skills"/>
                    <NavItem text="Projects"/>
                    <NavItem text="Contact"/>
                </Nav>

                <Resume>
                    <a href="https://drive.google.com/file/d/1C5w7WEJP-sObyIO400mPYzAD56Dvyw1K/view?usp=sharing" target="_blank">Resume</a>
                </Resume>

            </Container>
        </MainContainer>
    
    )

}

export default Header

const MainContainer = styled.div`
    position: fixed;
    height: 10vh;
    width: 100vw;
    background-color:var(--acsent);
    z-index: 10;

    ${props => props.isOpen?`
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(20px);
        position: fixed;
        z-index: 10;
        background: transparent;
        `

        :
        ""
    }

`


const Container = styled.div`

    height: 100vh;
    background: var(--acsent);
    width: 300px;
    right: 0px;
    transition: all 0.25s ease;
    position: absolute;
    transform: ${props => props.isOpen?"translateX(0)":"translateX(100%)"};
    opacity: ${props => props.isOpen?1:0};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 50px 0px;
    z-index: 1;
    
    
    @media (min-width: 768px){
        width: 100vw;
        height: 100%;
        background: var(--acsent);
        transform: none;
        transition: none;
        opacity: 1;
        flex-direction: row;
        padding: 0px;
        background-color:var(--acsent);
    }
    
`

const Name = styled.div`
    z-index: 11;
    color: white;
    font-size: 30px;
    position: relative;
    top: 0px;
    left: 30px;
    font-weight: 500;
    flex: 1;
    display: none;

    @media (min-width: 768px) {
        display: flex;
        font-size: 2.5vw;
    }
    
`

const Logo = styled.div`
    z-index: 11;
    position: absolute;
    color: white;
    font-size: 3vw;
    top: 16px;
    left: 20px;
    transition: all 0.25s ease;

    &:hover{
        color: var(--text-color);
    }

    @media (min-width: 768px)
    {
        display: none;
    }
`

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    @media (min-width: 768px)
    {
        position: relative;
        flex-direction: row;
        text-align: right;
        flex :1;
        justify-content: center;
    }

`

const Resume = styled.div`
   
   position: relative;
    z-index: 1;
    margin-right: 0px;

    a{
        text-decoration: none;
        color: white;
        padding: 10px 20px;
        background-color: var(--text-color);
        border: 1px solid var(--text-color);
        font-size: calc(10px + 1vw);
        
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

    @media (min-width: 768px) {
        margin-right: 60px;
        
        a{
            font-size: calc(8px + 1vw);
        }
    }
`

const NavCont = styled.div`
    color: white;
    font-size: calc(10px + 1vw);
    cursor: pointer;
    padding: 10px 20px;

    transition: all 0.25s ease;

    @media(min-width: 768px)
    {
        font-size: calc(8px + 1vw);
    }

    &:hover{
        color: var(--text-color);
    }
`

const Mobutton = styled.div`

    position: absolute;
    color: black;
    top: 10px;
    cursor: pointer;
    right: 10px;
    z-index: 10;

    @media (min-width: 768px) {
        display: none;
    }

`