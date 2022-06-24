import React from "react";

import "./Contactus.css";
function Contactus() {
  return (
    <div className="shady">
      <div className="container2">
        <img src="./images/domctors.jpg" alt="" />
      </div>
      <div class="container1">
        <h3 class="text-center">Better Health Starts Here</h3>
        <form action="">
          <div class="row1">
            <div class="name-class">
              <label for="" class="col-form-label">
                Name *
              </label>
              <br />
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="Your name"
              />
              <hr class="line" />
            </div>

            <div class="email-class">
              <label for="" class="col-form-label">
                Email *
              </label>
              <br />
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your email"
              />
              <hr class="line" />
            </div>
          </div>

          <div class="column">
            <div class="subject-class">
              <label for="budget" class="col-form-label">
                Subject
              </label>
              <br />
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Your subject"
              />
              <hr class="line2" />
            </div>
            <div class="message-class">
              <label for="message" class="col-form-label">
                Message *
              </label>
              <br />
              <textarea
                class="form-control"
                name="message"
                id="message"
                cols="30"
                rows="4"
                placeholder="Write your message"
              ></textarea>
              <hr class="line2" />
            </div>
          </div>
          <br />
          <div class="btn-class1">
            <button class="btn1">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
