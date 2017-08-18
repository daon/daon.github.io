import React, { PureComponent } from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';

import headerImage from '../images/vincent-guth-183404.jpg';
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
    background-color: #3c3c3c;
    background-image: url(${headerImage});
    background-size: cover;
    background-repeat: none;   
    background-position: center;
    display: flex;
    align-items: center;
    height: 100vh;
    margin-bottom: 32px;
`;

const StyledNavContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 70px;
    padding: 35px 40px;
`;

const StyledMenuButton = styled.button`
    font-family: 'Open Sans', sans-serif;
    background: none;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.6);
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 35px;
    border-radius: 4px;
    padding: 0 15px;
    cursor: pointer;
    
    &:hover {
        color: #212121;
        background: #fff;
    }
`;

const StyledLogoContainer = styled.div`
    animation: ${fadeIn} 2s;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;


const StyledTitle = styled.h1`
    color: #fff;
    text-transform: uppercase;
    font-size: 32px;
    margin: 0;
`;

const StyledLink = styled(Link) `
    color: #fff;
    text-decoration: none;
`;

const StyledProfileImage = styled.img`
    border-radius: 50%;
    width: 128px;
`;

const StyledLogoImage = styled.img`
    margin: 0;
`;

class Header extends PureComponent {
    render() {
        return (
            <StyledHeader>
                <StyledNavContainer>
                    <StyledMenuButton>Menu</StyledMenuButton>
                </StyledNavContainer>
                <StyledLogoContainer>
                    <StyledProfileImage src={profileImage} alt="Dan Andersson" />
                    <StyledTitle>
                        <StyledLink to="/">
                            <StyledLogoImage src={logoImage} alt="Dan Andersson" />
                        </StyledLink>
                    </StyledTitle>
                </StyledLogoContainer>
            </StyledHeader>
        )
    }
}

export default Header;