import React from "react";
import "./style.css";
import resume from "../../assets/resume.pdf";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <div class="menu-icon">
                <i class="fas fa-bars"></i>
            </div>
            <div class="logo">
                <a href="/react-portfolio">Kayla Dunphe</a>
            </div>
            <div class="menu">
                <ul>
                <li>
                        <Link className="nav-link linkStyle" to="/react-portfolio/portfolio">Portfolio</Link>
                    </li>
                    <li><a href={resume} target="_blank">Experience</a></li>
                    <li>
                        <Link className="nav-link linkStyle" to="/react-portfolio/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;