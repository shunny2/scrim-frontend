import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/Auth/AuthContext';

import * as S from './styles';

function HeaderMain() {
    let navigate = useNavigate();
    const auth = useContext(AuthContext);

    const handleSignOut = async () => {
        await auth.signOut();
        navigate('/');
    }

    return (
        <S.Header>
            <S.Container>
                <S.Logo>
                    <S.H1>Scrim</S.H1>
                </S.Logo>

                <S.Buttons>
                    <Link to='/form'>
                        <S.Button>Cadastrar Novo Jogo</S.Button>
                    </Link>
                </S.Buttons>
                <S.Buttons>
                    <Link to=''>
                        <S.Button onClick={handleSignOut}>Sair</S.Button>
                    </Link>
                </S.Buttons>
            </S.Container>
        </S.Header>
    )
}

export default HeaderMain;