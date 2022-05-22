import styled from 'styled-components';

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
    width: 500px;
    height: 600px;
    border-radius: 5px;
`;

export const H1 = styled.h1`
    margin-bottom: 40px;
    font-family: monospace;
    font-size: 2rem;
    color: #29EBAA;
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
`;