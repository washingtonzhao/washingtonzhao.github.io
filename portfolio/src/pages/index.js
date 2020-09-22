import React from "react";
import NavBar from "../components/NavBar";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn,
faTwitter,
faMediumM,
faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';

// // Disable the auto CSS insertion
// config.autoAddCss = false;


const About = styled.div`
  margin-left: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin-top: 13rem;

  ${[mq[2]]}{
      flex-direction: column;
      width: 100%;
      margin-left: 0;
      margin-top: 6rem;
  }
`;

const Intro = styled.div`
  font-family: Lato;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 1.4rem;
  width: 50%;
  ${[mq[2]]}{
    width: 80%;
}
`;

const ProPic = styled.img`
  margin: 0;
  height: auto;
  width: 30%;
  ${[mq[2]]}{
    margin: 2rem auto;
    width: 80%;
  }
`;

const Layout = styled.div`
  height: 100%;
  width: 100%;
`

const Social = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1rem;
`

const SocialLink = styled.a`
  display: inline-block;
  height: 30px;
  width: 30px;
  padding: 0 15px 0 0;
  color: grey;
  opacity: 0.9;
`

const Linkedin = <FontAwesomeIcon icon={faLinkedinIn} size="2x" />;
const Twitter = <FontAwesomeIcon icon={faTwitter} size="2x" />;
const Medium = <FontAwesomeIcon icon={faMediumM} size="2x" />;
const Github = <FontAwesomeIcon icon={faGithub} size="2x" />;
const Email = <FontAwesomeIcon icon={faEnvelope} size="2x" />;

export default function Home() {
  return (
    
    <Layout>
      <NavBar />
      <About>
        <Intro>
        Hey, I'm Washington! (sadly not the State)<br/><br/>

        I'm passionate about bridging achievement gaps. From working on initiatives as a SparkSC board member to bolster entrepreneurial spirit in the local community, to working as a teaching assistant for fellow Trojans, I care a lot about empowerment and building new opportunities.

        I love to build creative solutions to socially meaningful problems: I'm currently working on adapting low-resource machine translation for the legal demain using transfer learning to streamline the asylum process for refugees on the southern border, as well as an image recognition model to better diagnose Kawasaki Disease in young children. Recently, I've been especially interested in all aspects of the product lifecycle from product design, development, and marketing.

        <br/><br/>In my free time, I like to read, write on Medium, play Ultimate Frisbee, and learn new development tools.

        I love to talk to new people about anything, please feel free to reach out to me on Twitter at @ZhaoWashington or by email at washingz@usc.edu!
        <Social>
          <SocialLink href="https://www.linkedin.com/in/washingtonzhao">{ Linkedin }</SocialLink> 
          <SocialLink href="https://www.twitter.com/zhaowashington">{ Twitter }</SocialLink> 
          <SocialLink href="https://www.medium.com/@washingtonzhao">{ Medium }</SocialLink> 
          <SocialLink href="https://www.github.com/washingtonzhao">{ Github }</SocialLink> 
          <SocialLink href="mailto:washingz@usc.edu">{ Email }</SocialLink> 
        </Social>
        </Intro>
        <ProPic src="/WashingtonZhao.png" alt="me!"/>
      </About>
    </Layout>
  )
};

