import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import linkStyles from "./project.module.css";
import styled from "@emotion/styled";

const linkStyle = (url) => ({ cursor: 'pointer'});

export default function cursorLink({ children, url }) {

    return(
        <StaticQuery
            query={graphql`
            query {
                allFile(filter: {sourceInstanceName: {eq: "cursor"}}) {
                    edges {
                      node {
                        id
                        childMarkdownRemark {
                          frontmatter {
                            img
                          }
                        }
                      }
                    }
                  }
            }`}
            render={data =>(
                <Link to={url} style={linkStyle(data.allFile.edges.node[0].childMarkdownRemark.frontmatter.img)}>{children}</Link>
            )}/>

    )
}

