import React from "react";
import "./style.css";
import resume from "../../assets/resume.pdf";

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
                    <li><a href="/react-portfolio/portfolio">Portfolio</a></li>
                    <li><a href={resume} target="_blank">Experience</a></li>
                    <li><a href="/react-portfolio/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;