import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/Auth/AuthContext';

import './index.css';

function HeaderMain() {
    let navigate = useNavigate();
    const auth = useContext(AuthContext);

    const handleSignOut = async () => {
        await auth.signOut();
        navigate('/');
    }

    return (
        <header>
            <div className='container'>
                <div className='logo'>
                    <h1>Scrim</h1>
                </div>

                <div className='buttons'>
                    <Link to='/form'>
                        <button>Cadastrar Novo Jogo</button>
                    </Link>
                </div>
                <div className='buttons'>
                    <Link to=''>
                        <button onClick={handleSignOut}>Sair</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain;