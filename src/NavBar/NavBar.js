import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    return(

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/all-articles">All Articles</Link>
            </li>
            <li className="nav-item">
                <Link to="/add-article">New Article</Link>
            </li>
            </ul>
        </div>

    );
}

export default NavBar;