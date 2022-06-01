import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-height: 1368px) {
        height: 1368px;
    }

    @media (max-height: 1080px) {
        height: 960px;
    }

    @media (max-height: 851px)  {
        height: 851px;
    }

    @media (max-height: 653px) {
        height: 653px;   
    }
`;

export const Content = styled.div`
    text-align: center;
    padding: 30px 20px;
    border: 3px solid #29EBAA;
    width: 500px;
    height: 600px;
    border-radius: 5px;

    @media (max-height: 851px) {
        width: 380px;
        height: 570px;
    }

    @media (max-height: 653px) {
        width: 265px;
        height: 500px;
    }
`;

export const Form = styled.form`
`;

export const H1 = styled.h1`
    margin-bottom: 40px;
    font-family: monospace;
    font-size: 2rem;
    color: #29EBAA;

    @media (max-height: 653px) {
        font-size: 1.4rem;
    }
`;

export const ContentFields = styled.div`
    margin-bottom: 20px;
`;

export const LabelSignUp = styled.label`
    font-size: 1em;
    color: #29EBAA;

    @media (max-height: 653px) {
        font-size: 0.75em;   
    }
`;

export const labelError = styled.label`
    font-size: 0.9em;
    font-weight: bold;
    color: #29EBAA;

    @media (max-height: 653px) {
        font-size: 0.7em;   
    }
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        font-weight: bold;
        color: #29EBAA;
    }
`;

export const Loading = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 30px;
    margin-left: 40px;
`;