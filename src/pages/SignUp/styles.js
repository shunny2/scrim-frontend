import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Content = styled.div`
    text-align: center;
    padding: 30px 20px;
    border: 3px solid #29EBAA;
    width: ${px2vw(175,500)};
    height: ${px2vw(250,600)};
    border-radius: 5px;

    @media (max-width: 375px) {
        width: ${px2vw(350,375)};
        height: ${px2vw(505,375)};
    }
`;

export const H1 = styled.h1`
    margin-bottom: 40px;
    font-family: monospace;
    font-size: 2rem;
    color: #29EBAA;

    @media (max-width: 375px) {
        font-size: 3.2rem;
    }    
`;

export const Form = styled.form`
`;

export const ContentFields = styled.div`
    margin-bottom: 20px;
`;

export const labelError = styled.label`
    font-size: 14px;
    font-weight: bold;
    color: #29EBAA;

    @media (max-width: 375px) {
        font-size: 1.6rem;
    }
`;