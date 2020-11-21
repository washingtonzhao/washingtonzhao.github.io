import React from "react";
import NavBar from "../components/NavBar";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";
import Project from "../components/Project";
import { graphql, Link } from "gatsby";

const Layout = styled.div`
  height: 100%;
  width: 100%;
`

const Work = styled.div`
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

const ProjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const StyledLink = styled(props => <Link {...props} />)`
    width: 300px;
    height: 500px;
    margin: 20px 40px 40px 0;
`;


export default function Projects({ data }) {
    return (
    <>
        <NavBar />
        <Work>
        <h1>Software Development</h1>
        <ProjectList>
            { data.allFile.edges.map(({ node }) => (
                <StyledLink to="/"><Project title={node.childMarkdownRemark.frontmatter.title} img={node.childMarkdownRemark.frontmatter.img} cursor='/computer.png' /></StyledLink>
            ))}
        </ProjectList>
        </Work>
    </>
    )
};

export const SoftwareQuery = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "software"}}) {
            edges {
              node {
                id
                childMarkdownRemark {
                  frontmatter {
                    img
                    title
                  }
                }
              }
            }
          }
    }
  
`