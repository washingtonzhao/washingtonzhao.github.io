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
    justify-content: flex-start;
`;

export default function Product({ data }) {
    return (
    <Layout>
        <NavBar />
        <Work>
        <h1>Product Management</h1>
        <ProjectList>
            { data.allFile.edges.map(({ node }) => (
                <Link to={"../" + node.childMarkdownRemark.frontmatter.title}><Project title={node.childMarkdownRemark.frontmatter.title} img={node.childMarkdownRemark.frontmatter.img} /></Link>
            ))}
        </ProjectList>
        </Work>
    </Layout>
    )
};

export const ProductQuery = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "product"}}) {
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