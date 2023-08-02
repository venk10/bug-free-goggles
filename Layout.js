import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import './style.css';

export default function Layout(){
    return(
        <>
        <div id="head">
            <div id="name">FOODIE</div>
            <div className="up"><Link to="signup" id="up" >SIGNUP</Link></div>
            <div className="up"><Link to='login' id="up">LOGIN</Link ></div>
            <div id="quote">Don’t starve, just order</div>
        </div>
        <div id="navigation">
            <Link to='/' id="page" >Home</Link>
            <Link to='/order' id="page">Orders</Link>
            <Link to='/contact' id="page">Contact</Link>
            <Link to='/about' id="page">About</Link> 
            <Link to='/form' id="page">Form</Link>
        </div>
        <Outlet />
        </>
    )
}