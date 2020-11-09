import React from "react";
import "./style.css";
import AdventureBuddies from "../../assets/adventure-buddies.png";
import Quarntitles from "../../assets/quarntitles.png";
import CodeQuiz from "../../assets/codequiz.png";
import FirstPortfolio from "../../assets/portfolio.png";
import PasswordGenerator from "../../assets/passwordgenerator.png";
import WorkdayScheduler from "../../assets/workdayscheduler.png";

function Portfolio() {
    return (
        <main id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-10">
                        <h1 class="portfolio">Portfolio</h1>
                        <div class="row">
                            <div class="col-sm-6">
                            <img src={AdventureBuddies} alt="Outdoor Adventure Buddies" width="445" />
                                <div class="card-img-overlay">
                                    <h5 class="card-title"><a href="https://whispering-castle-57159.herokuapp.com/"
                                        target="_blank">Outdoor Adventure Buddies</a></h5>
                                </div>
                            </div>
                            <div class="col-sm-6">
                            <img src={Quarntitles} alt="Outdoor Adventure Buddies" width="445" />
                                <div class="card-img-overlay">
                                    <h5 class="card-title"><a href="https://kdunphe.github.io/Quarantine-Accomplishments/"
                                        target="_blank">Quar'N'Titles</a></h5>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                            <img src={CodeQuiz} alt="Outdoor Adventure Buddies" width="445" />
                                <div class="card-img-overlay">
                                    <h5 class="card-title"><a href="https://kdunphe.github.io/UNHBootcamp-04-Code-Quiz/"
                                        target="_blank">Code Quiz</a></h5>
                                </div>
                            </div>
                            <div class="col-sm-6">
                            <img src={FirstPortfolio} alt="Outdoor Adventure Buddies" width="445" />
                                <div class="card-img-overlay">
                                    <h5 class="card-title"><a
                                        href="https://kdunphe.github.io/UNHBootcamp-02-responsive-portfolio/"
                                        target="_blank">Responsive Portfolio</a></h5>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                            <img src={PasswordGenerator} alt="Outdoor Adventure Buddies" width="445" />
                                <div class="card-img-overlay">
                                    <h5 class="card-title"><a
                                        href="https://kdunphe.github.io/UNHBootCamp-03-JavaScript-password-generator/"
                                        target="_blank">Password Generator</a></h5>
                                </div>
                            </div>
                            <div class="col-sm-6">
                            <img src={WorkdayScheduler} alt="Outdoor Adventure Buddies" width="445" />
                                <div class="card-img-overlay">
                                    <h5 class="card-title"><a
                                        href="https://kdunphe.github.io/UNHBootcamp-05-workday-scheduler/"
                                        target="_blank">Workday Scheduler</a></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-1"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Portfolio;