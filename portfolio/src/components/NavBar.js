import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./menu";

const SideBar = css`
    position: fixed;
    z-index: 1;
    top: 15rem;
    left: 12rem;

    ${[mq[2]]}{
        width: 100%;
        height: 3rem;
        position: block;
        z-index: 3;
        top: 0;
        right: 0;
    }
`;

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
        display: none;
    }
`;

console.log(NavElement);
const BarsIcon = <FontAwesomeIcon icon={faBars} />;

const HamburgerMenu = styled('a')`
    display: none;
    position: absolute;
    right: 0;
    top: 0;

    ${[mq[2]]}{
        display: block;
        position: absolute;
        right: 0;
        top: 0;
    }
`;

// function toggleMenu() {
//     if(NavElement.)
// }

//menu component is just the slide down-- navbar component controls whether or not menu is visible or not based on media query
class NavBar extends React.Component {
    render(){
        return (
        <div css={ SideBar }>
            <HamburgerMenu onClick={ () => this.toggleMenu() }>{ BarsIcon }</HamburgerMenu>
            <Menu ref={el => (this.childMenu = el)} />
            <Link css={ NavElement } to="/">Home</Link>
            <Link css={ NavElement } to="/projects">Software</Link>
            <Link css={ NavElement } to="/product">Product Management</Link>
            <Link css={ NavElement } to="/teaching">Teaching</Link>
            <Link css={ NavElement } to="/blog">Blog</Link>
            <Link css={ NavElement } to="/resume">Resume</Link>
        </div>
        )
    }

    toggleMenu() {
        this.childMenu.open();
    }
}

export default NavBar;