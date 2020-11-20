import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";


const ProjectDiv = styled.div`
    width: 300px;
    height: 500px;
    text-align: center;
    display: inline-block;

    ${[mq[2]]}{
        padding: 0 0 10px 0;
        width: 300px;
        height: 400px;
    }
`;

const ProjectImage = css`\
    height: 450px;
    width: 100%;

    ${[mq[2]]}{
        padding: 0 0 10px 0;
        width: 90%;
        height: 300px;
    }
`;

const Caption = css`
    display: block;
    word-wrap: break-word;
    color: #000000;
    font-family: Lato;
`;

export default function Project(props){
    return(
        <ProjectDiv>
            <img css={ProjectImage} src={props.img} alt="project image" />
            <p css={Caption}>{props.title}</p>
        </ProjectDiv>
    )
}

