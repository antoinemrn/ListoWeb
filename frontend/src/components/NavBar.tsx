import React from 'react';
import {routes} from '../resources/routes';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <NavLinkContainer>
            {routes.map((x) => <NavLinkStyled to={`/${x.path}`} key={x.path}>{x.name}</NavLinkStyled>)}
        </NavLinkContainer>
    )
}

const NavLinkContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
`;

const NavLinkStyled = styled(NavLink)`
    display: block;
    padding: 25px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    &:hover, 
    &.active{
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(15px);
    }
    &:visited {
        color: #ffffff;
        text-decoration: none;
    }
    &.active {
        font-weight: bold;
        border-top: solid 5px crimson;
    }
`;


export default NavBar;
