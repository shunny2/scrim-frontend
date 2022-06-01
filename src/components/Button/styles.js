import styled from "styled-components";

export const Button = styled.button`
    display: block;
    padding: 2px 5px;
    margin: 50px auto;
    width: 200px;
    height: 50px;
    background-color: transparent;
    color: #29EBAA;
    border-color: #29EBAA;
    border-radius: 5px;
    font-size: 1.3rem;
    font-family: monospace;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: #29EBAA;
        color: white;
    }

    @media (max-height: 653px) {
        margin: 35px auto;
        font-size: 0.9rem;
        width: 140px;
        height: 35px;
    }
`;