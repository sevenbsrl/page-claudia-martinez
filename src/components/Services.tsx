import styled from "styled-components";
import { useEffect, useState } from "react";

import Separator from "./global/Separator";
import { Service } from "../types/types";

const StyledBox = styled.div`
    padding: 20px 30px;
`;

const StyledItemServices = styled.div`
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    display: flex;
    margin: 20px 0px;
    & > div:nth-child(1) {
        width: 70%;
        h4 {
            font-size: 22px;
            font-weight: 500;
            /* text-align: center; */
        }
        h6 {
            /* text-decoration: underline; */
            font-weight: 500;
        }
        span {
            font-weight: 300;
        }
    }

    & > div:nth-child(2) {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        & > div {
            margin: 20px;
            opacity: 1;
            transition: 0.5s all;
            position: absolute;
            background-size: cover;
            height: 100%;
            width: 300px;
            border-radius: 20px;
            box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
                rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
        }
    }
    @media (width < 1200px) {
        flex-direction: column;
        & > div:nth-child(1) {
            width: 100%;
            margin: 20px 0px;
        }
        & > div:nth-child(2) {
            width: 100%;
            height: 400px;
            & > div {
                height: 100%;
                width: 100%;
            }
        }
    }
`;

export const Services = ({ data }: { data?: Service[] }) => {
    return (
        <>
            <Separator id="services">Talleres</Separator>
            <StyledBox>
                {data?.map((item, i) => {
                    return <ServicesItem key={i} item={item} />;
                })}
            </StyledBox>
        </>
    );
};

const ServicesItem = ({ item }: { item: Service }) => {
    const [next, setNext] = useState(1);

    useEffect(() => {
        if (item?.time) {
            setInterval(() => {
                setNext((state) => {
                    return state + 1 > item.images.length ? 1 : state + 1;
                });
            }, item?.time);
        }
    }, []);

    return (
        <StyledItemServices>
            <div>
                <h4>{item.name}</h4>
                <h6>{item.type}</h6>
                <span>{item.text}</span>
            </div>
            <div style={{ position: "relative" }}>
                {item.images.map((images, i) => {
                    return (
                        <div
                            style={{
                                backgroundImage: `url(${images})`,
                                backgroundSize: "cover",
                                opacity: next === i + 1 ? 1 : 0,
                            }}
                        />
                    );
                })}
            </div>
        </StyledItemServices>
    );
};
