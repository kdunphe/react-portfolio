import React from "react";
import "./style.css";
import resume from "../../assets/resume.pdf";
import { Link } from 'react-router-dom';

function Nav() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link linkStyle" to="/react-portfolio/"> Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link linkStyle" to="/react-portfolio/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link linkStyle" to="/react-portfolio/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);
}




//     return (
//         <nav>
//             <div class="menu-icon">
//                 <i class="fas fa-bars"></i>
//             </div>
//             <div class="logo">
//                 <a href="/react-portfolio">Kayla Dunphe</a>
//             </div>
//             <div class="menu">
//                 <ul>
//                     <li><a href="/react-portfolio/portfolio">Portfolio</a></li>
//                     <li><a href={resume} target="_blank">Experience</a></li>
//                     <li><a href="/react-portfolio/contact">Contact</a></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

export default Nav;