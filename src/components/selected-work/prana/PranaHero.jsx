import { useEffect, useState } from "react";

import pranaLogo from "../../../assets/prana/images/prana-logo.png";
import pranaVideo from "../../../assets/prana/videos/prana-video.mp4";
import pranaMobileVideo from "../../../assets/prana/videos/prana-mobile.mp4";

function PranaHero({ onBookingOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  /* ========================================
     LOCK SCROLL — MOBILE MENU
  ======================================== */

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [menuOpen]);


  /* ========================================
     CLOSE MENU
  ======================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <section
      className="hero"
      id="accueil"
    >
      {/* VIDEO */}

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={pranaMobileVideo}
          type="video/mp4"
          media="(max-width: 900px)"
        />

        <source
          src={pranaVideo}
          type="video/mp4"
        />
      </video>


      {/* EFFECTS */}

      <div className="grain" />
      <div className="overlay" />


      {/* ====================================
          NAV
      ==================================== */}

      <header
        className={
          `nav ${
            menuOpen
              ? "menu-open"
              : ""
          }`
        }
        id="navbar"
      >
        <a
          href="#accueil"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src={pranaLogo}
            alt="Prana Tattoo"
          />
        </a>


        <nav className="nav-links">
          <a
            href="#accueil"
            onClick={closeMenu}
          >
            ACCUEIL
          </a>

          <a
            href="#experience"
            onClick={closeMenu}
          >
            EXPÉRIENCE
          </a>

          <a
            href="#artistes"
            onClick={closeMenu}
          >
            ARTISTES
          </a>
        </nav>


        <button
          type="button"
          className="top-btn"
          onClick={() => {
            closeMenu();
            onBookingOpen();
          }}
        >
          RÉSERVER UNE CONSULTATION
        </button>


        <button
          type="button"
          className="menu-toggle"
          aria-label={
            menuOpen
              ? "Fermer le menu"
              : "Ouvrir le menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(
              (current) => !current
            )
          }
        >
          <span />
          <span />
        </button>
      </header>


      {/* ====================================
          HERO CONTENT
      ==================================== */}

      <main className="hero-content">

        <p className="eyebrow">
          ART & ÉMOTION
        </p>

        <h1>
          PRANATATTOO
        </h1>

        <p className="subtitle">
          TATOUAGE ARTISTIQUE À MONTRÉAL
        </p>


        <div className="divider">
          <span />
          <div>◇</div>
          <span />
        </div>


        <div className="actions">

          <button
            type="button"
            className="primary"
            onClick={onBookingOpen}
          >
            RÉSERVER UNE CONSULTATION
          </button>

          <a
            href="#artistes"
            className="secondary"
          >
            DÉCOUVRIR LES ARTISTES
          </a>

        </div>

      </main>
    </section>
  );
}

export default PranaHero;
