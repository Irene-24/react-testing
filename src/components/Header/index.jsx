import React from 'react';
import "./Header.scss";
import Logo from "../../assets/images/Logo.png";

function Header ()
{
    return (
        <header data-test="header" className="header">
            <div className="wrap">
                <div className="logo">
                    <img data-test="img" className="img" src={ Logo } alt="logo" />
                </div>
            </div>
        </header>
    );
};



export default Header;
