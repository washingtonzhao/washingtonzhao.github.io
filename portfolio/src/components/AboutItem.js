import React from "react";

import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mq from "../constants/breakpoints";

const Container = styled.div`
    width: 90%;
    height: auto;
    margin-top: 15px;
    margin-left: 2rem;
    ${[mq[2]]}{
        padding: 0 0 10px 0;
        width: 300px;
        height: 400px;
    }
`;

const ItemIcon = styled.img`
    height: 1.1em;
    width: auto;
    margin-right: 15px;
`;

const Caption = styled.div`
    fontSize: 14px;
    display: flex;
    flex-direction: row;
    align-items: top;
`;

const ItemText = styled.div`
`;

const ItemTitle = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.1em;
`;

const ItemDescription = styled.p`
    margin-top: 5px;
    margin-bottom: 0;
`;
export default function AboutItem(props){

    return(
        <Container>
            <Caption>
                <ItemIcon src={props.icon} alt="value icon" />
                <ItemText>
                    <ItemTitle>{props.title}</ItemTitle>
                    <ItemDescription>{props.description}</ItemDescription>
                </ItemText>
            </Caption>

        </Container>
    )
}

