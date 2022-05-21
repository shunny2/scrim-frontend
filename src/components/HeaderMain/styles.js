import styled from 'styled-components';

export const Header = styled.header`
    border: 3px solid #29EBAA;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    height: 100px;
`;

export const Logo = styled.div`
    font-family: monospace;
    font-weight: 700;
    color: #29EBAA;
    cursor: pointer;
`;

export const Buttons = styled.div`
    align-items: center;
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
`;