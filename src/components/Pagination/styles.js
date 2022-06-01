import styled, { css } from 'styled-components';

export const Content = styled.div`
    /* display: flex; */
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1px auto;
    width: 60%;
    min-height: 60vh;

    @media (max-height: 851px) {
        min-height: 65vh;
        width: 100%;
    }

    @media (max-height: 653px) {
        min-height: 50vh;
        width: 100%;
    }
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
        margin: 10px auto;
        padding: 20px 30px;
    }
`;

export const Image = styled.img`
    width: 30px;
    margin-left: 40px;
    cursor: pointer;

    @media (max-height: 653px) {
        width: 30px;
        margin-left: 30px;
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
        font-size: 0.9rem;
        max-width: 450px;
    }

    @media (max-height: 653px) {
        font-size: 0.8rem;
        max-width: 350px;
    }
`;

export const Line = styled.div`
    background-color:#3DECB1;
    height: 2px;

    @media (max-height: 653px) {
        height: 1.5px;
    }
`;

export const Description = styled.p`
    margin-top: 20px;
    font-size: 1.2rem;
    max-width: 500px;
    font-family: Noto Sans;
    font-weight: 500;
    color: #3DECB1;

    @media (max-height: 851px) {
        font-size: 0.8rem;
        max-width: 450px;
    }

    @media (max-height: 653px) {
        font-size: 0.7rem;
        max-width: 350px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    @media (max-height: 851px) {
        margin-top: 25px;
    }

    @media (max-height: 653px) {
        margin-top: 20px;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    color: #3DECB1;
    font-size: 1.3rem;
    border-color: #3DECB1;
    border-radius: 5px;
    font-family: monospace;
    font-weight: 700;
    cursor: pointer;
    padding: 5px 40px;

    ${props =>
        ((props.name === 'btn-view') && css`
            &:hover {
                background-color: #3DECB1;
                color: white;
            }`) ||
        ((props.name === 'btn-edit') && css`
            &:hover {
                background-color: #80D8FF;
                color: white;
            }`) ||
        ((props.name === 'btn-delete') && css`
            &:hover {
                background-color: rgb(241, 45, 45);
                color: white;
            }`)
    }

    @media (max-height: 851px) {
        font-size: 0.7rem;
        width: 80px;
        padding: 5px 10px;
        margin: 0px 1px;
    }

    @media (max-height: 653px) {
        font-size: 0.55rem;
        width: 65px;
        padding: 5px 7px;
        margin: 0px 1px;
    }
`;