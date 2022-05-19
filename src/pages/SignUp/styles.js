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
    height: 620px;
    border-radius: 5px;
    margin-top: 100px;
    margin-bottom: 100px;
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

export const labelError = styled.label`
    font-size: 14px;
    font-weight: bold;
    color: #29EBAA;
`;