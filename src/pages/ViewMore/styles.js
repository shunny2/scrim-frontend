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
    margin: 30px auto;
    padding: 30px 40px;
    width: 600px;
    border: 3px solid #3DECB1;
    border-radius: 7px;

    @media (max-height: 851px) {
        width: 325px;
    }

    @media (max-height: 653px) {
        width: 250px;
    }
`;

export const Loading = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

export const Image = styled.img`
    width: 30%;
    margin-left: 40px;

    @media (max-height: 851px) {
        width: 20%;
    }
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

    @media (max-height: 851px) {
        font-size: 1.2rem;
        max-width: 450px;
    }

    @media (max-height: 653px) {
        font-size: 1rem;
        width: 350px;
    }
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

    @media (max-height: 851px) {
        font-size: 1rem;
        max-width: 450px;
    }

    @media (max-height: 653px) {
        font-size: 0.95rem;
        width: 350px;
    }
`;