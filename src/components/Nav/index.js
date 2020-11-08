import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav>
            <div class="menu-icon">
                <i class="fas fa-bars"></i>
            </div>
            <div class="logo">
                <a href="index.html">Kayla Dunphe</a>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="./assets/resume.pdf">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;