import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Header = styled.header`
    margin-bottom: 4rem;
    border: 3px solid #29EBAA;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    height: 100px;

    @media (max-width: 375px) {
        width: ${px2vw(350,375)};
        height: ${px2vw(50,375)};
    }
`;

export const Image = styled.img`
    margin: 10px;
    width: 50px;

    @media (max-width: 375px) {
        width: ${px2vw(35,375)};
    }
`;