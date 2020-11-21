import React from "react";
import NavBar from "../components/NavBar";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";

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



export default function Home() {
  return (
    
    <>
      <NavBar />

    </>
  )
};

