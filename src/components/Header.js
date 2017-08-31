import React, { PureComponent } from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';

import headerImage from '../images/christopher-gower-291246.jpg';
import profileImage from '../images/profile.jpg';
import logoImage from '../images/logo.png';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const StyledHeader = styled.header`
    position: relative;
    background-color: rgba(60, 60, 60, 1);
    background-image: url(${headerImage});
    background-size: cover;
    background-repeat: no-repeat;   
    background-position: center;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-bottom: 32px;
    animation: ${fadeIn} 2s;
    overflow: hidden;
`;

const StyledNav = styled.nav`
    animation: ${fadeIn} 2s;
    display: flex;
    background-color: rgba(50, 50, 50, 1);
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 15px 40px;

    @media(max-width: 425px) {
        padding: 15px;
    }
`;

const StyledMenuButton = styled.button`
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    background: rgba(255, 255, 255, 0);
    border: 1px solid rgba(255, 255, 255, 0.6);
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 35px;
    border-radius: 4px;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.5s ease;
    
    &:hover {
        color: rgba(33, 33, 33, 1);
        background: rgba(255, 255, 255, 1);
    }
`;

const StyledLogoContainer = styled.div`
    display: flex;
    align-items: center
`;

const StyledTitle = styled.h1`
    animation: ${fadeIn} 2s;
    color: #fff;
    background-color: rgba(250, 0, 80, 0.9);
    padding: 20px;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 56px;
    font-weight: 100;
    margin: 0;
    text-align: center;

    @media(max-width: 425px) {
        font-size: 24px;
        border-radius: 0;
        width: 100%;
    }
`;

const StyledSmall = styled.small`
    font-size: 16px;
    display: block;
    margin-bottom: 8px;

    @media(max-width: 425px) {
        font-size: 12px;
    }
`;

const StyledLink = styled(Link) `
    color: #fff;
    text-decoration: none;
    font-size: 32px;
    font-weight: 100;
    text-transform: uppercase;

    @media(max-width: 425px) {
        font-size: 16px;
    }
`;

const StyledProfileImage = styled.img`
    border-radius: 50%;
    width: 48px;
    margin-right: 16px;
    margin-bottom: 0;

    @media(max-width: 425px) {
        width: 24px;
        margin-right: 8px;
    }
`;

const StyledLogoImage = styled.img`
    margin: 0;
`;

const StyledScrollArrow = styled(Link)`
    position: absolute;
    bottom: 25px;
    left: calc(50% - 75px);
    right: calc(50% - 75px);    
    width: 150px;
    font-family: 'Open Sans', sans-serif;
    color: rgba(50, 50, 50, 1);
    background: rgba(50, 50, 50, 0);
    border: 1px solid rgba(50, 50, 50, 0.6);
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 35px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.5s ease;
    text-decoration: none;
    
    &:hover {
        color: rgba(255, 255, 255, 1);
        background: rgba(50, 50, 50, 1);
    }
`;

class Header extends PureComponent {
    render() {
        return (
            <StyledHeader>
                <StyledNav>
                    <StyledLogoContainer>
                        <StyledProfileImage src={profileImage} alt="Dan Andersson" />
                        <StyledLink to="/">
                            <strong>Dan</strong>Andersson
                        </StyledLink>
                    </StyledLogoContainer>
                    <StyledMenuButton>Menu</StyledMenuButton>
                </StyledNav>
                <StyledTitle>
                    <StyledSmall>Thoughts, stories and ideas of a</StyledSmall>
                    <strong>JavaScript</strong>Developer
                </StyledTitle>
                <StyledScrollArrow to="#content">Scroll Down</StyledScrollArrow>
            </StyledHeader>
        )
    }
}

export default Header;