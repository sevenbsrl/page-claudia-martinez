import styled from "styled-components";

import trigo from "../images/logo/trigo.png";

const StyledMainWelcome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 1s;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-color: #ebebeb;
`;

const StyledBoxContenet = styled.div`
    flex: 1;
    align-items: center;
    flex-direction: column;
    display: flex;
`;

const StyledTitle = styled.h2`
    font-size: 75px;
    font-family: "Dancing Script", cursive;
    font-weight: 400;
    text-align: center;
    margin-top: 5%;
    @media (width > 800px) {
        font-size: 90px;
    }
    @media (width > 1400px) {
        margin-top: 3%;
        font-size: 150px;
    }
`;

const StyledSub = styled.h4`
    font-family: "Open Sans", sans-serif;
    font-size: 28px;
    font-weight: 400;
    @media (width > 800px) {
        font-size: 32px;
    }
    @media (width > 1400px) {
        font-size: 35px;
    }
`;

const StyledImg = styled.img`
    width: 150px;
    height: 150px;
    opacity: 0.5;
    @media (width > 800px) {
        width: 200px;
        height: 200px;
    }
`;

export const Welcome = () => {
    return (
        <StyledMainWelcome
            id={"welcome"}
            /* style={{ backgroundImage: `url(${fondo})` }} */
        >
            <div style={{ height: "100px" }}></div>
            <StyledBoxContenet>
                <StyledImg
                    src={trigo}
                    alt="Yoga Claudia Martinez"
                    className="animate__animated animate__fadeIn animate__delay-1s 2s"
                />
                <StyledTitle className="animate__animated animate__fadeIn animate__delay-1s 2s">
                    Claudia Martinez
                </StyledTitle>
                <StyledSub className="animate__animated animate__fadeIn animate__delay-1s 2s">
                    TERAPIAS HOLISTICAS
                </StyledSub>
                <StyledSub
                    style={{ marginTop: "auto", marginBottom: "50px" }}
                    className="animate__animated animate__fadeIn animate__delay-1s 2s"
                >
                    VITALINA YOGA
                </StyledSub>
            </StyledBoxContenet>
        </StyledMainWelcome>
    );
};
