import styled, { css } from 'styled-components';
import SidebarBackground from '../../assets/images/wave.jpg';
import UserImage from '../../assets/images/face.jpg';


export const SidebarContainer = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 260px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    background-image: url(${SidebarBackground}), linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5));
    background-blend-mode: overlay;

    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

export const SidebarListItem = styled.li`
    list-style-type: none;
    width: 50px;
    margin-top: 5px;
    padding-bottom: 5px;
    margin-left: 15px;
    border-radius: 5px;
    width: 220px;
    height: 40px;
    cursor: pointer;
    &:hover ${SidebarListItem} {
        transition: background-color 0.3s ease;
        background-color: rgba(255,255,255,0.3);
    }
    ${props => props.user && css`
        padding-left: 10px;
        color: white;
    `}
`

export const SidebarListLink = styled.a`
    position: relative;
    margin-left: 5%;
    top: 25%;
    width: 300px;
`

export const SidebarText = styled.p`
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    display: inline;
    padding-left: 15px;
    ${props => props.user && css`
        bottom: 7px;
        position: relative;
        font-weight: 100
    `}
`

export const SidebarWrapper = styled.ul`
    padding-left: 0;
    margin: 0;
`

export const User = styled.div`
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url(${UserImage});
    margin-left: 15px;
`