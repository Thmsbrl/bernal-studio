import { useState } from "react";

import artist01 from "../../../assets/prana/images/artist-01.jpg";
import artist02 from "../../../assets/prana/images/artist-02.jpg";
import artist03 from "../../../assets/prana/images/artist-03.jpg";

const artists = [
  {
    id: 1,
    name: "Greg Leroy",
    style: "Fine Line",
    image: artist01,
  },
  {
    id: 2,
    name: "Noah Martin",
    style: "Blackwork",
    image: artist02,
  },
  {
    id: 3,
    name: "Alex Moreau",
    style: "Ornemental",
    image: artist03,
  },
];

function PranaBooking({ isOpen = false, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleClose = () => {
    setStep(1);
    setSelectedArtist(null);

    if (onClose) {
      onClose();
    }
  };

  const handleArtistSelect = (artist) => {
    setSelectedArtist(artist);
    setStep(2);
  };

  const handleProjectContinue = (event) => {
    event.preventDefault();
    setStep(3);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
     * Portfolio uniquement pour l'instant.
     * On branchera éventuellement un vrai
     * envoi plus tard si nécessaire.
     */

    handleClose();
  };

  return (
    <div
      className={`booking-overlay ${isOpen ? "active" : ""}`}
      id="bookingOverlay"
      aria-hidden={!isOpen}
    >
      <button
        className="booking-close"
        type="button"
        aria-label="Fermer"
        onClick={handleClose}
      >
        <span></span>
        <span></span>
      </button>

      <div className="booking-inner">

        {/* =====================================
            TOP / PROGRESS
        ===================================== */}

        <div className="booking-top">
          <span className="booking-label">
            CONSULTATION PRIVÉE
          </span>

          <div className="booking-progress">
            <span className={step === 1 ? "active" : ""}>
              01 ARTISTE
            </span>

            <span className={step === 2 ? "active" : ""}>
              02 PROJET
            </span>

            <span className={step === 3 ? "active" : ""}>
              03 CONTACT
            </span>
          </div>
        </div>


        {/* =====================================
            STEP 01 — ARTIST
        ===================================== */}

        {step === 1 && (
          <div className="booking-step booking-step-artists">

            <div className="booking-heading">
              <span className="booking-number">
                01
              </span>

              <h2>
                Choisissez
                <br />
                <em>votre artiste.</em>
              </h2>

              <p>
                Chaque artiste possède son propre univers.
                Sélectionnez celui qui correspond le mieux
                à votre projet.
              </p>
            </div>

            <div className="booking-artists">

              {artists.map((artist, index) => (
                <button
                  key={artist.id}
                  type="button"
                  className="booking-artist"
                  onClick={() =>
                    handleArtistSelect(artist)
                  }
                >
                  <div className="booking-artist-image">
                    <img
                      src={artist.image}
                      alt={artist.name}
                    />
                  </div>

                  <div className="booking-artist-info">

                    <span className="booking-artist-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3>{artist.name}</h3>
                      <span>{artist.style}</span>
                    </div>

                    <span className="booking-arrow">
                      ↗
                    </span>

                  </div>
                </button>
              ))}

            </div>
          </div>
        )}


        {/* =====================================
            STEP 02 — PROJECT
        ===================================== */}

        {step === 2 && selectedArtist && (
          <div className="booking-project active">

            <div className="selected-artist">

              <div className="selected-artist-image">
                <img
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                />
              </div>

              <div className="selected-artist-info">
                <span>
                  ARTISTE SÉLECTIONNÉ
                </span>

                <h3>
                  {selectedArtist.name}
                </h3>

                <p>
                  {selectedArtist.style}
                </p>
              </div>

            </div>


            <form
              className="project-form"
              onSubmit={handleProjectContinue}
            >
              <span className="booking-number">
                02
              </span>

              <h2>
                Parlez-nous
                <br />
                <em>de votre projet.</em>
              </h2>


              <div className="form-group">

                <label htmlFor="tattooIdea">
                  VOTRE IDÉE
                </label>

                <textarea
                  id="tattooIdea"
                  name="tattooIdea"
                  placeholder="Décrivez votre projet, vos inspirations..."
                  required
                />

              </div>


              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="tattooPlacement">
                    EMPLACEMENT
                  </label>

                  <input
                    id="tattooPlacement"
                    name="tattooPlacement"
                    type="text"
                    placeholder="Avant-bras, dos..."
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="tattooSize">
                    TAILLE
                  </label>

                  <input
                    id="tattooSize"
                    name="tattooSize"
                    type="text"
                    placeholder="Environ 15 cm"
                  />

                </div>

              </div>


              <div className="form-group">

                <label htmlFor="tattooBudget">
                  BUDGET APPROXIMATIF
                </label>

                <input
                  id="tattooBudget"
                  name="tattooBudget"
                  type="text"
                  placeholder="Ex. 500 – 800 $"
                />

              </div>


              <button
                className="booking-next"
                type="submit"
              >
                CONTINUER
                <span>→</span>
              </button>

            </form>

          </div>
        )}


        {/* =====================================
            STEP 03 — CONTACT
        ===================================== */}

        {step === 3 && (
          <div className="booking-contact active">

            <div className="contact-heading">
              <span className="booking-number">
                03
              </span>

              <h2>
                Restons
                <br />
                <em>en contact.</em>
              </h2>

              <p>
                Quelques informations et votre demande
                sera prête à être envoyée à notre équipe.
              </p>
            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="firstName">
                    PRÉNOM
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Votre prénom"
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="lastName">
                    NOM
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Votre nom"
                    required
                  />
                </div>

              </div>


              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="bookingEmail">
                    EMAIL
                  </label>

                  <input
                    type="email"
                    id="bookingEmail"
                    name="bookingEmail"
                    placeholder="vous@email.com"
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="bookingPhone">
                    TÉLÉPHONE
                  </label>

                  <input
                    type="tel"
                    id="bookingPhone"
                    name="bookingPhone"
                    placeholder="+1 514..."
                  />
                </div>

              </div>


              <div className="form-group">

                <label htmlFor="bookingInstagram">
                  INSTAGRAM
                  <span> (OPTIONNEL)</span>
                </label>

                <input
                  type="text"
                  id="bookingInstagram"
                  name="bookingInstagram"
                  placeholder="@votrecompte"
                />

              </div>


              <div className="contact-bottom">

                <p>
                  Nous vous répondrons sous 24–48 h
                  pour discuter de votre projet et
                  des disponibilités de l'artiste.
                </p>

                <button
                  type="submit"
                  className="booking-submit"
                >
                  ENVOYER MA DEMANDE
                  <span>↗</span>
                </button>

              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}

export default PranaBooking;