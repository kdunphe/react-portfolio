import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer>
            <div>2020 | Kayla Dunphe</div>
            <br />
            <div class="social">
                <a href="https://www.facebook.com/kayla.paydos" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/kayla.creates" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/kayladunphe" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/kdunphe" target="_blank"><i class="fab fa-github"></i></a>
                <a href="mailto:kayla.dunphe@gmail.com"><i class="far fa-envelope"></i></a>
                <a href="tel:+12072175947"><i class="fas fa-mobile-alt"></i></a>
            </div>
        </footer>
    );
}

export default Footer;