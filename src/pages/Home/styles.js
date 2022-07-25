import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 0;
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