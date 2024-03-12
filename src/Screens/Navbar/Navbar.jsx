import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export function Navbar(props) {
    

    return (
        <div className="nav">
            <Link id='home' to={"/"}>Home</Link>
            <Link id='about' to={"/about"}>About Us</Link>
            <Link id='ser' to={"/services"}>Services</Link>
            <Link id='news' to={"/news"}>Latest News</Link>
            <Link id='contact' to={"/contact"}>Contact Us</Link>
        </div>
    )
}
