import styled from "styled-components";

export const Input = styled.input`
    display: block;
    outline-color: #29EBAA;
    padding: 0px 10px;
    margin: 20px auto;
    width: 80%;
    height: 10%;
    font-size: 1em;
    font-family: Poppins;
    border-color: #29EBAA;
    height: 45px;


    @media (max-height: 653px) {
        margin: 12px auto;
        font-size: 0.75em;
        height: 40px;
    }
`;