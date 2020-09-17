import React from "react";
import NavBar from "../components/NavBar";
import Layout from "../components/layout";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";
import picture from "../../static/WashingtonZhao.png";
import mq from "../constants/breakpoints";

const About = styled.div`
  margin-left: 35rem;
  display: flex;
  align-items: center;
  height: 80vh;

  ${[mq[2]]}{
      flex-direction: column;
      width: 100vw;
      height: auto;
      margin-left: 0;
      margin-top: 2rem;
      align-items: flex-start;
  }
`;

const Intro = styled.div`
  font-family: Lato;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 1.4rem;
  width: 40rem;
`;

const ProPic = styled.img`
  margin: 0 auto;
  height: 35rem;
  width: 30rem;
`;

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

        </Intro>
        <ProPic src={picture} alt="me!"/>
      </About>
    </Layout>
  )
};

