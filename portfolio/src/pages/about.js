import React from "react";
import NavBar from "../components/NavBar";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import AboutItem from "../components/AboutItem";

const About = styled.div`
    margin-left: 30%;
    height: 100%;
    margin-top: 6rem;
    
    width: 70%;
    ${[mq[2]]}{
        width: 100%;
        margin-left: 0;
        margin-top: 6rem;
    }
`;

const IntroBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`;

const AboutText = styled.div`
    font-family: Lato;
    font-weight: normal;
    font-style: italic;
    font-size: 1.3rem;
    line-height: 2rem;
`;

const IntroLine = styled.div`
    font-weight: 500;
    font-style: bold;
    margin-top: 5%;
`;

const ProPic = styled.img`
    height: 50%;
    width: 30%;
    ${[mq[2]]}{
      margin: 2rem auto;
      width: 80%;
    }
`;

const HighlightText = styled.div`
    font-weight: 700;
    font-style: italic;
    margin-top: 20px;
    margin-bottom: 20px;
`;

/*hi i'm washington and i'm a junior computer science student at the university of southern california. 
currently, i'm taking a leave of absence from school to work at some startups working on a few cool, impactful projects (if i must say so myself), finishing up this site, and figuring out 
destinations for remote work this spring.*/

export default function about() {
  return (
    
    <>
      <NavBar />
      <About>
          <IntroBox>
            <AboutText> 
              <Zoom left cascade duration={1000}>developer,</Zoom><Bounce right delay={1500} duration={1000}>product manager,</Bounce> <Fade left cascade delay={3000} duration={1000}>avid fan of music/music production, Ultimate Frisbee, esports, video games, writing, and the Pittsburgh Steelers.</Fade>
              
              <HighlightText>I'm passionate about bridging achievement gaps, building new opportunities, and user-centric design.</HighlightText>

              <Fade left cascade delay={4500} duration={1000}>
                <div>
                  <div>
                    <IntroLine>What I Care About</IntroLine>
                    
                    <AboutItem icon="/favicon.ico" title="Love" description="hello"/>
                    <AboutItem icon="/favicon.ico" title="Peace" description="hello"/>
                    <AboutItem icon="/favicon.ico" title="Amazing" description="hello"/>
                    <AboutItem icon="/favicon.ico" title="Kind" description="hello"/>
                  </div>
                </div>
              </Fade>

              <Fade left cascade delay={6000} duration={1000}>
                <div>
                    <div>
                      <IntroLine>Talk To Me About</IntroLine>
                      
                      <AboutItem icon="/favicon.ico" title="Sports" description="hello"/>
                      <AboutItem icon="/favicon.ico" title="Video Games" description="hello"/>
                      <AboutItem icon="/favicon.ico" title="Education" description="hello"/>
                      <AboutItem icon="/favicon.ico" title="Productivity" description="hello"/>
                    </div>
                </div>
              </Fade>
            </AboutText>
            
            <ProPic src="/WashingtonZhao.png" alt="me!" />
          </IntroBox>
      </About>
    </>
  )
};

