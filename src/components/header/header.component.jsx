import React from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg';
import './header.styles.scss';
import { Link } from "react-router-dom";

const Header = ()=>(
    <div className="header">
        <Link className="logo-container"  to="/">
            <Logo className = "logo" />
        </Link>
        <div className = "option">
            <Link className = "option" to="/shop">
                SHOP
            </Link>
            <Link className = "option" to= "/">
                CONTACT
            </Link>
            <Link className = "option" to = "/">
                HOME
            </Link>
        </div>
    </div>
);
export default Header;