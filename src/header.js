import React from 'react'
import logo from '../src/img/logo.png';

export const Header = () => {
    return (
        <div>
            <header className="App-header d-flex justify-content-between bg-light">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1>parrillas</h1>
                {/* <div className="nav mr-5">
                    <span className="mr-3 border border-warning p-2">Mercado Libre</span>
                    <span className="mr-3 bg-warning p-2">Email</span>
                    
                </div> */}
            </header>
        </div>
    )
}

export default Header;