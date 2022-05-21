import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 0;
`;

export const Content = styled.div`
    margin-top: 1rem;
`;

export const Card = styled.div`
    margin: 0 auto;
    padding: 30px 40px;
    width: 600px;
    border: 3px solid #3DECB1;
    border-radius: 7px;
    margin-top: 40px;
`;

export const Image = styled.img`
    width: 30px;
    margin-left: 40px;
    cursor: pointer;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const H2 = styled.h2`
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    font-family: Noto Sans;
    font-weight: 700;
    font-size: 1.7rem;
    color: #3DECB1;
`;

export const Line = styled.div`
    background-color:#3DECB1;
    height: 2px;
`;

export const Description = styled.p`
    margin-top: 20px;
    font-size: 1.2rem;
    max-width: 500px;
    font-family: Noto Sans;
    font-weight: 500;
    color: #3DECB1;
`;