import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/NavBar";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";

const Info = styled.div`
  margin-left: 25%;
  display: block;
  height: 100%;
  margin-top: 13rem;

  ${[mq[2]]}{
      width: 100%;
      margin-left: 0;
      margin-top: 6rem;
  }
`;
export default function Portfolio({ data }) {
  const proj = data.markdownRemark;
  return (
    <div>
      <NavBar />
      <Info dangerouslySetInnerHTML={{ __html: proj.html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
