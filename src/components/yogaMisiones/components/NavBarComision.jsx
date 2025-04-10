import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledNavBar = styled.div`
    
    width: 100%;
    height: 80px;
    z-index: 200;
    background-color: transparent;/* #fef3f1 */
`

const StyledNavBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
`  

const StyledLogo = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin-left: 20px;
    font-size: 3vw;
    color: white;
`
export const NavBarComision = ( props ) => {
   
    const navigation = useNavigate()

    return (
        <StyledNavBar>

            <StyledNavBarHeader>

                <StyledLogo onClick={ () => navigation("/")}>
                    Instituto Sol Naciente
                </StyledLogo>

            </StyledNavBarHeader>
                
        </StyledNavBar>
    )
}
