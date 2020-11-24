import React from 'react';

import './styles.css';
import logo from '../../assets/logo.svg';
import face from '../../assets/face.png';

const Header = ({ black }) => {
    return (
        //upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png
        <header className={black ? 'black' : ''}>
            <div className="header--logo" >
                <a href="/">
                    <img src={logo} alt="Netflix" />
                </a>
            </div>
            <div className="header--user" >
                <a href="/">
                    <img src={face} alt="Usuário" />
                </a>
            </div>
        </header>
    );
}

export default Header;