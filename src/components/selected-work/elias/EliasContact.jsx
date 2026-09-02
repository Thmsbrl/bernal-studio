import { useState } from "react";

import logoImage from "../../../assets/elias/images/elias-logo.png";


function EliasContact({ onBackToProjects }) {
  const [contactOpen, setContactOpen] =
    useState(false);

  const [contactSent, setContactSent] =
    useState(false);


  /* ========================================
     CONTACT SUBMIT
  ======================================== */

  const handleContactSubmit = (event) => {
    event.preventDefault();

    setContactSent(true);

    setTimeout(() => {
      setContactSent(false);
      setContactOpen(false);
    }, 1800);
  };


  return (
    <section
      className="closing-section"
      id="elias-contact"
      data-cursor-tone="dark"
    >
      <div className="closing-glow" />
      <div className="closing-grain" />


      {/* ====================================
          CLOSING CONTENT
      ==================================== */}

      <div className="closing-content">

        <p className="closing-eyebrow reveal-item">
          Let’s create your story
        </p>


        <h2 className="closing-title reveal-item">
          Your story deserves to be

          <span>
            remembered beautifully.
          </span>
        </h2>


        <p className="closing-description reveal-item">
          Tell us about your wedding, your vision
          and the moments that matter most to you.
        </p>


        <button
          type="button"
          className="closing-button reveal-item"
          onClick={() =>
            setContactOpen(
              (open) => !open
            )
          }
        >
          <span>
            {contactOpen
              ? "Close inquiry"
              : "Reserve your date"}
          </span>

          <span className="closing-button-circle">
            {contactOpen ? "×" : "↗"}
          </span>
        </button>


        {/* ====================================
            CONTACT FORM
        ==================================== */}

        <div
          className={
            `contact-form-wrapper ${
              contactOpen
                ? "is-open"
                : ""
            }`
          }
        >
          {!contactSent ? (

            <form
              className="contact-form"
              onSubmit={handleContactSubmit}
            >

              <div className="contact-form-row">

                <label>
                  <span>Your names</span>

                  <input
                    type="text"
                    placeholder="Emma & Lucas"
                    autoComplete="name"
                    required
                  />
                </label>


                <label>
                  <span>Email address</span>

                  <input
                    type="email"
                    placeholder="hello@email.com"
                    autoComplete="email"
                    required
                  />
                </label>

              </div>


              <div className="contact-form-row">

                <label>
                  <span>Wedding date</span>

                  <input
                    type="date"
                    required
                  />
                </label>


                <label>
                  <span>Wedding location</span>

                  <input
                    type="text"
                    placeholder="Montréal, Canada"
                    autoComplete="address-level2"
                    required
                  />
                </label>

              </div>


              <label className="contact-message">
                <span>
                  Tell us about your wedding
                </span>

                <textarea
                  rows="4"
                  placeholder="Tell us about your vision, your venue and the moments that matter most to you..."
                />
              </label>


              <button
                type="submit"
                className="contact-submit"
              >
                <span>
                  Send inquiry
                </span>

                <span>
                  ↗
                </span>
              </button>

            </form>

          ) : (

            <div className="contact-success">

              <span>
                Thank you
              </span>


              <h3>
                Your story has been

                <em>
                  {" "}received.
                </em>
              </h3>


              <p>
                We’ll be in touch soon.
              </p>

            </div>

          )}
        </div>

      </div>


      {/* ====================================
          FOOTER
      ==================================== */}

      <footer className="footer">

        <img
          src={logoImage}
          alt="Élias Studio"
          className="footer-logo"
        />


        <div className="footer-details">
          <p>
            Montréal · Worldwide
          </p>

          <p>
            Wedding photography
          </p>
        </div>


        <div className="footer-actions">

          <button
            type="button"
            className="footer-back"
            onClick={onBackToProjects}
          >
            BACK TO PROJECTS ↑
          </button>

          <p className="footer-copyright">
            © 2026 Élias Studio
          </p>

        </div>

      </footer>

    </section>
  );
}


export default EliasContact;
