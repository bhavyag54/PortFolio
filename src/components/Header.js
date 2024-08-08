import React, { useEffect, useState } from 'react'
import styled, {css} from 'styled-components'
import '../CSSs/MenuClose.css'
import { useScrollDirection } from '../hooks'



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
    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
      };


    const handleResize = (w) => {
        if(w.target.innerWidth > 768)
        {
            setOpen(false);
        }
    }


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

        window.addEventListener('resize', handleResize)

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
        
    }, [])

    const NavItem = (props) => {
        return (
            <NavCont onClick={() => {
                const s = document.getElementsByClassName(props.text.toLowerCase())[0]
                s.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
                setOpen(false)
            }}>
                <Image></Image>
                <div>

                {props.text}
                </div>
            </NavCont>
        )
    }


    return (
        <MainContainer isOpen={open} scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
            <HeadContainer>
            <Logo isOpen={open}>Bhavya Goyal</Logo>
            <Mobutton isOpen={open} onClick={() => setOpen(!open)}>
                <MenuClose/>
            </Mobutton>
            </HeadContainer>
            <Container id='navbar' isOpen={open}>
                
                <Name>Bhavya Goyal</Name>
        
                <Nav> 
                    <NavItem text="About"/>
                    <NavItem text="Skills"/>
                    <NavItem text="Projects"/>
                    <NavItem text="Contact"/>
                </Nav>

                <Resume>
                    <a href="https://drive.google.com/file/d/1Yi7X0K90h0dm32rZeKDeQZPvNu7UE733/view?usp=sharing" target="_blank">Resume</a>
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
    transition: all 0.3s ease-in-out;

    z-index: 10;
    /* border-bottom: 10px solid white; */
    ${props => props.isOpen?css`
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(20px);
        position: fixed;
        z-index: 10;
        background: transparent;
        align-items: flex-start;
        `

        :
        ""
    }

    @media (prefers-reduced-motion: no-preference){
        
        ${props => !props.isOpen &&
            props.scrollDirection === 'up' && !props.scrollToTop &&
            css`
                height: 10vh;
                transform: translateY(0px);
                /* background-color: rgba(10, 25, 47, 0.85); */
                box-shadow: 0 10px 30px -10px var(--navy-shadow);
            `
        }


        ${props => !props.isOpen &&
            props.scrollDirection === 'down' &&
            !props.scrolledToTop &&
            css`
                height: 10vh;
                transform: translateY(-10vh);
                box-shadow: 0 10px 30px -10px var(--navy-shadow);
            `};
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

const HeadContainer = styled.div`

    position: fixed;
    width: 100vw;
    height: 10vh;
    display: flex;
    z-index: 11;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (min-width: 768px) {
        display: none;
    }

`

const Name = styled.div`
    z-index: 11;
    color: white;
    font-size: 2vw;
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

    &:hover{
        color: var(--text-hover);
    }
    
`

const Logo = styled.div`
    z-index: 11;
    position: relative;
    color: white;
    font-size: calc(16px + 1vw);
    transition: all 0.25s ease;

    &:hover{
        color: var(--text-hover);
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
    position: relative;
    width: 100%;
    flex: 2;
    gap: 5px;

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
    margin-bottom: 50px;

    a{
        text-decoration: none;
        color: white;
        padding: 10px 20px;
        background-color: var(--text-color);
        border: 1px solid var(--text-color);
        font-size: calc(14px + 1vw);
        font-weight: 600;
        
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
        margin-bottom: 0px;
        a{
            font-size: calc(6px + 1vw);
        }
    }
`
const Image = styled.div`
    /* background-image: url('/stroke.png'); */
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    /* background-color: beige; */
    width: 100%;
    height: 100%;
    max-width: 150px;
    text-align: center;
    margin-left: 30px;
    @media(min-width: 768px)
    {
        display: none;
    }
`

const NavCont = styled.div`
    color: rgba(0,0,0,1);
    color: rgba(255,255,255,1);
    font-weight: 500;
    font-size: calc(10px + 1vw);
    cursor: pointer;
    position: relative;
    width: 100%;
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    /* background-color: aliceblue; */
    transition: all 0.25s ease;
    /* border-bottom: 1px solid rgba(255,255,255,0.1); */

    div{
        z-index: 10;
    }

    @media(min-width: 768px)
    {
        font-size: calc(6px + 1vw);
        border-bottom: none;
        width: 100%;
        color: white;
    }

    &:hover{
        color: var(--text-hover);
    }
`

const Mobutton = styled.div`

    position: relative;
    color: black;
    cursor: pointer;
    z-index: 10;

    @media (min-width: 768px) {
        display: none;
    }

`
