import React from 'react'
import logo from '../src/img/logo.png';

export const Header = () => {
    return (
        <div>
            <header className="App-header d-flex justify-content-between bg-secondary">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}

export default Header;