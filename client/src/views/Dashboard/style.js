import styled, { css } from 'styled-components';
import SidebarBackground from '../../assets/images/wave.jpg';
import UserImage from '../../assets/images/face.jpg';

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
export const Content = styled.main`
    background-color: #f8f8f8;
    @media only screen and (min-width: 768px) { // Padding for tablet
        margin-left: 30px;
    }
    @media only screen and (min-width: 1024px) {
        margin-left: 290px;
    }
`

export const Navbar = styled.header`
    height: 70px;
    background-color: #ffffff;
    border-bottom: 1px solid #e7e7e7;
`

export const Main = styled.div`
    // height: 100vh;
    // background-color: red;
    // @media only screen and (min-width: 1024px) {
    //     margin-left: 260px;
    // }
`

export const CryptoIcon = styled.img`
    float: left;
    height: 60px;
`