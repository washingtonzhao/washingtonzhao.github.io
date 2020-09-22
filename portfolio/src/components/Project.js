import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";
import picture from "../../static/WashingtonZhao.png";

const ProjectDiv = styled.div`
    width: 400px;
    height: 700px;
    margin: auto;
    padding: 0 20px 20px 0;
    text-align: center;
    display: inline-block;

    ${[mq[2]]}{
        padding: 0 0 10px 0;
        width: 300px;
        height: 400px;
    }
`;

const ProjectImage = css`\
    height: 500px;
    width: 350px;
    ${[mq[2]]}{
        padding: 0 0 10px 0;
        width: 90%;
        height: 300px;
    }
`;

const Caption = css`
    display: block;
    word-wrap: break-word;
`;

export default function Project(props){
    return(
        <ProjectDiv>
            <img css={ProjectImage} src={props.img} alt="1kp" />
            <p css={Caption}>{props.title}</p>
        </ProjectDiv>
    )
}

