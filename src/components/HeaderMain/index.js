import React from 'react';
import { Link } from "react-router-dom";

import './index.css';

function HeaderMain() {
  return (
    <header>
        <div className='container'>
            <div className='logo'>
                <h1>Scrim</h1>
            </div>

            <div className='btn-newForm'>
                <Link to='/form'>
                    <button>Cadastrar Novo Jogo</button>
                </Link>
            </div> 
        </div>
    </header>
  )
}

export default HeaderMain;