import styled from 'styled-components';

export const Header = styled.header`
    border: 3px solid #29EBAA;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    height: 100px;

    @media (max-height: 851px) {
        height: 80px;
    }

    @media (max-height: 653px) {
        height: 60px;
    }
`;

export const Image = styled.img`
    width: 50px;
    margin: 10px;
`;