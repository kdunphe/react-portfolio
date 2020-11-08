import React from "react";
import "./style.css";
import image from "../../assets/kayla.png";

function About() {
    return (
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-8">
                        <h1>About Me</h1>
                        <p>For the past 8 years, I’ve been working in digital marketing, branding, and design. In my various
                        roles, I’ve provided support for digital strategies and customer experience driven initiatives,
                        including two website redesigns, launching an e-commerce site, and an online account management platform. I’ve
                        always had an interest in coding since I took ‘Intro to IT’ during undergrad. I'm currently learning full
                        stack web development and hope to combine my passion for marketing with the technical skills to build
                        impactful customer-facing solutions.</p>

                        <p>Outside of work, I enjoy traveling (mostly to the Caribbean), going to the beach or lounging by
                        the pool, shopping, interior decorating, photography, and spending time with family. I’m a lifelong Mainer
                        living just of outside Portland with my husband, Steve, and two chocolate labs, Sully & Salem!</p>
                        <br />
                    </div>
                    <div class="col-sm-2">
                        <br />
                        <img src={image} alt="kayla" width="250" />
                    </div>
                </div>
                <div class="col-sm-1"></div>
            </div>
        </main>
    );
}

export default About;