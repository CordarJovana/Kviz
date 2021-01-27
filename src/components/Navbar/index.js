import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navbarElements';
import slika from './logo.jpg';
const Navbar=()=>{
    return (
        <div>
            <Nav>
            <NavLink to="/">
                    <img src={slika} alt="logo"/>
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
                
            </Nav>
        </div>
    );};
    export default Navbar;
