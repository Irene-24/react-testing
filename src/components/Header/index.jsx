import React from 'react';
import "./Header.scss";
import Logo from "../../assets/images/Logo.png";

function Header ()
{
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={ Logo } alt="logo" />
                </div>
            </div>
        </header>
    );
};

export default Header;
