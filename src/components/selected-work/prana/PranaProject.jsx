import { useEffect, useState } from "react";

import PranaHero from "./PranaHero";
import PranaExperience from "./PranaExperience";
import PranaArtists from "./PranaArtists";
import PranaGallery from "./PranaGallery";
import PranaOutro from "./PranaOutro";
import PranaBooking from "./PranaBooking";

import "./PranaProject.css";


function PranaProject({ onBackToProjects, onOpenElias }) {
  const [bookingOpen, setBookingOpen] =
    useState(false);


  /* ========================================
     BOOKING — BODY SCROLL LOCK
  ======================================== */

  useEffect(() => {
    if (!bookingOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [bookingOpen]);


  /* ========================================
     ESCAPE — CLOSE BOOKING
  ======================================== */

  useEffect(() => {
    if (!bookingOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setBookingOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [bookingOpen]);


  /* ========================================
     BOOKING CONTROLS
  ======================================== */

  const openBooking = () => {
    setBookingOpen(true);
  };


  const closeBooking = () => {
    setBookingOpen(false);
  };


  return (
    <div className="prana-project">

      <PranaHero
        onBookingOpen={openBooking}
      />

      <PranaExperience />

      <PranaArtists />

      <PranaGallery />

      <PranaOutro
      onBackToProjects={onBackToProjects} 
      onOpenElias={onOpenElias}
      />

      <PranaBooking
        isOpen={bookingOpen}
        onClose={closeBooking}
      />

    </div>
  );
}

export default PranaProject;
