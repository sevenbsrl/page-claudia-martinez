import React from "react";
import styled from "styled-components";

import newFondo from "../../images/newfondo.jpeg";

const StyledDivisor = styled.div`
    height: 60px;
    width: 100%;
    background-size: cover;
    font-family: "Open Sans", sans-serif;
    font-size: 28px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 5px solid white;
    margin: 3px 0px;
`;

const Separator = ({
    children,
    id,
}: {
    children: React.ReactNode;
    id?: string;
}) => {
    return (
        <>
            <div id={id} />
            <StyledDivisor style={{ backgroundImage: `url(${newFondo})` }}>
                {children}
            </StyledDivisor>
        </>
    );
};

export default Separator;
