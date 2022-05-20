import styled from 'styled-components';

export const Container = styled.div`
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
    margin-top: 100px;
    margin-bottom: 100px;
`;

export const Form = styled.form`
`;

export const H1 = styled.h1`
    margin-bottom: 40px;
    font-family: monospace;
    font-size: 2rem;
    color: #29EBAA;
`;

export const ContentFields = styled.div`
    margin-bottom: 20px;
`;

export const LabelSignUp = styled.label`
    font-size: 16px;
    color: #29EBAA;
`;

export const labelError = styled.label`
    font-size: 14px;
    font-weight: bold;
    color: #29EBAA;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        font-weight: bold;
        color: #29EBAA;
    }
`;