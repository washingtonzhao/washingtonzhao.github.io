import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu } from 'react-burger-menu';
import MediaQuery from 'react-responsive';


const SideBar = css`
    position: fixed;
    z-index: 1;
    top: 14rem;
    right: 80%;
`;

    // ${[mq[2]]}{
    //     height: 6rem;
    //     position: fixed;
    //     top: 1rem;
    //     left: 0;
    //     z-index: 3;
    // }
// ${[mq[2]]}{
//     top: 0rem;
//     left: 3rem;
//     width: 100vw;
// },
    // ${[mq[2]]}{
    //     display: inline-block;
    //     padding: 0.2rem 0.2rem;
    //     word-wrap: normal;
    //     line-height: 1.2rem;
    // },

const NavElement = css`
    font-family: Lato;
    font-weight: normal;
    font-size: 1.3rem;
    text-decoration: none;
    color: hsl(0, 0%, 13%);
    display: block;
    line-height: 2rem;
    padding: 1rem 0;
    text-align: right;

    ${[mq[2]]}{
        font-family: Lato;
        font-weight: normal;
        font-size: 1rem;
        text-decoration: none;
        color: hsl(0, 0%, 13%);
        padding: 0 5px;
        display: none;
    }
`;

// const Links = css`
//     ${[mq[2]]}{
//         display: none;
//         position: fixed;
//         height: 100%;
//         width: 0;
//         top: 0;
//         right: 0;
//         transition: 0.5s;
//     }

// `

const BarsIcon = <FontAwesomeIcon icon={faBars} />;


var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '25px',
      height: '25px',
      left: '10%',
      top: '2rem'
    },
    bmBurgerBars: {
      background: '#000000',
    },
    bmBurgerBarsHover: {
      background: '#000000',
    },
    bmCrossButton: {
      height: '4rem',
      width: '4rem'
    },
    bmCross: {
      background: '#000000',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: '0',
      left: '0',
    },
    bmMenu: {
      background: '#FFFFFF',
      padding: '0',
      margin: '0',
      fontSize: '1.1rem',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#FFFFFF',
      padding: '10rem 0',
      margin: '0',
    },
    bmItem: {
      display: 'block',
      padding: '1rem 0',
      border: '0',
      textAlign: 'center',
      boxShadow: '0 1px 3px 0 hsla(0, 0%, 0%, 0.2)',
      fontFamily: 'Lato',
      fontWeight: 'normal',
      textDecoration: 'none',
      color: 'hsl(0, 0%, 13%)',
    },
    bmOverlay: {
      background: 'none',
    }
  }


class NavBar extends React.Component{

    showSettings(event){
        event.preventDefault();
    }
    render(){

        return(
            <>
            <MediaQuery minDeviceWidth={991.99}>
                {(matches) =>
                matches
                ?<div css={ SideBar }>
                <Link css={ NavElement } to="/">Home</Link>
                <Link css={ NavElement } to="/">About</Link>
                <Link css={ NavElement } to="/projects">Software</Link>
                <Link css={ NavElement } to="/product">Product Management</Link>
                <Link css={ NavElement } to="/outreach">Outreach</Link>
                <Link css={ NavElement } to="/blog">Blog</Link>
                <Link css={ NavElement } to="/resume">Resume</Link>
                </div>
                : <Menu styles= { styles }>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/">About</a>
                    <a id="about" className="menu-item" href="/projects">Software</a>
                    <a id="contact" className="menu-item" href="/product">Product Management</a> 
                    <a id="contact" className="menu-item" href="/outreach">Outreach</a> 
                    <a id="contact" className="menu-item" href="/blog">Blog</a> 
                    <a id="contact" className="menu-item" href="/resume">Resume</a> 
                </Menu>
                }
                
            </MediaQuery>
            </>
            
        )
    }
}

export default NavBar;