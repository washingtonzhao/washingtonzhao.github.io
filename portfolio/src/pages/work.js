import React from "react";
import NavBar from "../components/NavBar";
import Layout from "../components/layout";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";


const work = styled.div`
  margin-left: 35rem;
`;

export default function Work() {
  return (
    <Layout>
      <NavBar />
      <work></work>
    </Layout>
  )
};

