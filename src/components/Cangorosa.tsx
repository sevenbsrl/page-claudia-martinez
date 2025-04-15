import styled from "styled-components";

import Separator from "./global/Separator";
import cangorosaSrc from "../images/cangorosa/logoCangorosa.png";
import { Cangorosa } from "../types/types";

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

const CangorosaComponent = ({ data }: { data?: Cangorosa }) => {
    return (
        <>
            <Separator id="cangorosa">Cangorosa</Separator>
            <div id="about" className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 flex justify-center items-center">
                    <StyledImage src={cangorosaSrc} alt="claudia martinez" />
                </div>
                <div className="p-10 flex justify-center items-center flex-col">
                    <h4 className="font-[600] text-[30px] mb-[20px]">
                        {data && data?.title}
                    </h4>
                    <StyledText className="mt-[10px]">
                        {data && data?.text1}
                    </StyledText>
                </div>
            </div>
        </>
    );
};

export default CangorosaComponent;
