import { useState } from "react";
import styled from "styled-components";

import bars from "../images/icons/bars.svg";
import across from "../images/icons/across.svg";

const StyledNavBar = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 200;
    transition: 0.5s all;
    @media screen and (max-width: 450px) {
    }
`;

const StyledNavBarHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    @media (width < 800px) {
        font-size: 19px;
        justify-content: end;
    }
`;

const StyledItemsContainer = styled.div`
    display: flex;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

const StyledItemsContainerTwo = styled.div`
    display: flex;
    flex-direction: column;
    background: #f9f8f3;
    -webkit-box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 29px 0px rgba(0, 0, 0, 0.75);
    @media screen and (min-width: 800px) {
        display: none;
    }
`;

const StyledBarsIcon = styled.div`
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
    display: none;
    @media screen and (max-width: 800px) {
        display: block;
        svg {
            width: 90px;
            fill: black;
            padding-top: 10px 0;
        }
    }
`;

const StyledItem = styled.div`
    margin: 20px;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    color: black;
    font-size: 25px;
    &:hover {
        text-decoration: underline;
    }
    @media screen and (max-width: 800px) {
        & {
            font-size: 18px;
        }
    }
`;

export const NavBar = () => {
    /* const [setBackground, setSetBackground] = useState(false); */
    const [viewItems, setViewItems] = useState(false);

    const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
        document
            .querySelector(`#${event.currentTarget.getAttribute("itemID")}`)
            ?.scrollIntoView({ behavior: "smooth" });
        setViewItems(false);
    };

    /* useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 401) {
                setSetBackground(true);
            } else {
                setSetBackground(false);
            }
        };
    }, []); */

    return (
        <StyledNavBar id="mainNavBar" style={{ backgroundColor: "#ebebeb" }}>
            <StyledNavBarHeader
                style={viewItems ? { borderBottom: "2px solid #fef3f1" } : {}}
            >
                <StyledItemsContainer>
                    <div></div>
                    <StyledItem itemID="about" onClick={handleOnClick}>
                        Sobre Mí
                    </StyledItem>
                    <StyledItem itemID="services" onClick={handleOnClick}>
                        Talleres
                    </StyledItem>
                    <StyledItem itemID="cangorosa" onClick={handleOnClick}>
                        Cangorosa
                    </StyledItem>
                    <StyledItem itemID="blabla" onClick={handleOnClick}>
                        Bla Bla
                    </StyledItem>
                    <StyledItem itemID="contact" onClick={handleOnClick}>
                        Contacto
                    </StyledItem>
                </StyledItemsContainer>
                <StyledBarsIcon onClick={() => setViewItems(!viewItems)}>
                    {viewItems ? (
                        <img src={across} alt="across" className="w-[30px]" />
                    ) : (
                        <img src={bars} alt="bars" className="w-[30px]" />
                    )}
                </StyledBarsIcon>
            </StyledNavBarHeader>

            {viewItems ? (
                <StyledItemsContainerTwo>
                    <StyledItem itemID="about" onClick={handleOnClick}>
                        Sobre Mí
                    </StyledItem>
                    <StyledItem itemID="services" onClick={handleOnClick}>
                        Talleres
                    </StyledItem>
                    <StyledItem itemID="cangorosa" onClick={handleOnClick}>
                        Cangorosa
                    </StyledItem>
                    <StyledItem itemID="blabla" onClick={handleOnClick}>
                        Bla Bla
                    </StyledItem>
                    <StyledItem itemID="contact" onClick={handleOnClick}>
                        Contacto
                    </StyledItem>
                </StyledItemsContainerTwo>
            ) : (
                ""
            )}
        </StyledNavBar>
    );
};
