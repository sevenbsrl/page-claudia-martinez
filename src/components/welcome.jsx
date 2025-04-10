import React from "react";
import styled from "styled-components";
import "react-animated-slider/build/horizontal.css";
import { Animated } from "react-animated-css";
import image from "../images/logo/logoClaudia.jpeg";

const StyledMainWelcome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-image: white;
    transition: all 1s;
    width: 100vw;
    height: 100vh;
    background: #f9f8f3;
    img {
        width: 100%;
        transition: all 1s;
        opacity: 0;
        max-width: 750px;
    }
`;

export const Welcome = () => {
    return (
        <StyledMainWelcome id={"welcome"}>
            <img
                src={image}
                alt="Yoga Claudia Martinez"
                className="animate__animated animate__fadeIn animate__delay-1s 2s"
                style={{ width: "100%" }}
            />
        </StyledMainWelcome>
    );
};
