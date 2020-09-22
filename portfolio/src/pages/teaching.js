import React from "react";
import NavBar from "../components/NavBar";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";
import Project from "../components/Project";
import picture from "../../static/WashingtonZhao.png";
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
    justify-content: space-around;
`;

export default function Teaching({ data }) {
    return (
    <Layout>
        <NavBar />
        <Work>
        <h1>Teaching</h1>
        <ProjectList>
            { data.allMarkdownRemark.edges.map(({ node }) => (
                <Link to={"../" + node.frontmatter.title}><Project title={node.frontmatter.title} img={node.frontmatter.img} /></Link>
            ))}
        </ProjectList>
    </Work>
    </Layout>
    )
};

export const SoftwareQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___title] order: DESC }) {
        edges {
            node {
            frontmatter {
                title
                img
            }
            }
        }
        }
    }
  
`