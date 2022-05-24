import React from 'react';
import { Link } from "react-router-dom";

import * as S from './styles';
import Back from '../../assets/back-button.png';

function Header(props) {
    const { page } = props;
    let path = page ? '/login' : '/home';
    
    return (
        <S.Header>
            <S.Container>
                <Link to={path}>
                    <S.Image src={Back} alt='button back' />
                </Link>
            </S.Container>
        </S.Header>
    )
}

export default Header;