import styled from "styled-components";
import px2vw from "../../utils/px2vw";

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

    @media (max-width: 375px) {
        font-size: 1.7rem;
        margin: 30px auto;
        width: ${px2vw(80,200)};
        height: ${px2vw(5,50)};
    }
`;