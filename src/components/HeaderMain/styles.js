import styled from 'styled-components';

export const Header = styled.header`
    margin-bottom: 4rem;
    border: 3px solid #29EBAA;

    @media (max-height: 851px) {
        margin-bottom: 1.2rem;
    }

    @media (max-height: 653px) {
        margin-bottom: 0.5rem;
    }

`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    height: 100px;

    @media (max-height: 851px) {
        height: 80px;
    }

    @media (max-height: 653px) {
        height: 60px;
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
    font-size: 2.2em;

    @media (max-height: 653px) {
        font-size: 1.6em;
    }
`;

export const Buttons = styled.div`
    align-items: center;
    margin: 10px;
`;

export const Button = styled.button`
    font-size: 1.2rem;
    font-family: monospace;
    font-weight: 700;
    background-color: rgba(255, 255, 255, 0);
    color: #29EBAA;
    padding: 10px 20px;
    border-color: #29EBAA;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transition: 0.2s;
        background-color: #29EBAA;
        color: white;
    }

    @media (max-height: 653px) {
        font-size: 0.8em;
    }
`;