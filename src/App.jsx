import { useState } from "react";

import "./App.css";
import { Navbar } from "./component/NavBar/NavBar";
import { Slider } from "./component/Slider/Slider";
import { MainContent } from "./component/MainContent/MainContent";
import { Footer } from "./component/Footer/Footer";

function App() {
  return (
    <>
      <div id="main-container">
        <Navbar />
        <Slider />
      </div>

      <main>
        <MainContent />

        <section id="team">
          <h5 className="section-title">Professional Teams</h5>
          <h2 className="main-title">The Professional expert</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>

          <div className="team__box">
            <div className="team__item team__item--side">
              <div className="team__image">
                <img src="./assets/team/team-1.svg" alt="Team 1" />
              </div>

              <div className="team__content">
                <h5>Surgeon</h5>
                <h4>Briyan Nevalli</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit
                </p>
              </div>

              <div className="team__social">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="team__item team__item--center">
              <div className="team__image">
                <img src="./assets/team/team-2.svg" alt="Team 2" />
              </div>

              <div className="team__content">
                <h5>Dermatologist</h5>
                <h4>Bella sebastian</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit
                </p>
              </div>

              <div className="team__social">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="team__item team__item--side">
              <div className="team__image">
                <img src="./assets/team/team-3.svg" alt="Team 3" />
              </div>

              <div className="team__content">
                <h5>Stylist expert</h5>
                <div className="team__content--">
                  <h4>Lilly Adams</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit
                  </p>
                </div>
              </div>

              <div className="team__social">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-us" className="flex-center">
          <div className="contact-us__wrapper">
            <div className="contact-us__image">
              <img src="./assets/contact-us.svg" alt="Contact Us" />
            </div>

            <div className="contact-us__content">
              <h5 className="contact-us__title">Contact Us</h5>
              <h2 className="contact-us__heading">
                Send your inquiry to our expert team
              </h2>
              <p className="contact-us__description">
                Lorem ipsum dolor sit amet nulla turapis tellus.
              </p>
              <form action="#" method="post" className="contact-us__form">
                <div className="contact-us__form-group">
                  <input
                    type="text"
                    className="contact-us__input"
                    placeholder="First name"
                    required
                  />
                  <input
                    type="text"
                    className="contact-us__input last-name"
                    placeholder="Last name"
                    required
                  />
                </div>

                <input
                  type="email"
                  className="contact-us__input"
                  placeholder="Email address"
                  required
                />
                <input
                  type="text"
                  className="contact-us__input"
                  placeholder="Subject message"
                  required
                />
                <textarea
                  className="contact-us__textarea"
                  placeholder="Your inquiry here"
                  rows="4"
                  required
                ></textarea>
                <button type="submit" className="contact-us__button btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
