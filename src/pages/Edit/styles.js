import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 78vh;

    @media (max-height: 851px) {
        min-height: 80vh;
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
        height: 620px;
    }

    @media (max-height: 653px) {
        width: 265px;
        height: 500px;
    }
`;

export const Loading = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 30%;
    margin-left: 40px;
`;

export const H1 = styled.h1`
    margin-bottom: 40px;
    font-family: monospace;
    font-size: 2rem;
    color: #29EBAA;

    @media (max-height: 653px) {
        margin-bottom: 25px;
        font-size: 1.4rem;
    }
`;

export const Form = styled.form`
`;

export const ContentFields = styled.div`
    margin-bottom: 20px;

    @media (max-height: 653px) {
        margin-bottom: 10px;
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