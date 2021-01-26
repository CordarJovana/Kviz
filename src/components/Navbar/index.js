import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navbarElements';

const Navbar=()=>{
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <img src={require('../../images/logo-social.png')} alt="logo"/>
                </NavLink>
                <Bars />
                <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/about" activeStyle>
                    Proba
                </NavLink>
                </NavMenu>
                <NavBtn></NavBtn>
            </Nav>
        </div>
    );};
    export default Navbar;
