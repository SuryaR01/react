



import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png"
import "./nav.css"


const Nav = () => {
    return(
        <>
        
        <nav>
            <div>
                <img src={logo} alt="logo_img" />
            </div>

            <div>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/Collection">Collection</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </ul>
            </div>

            <div>
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
            <a href="#"><i className="fa-solid fa-circle-user"></i></a>
            <a href="#"><i className="fa-solid fa-bag-shopping"></i></a>
            </div>
        </nav>
        <hr />
        
        </>
    )
}

export default Nav ;