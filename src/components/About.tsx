import styled from "styled-components";

import Separator from "./global/Separator";
import image from "../images/claudia.png";
import { About } from "../types/types";

const StyledImage = styled.img`
    -webkit-box-shadow: 0px 10px 35px -15px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 35px -15px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 35px -15px rgba(0, 0, 0, 0.75);
    width: 100%;
    border-radius: 50px;
    max-width: 500px;
    @media (width > 1450px) {
        width: 70%;
    }
`;

const StyledText = styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    -webkit-text-stroke: 0.2px pink;
    @media (width > 800px) {
        font-size: 18px;
    }
`;

export const AboutComponent = ({ data }: { data?: About }) => {
    return (
        <>
            <Separator>
                <p>Sobre mí</p>
            </Separator>
            <div id="about" className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 flex justify-center items-center">
                    <StyledImage src={image} alt="claudia martinez" />
                </div>
                <div className="p-10 flex justify-center items-center flex-col">
                    <StyledText>{data && data?.paragraph}</StyledText>
                    <StyledText className="mt-[10px]">
                        {data && data?.another}
                    </StyledText>
                </div>
            </div>
        </>
    );
};
