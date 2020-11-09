import React from "react";
import "./style.css";

function ContactMe() {
    return (
        <main id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-10">
                        <h1>Contact</h1>
                        <br />
                        <form>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" placeholder="Name" class="form-control" id="name" aria-describedby="name" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" placeholder="Email" class="form-control" id="email"
                                    aria-describedby="email" />
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea class="form-control" placeholder="Message" id="message" rows="3" aria-describedby="message"></textarea>
                            </div>
                            <br />
                            <button type="submit" class="btn btn-info">Submit</button>
                        </form>
                    </div>
                    <div class="col-sm-1"></div>
                </div>
            </div>
        </main>
    );
}

export default ContactMe;