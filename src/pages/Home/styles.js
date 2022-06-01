import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 0;
`;

export const Loading = styled.div`
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 7%;
    margin-left: 40px;

    @media (max-height: 851px) {
        width: 20%;
    }

    @media (max-height: 653px) {
        width: 30%;
    }
`;