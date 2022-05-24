import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Footer = styled.footer`
    border: 3px solid #29EBAA;
    margin-top: 4rem;
    width: 100%;
    position: inherit;
    bottom: 0;
    left: 0;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1100px;
    margin: 0 auto;
    height: 100px;

    @media (max-width: 375px) {
        width: ${px2vw(350,375)};
        height: ${px2vw(50,375)};
    }
`;

export const Logo = styled.div`
    margin: 10px;
    font-family: monospace;
    font-weight: 700;
    color: #29EBAA;
    cursor: pointer;
`;

export const H1 = styled.h1`
    font-size: 28px;

    @media (max-width: 375px) {
        font-size: 3rem;
    }
`;