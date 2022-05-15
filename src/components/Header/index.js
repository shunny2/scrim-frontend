import React from 'react';
import { Link } from "react-router-dom";

import Back from '../../assets/back-button.png';

function Header() {
    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <img src={Back} alt='button back' style={{ width: 50 }} />
                </Link>
            </div>
        </header>
    )
}

export default Header;