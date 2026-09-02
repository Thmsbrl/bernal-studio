import {
  useEffect,
  useRef,
  useState,
} from "react";

import artist01 from "../../../assets/prana/images/artist-01.jpg";
import artist02 from "../../../assets/prana/images/artist-02.jpg";
import artist03 from "../../../assets/prana/images/artist-03.jpg";


const artists = [
  {
    number: "01",
    name: "Greg Leroy",
    style: "Fine line",
    image: artist01,
  },
  {
    number: "02",
    name: "Noah Martin",
    style: "Blackwork",
    image: artist02,
  },
  {
    number: "03",
    name: "Alex Moreau",
    style: "Ornemental",
    image: artist03,
  },
];


function PranaArtists() {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);

  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  const previewPositionRef = useRef({
    x: 0,
    y: 0,
  });

  const animationFrameRef = useRef(null);

  const [previewImage, setPreviewImage] =
    useState(null);

  const [previewVisible, setPreviewVisible] =
    useState(false);

  const [isTouchDevice, setIsTouchDevice] =
    useState(false);


  /* ========================================
     DEVICE TYPE
  ======================================== */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    );

    const updateDeviceType = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    updateDeviceType();

    mediaQuery.addEventListener(
      "change",
      updateDeviceType
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateDeviceType
      );
    };
  }, []);


  /* ========================================
     DESKTOP — MOUSE FOLLOW
  ======================================== */

  useEffect(() => {
    if (isTouchDevice) return;

    const preview = previewRef.current;

    if (!preview) return;


    const handleMouseMove = (event) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };


    const animatePreview = () => {
      const mouse = mouseRef.current;
      const position =
        previewPositionRef.current;

      position.x +=
        (mouse.x - position.x) * 0.12;

      position.y +=
        (mouse.y - position.y) * 0.12;


      /*
       * Même offset que ton ancien Prana :
       * photo légèrement à droite et
       * au-dessus du curseur.
       */

      preview.style.left =
        `${position.x + 180}px`;

      preview.style.top =
        `${position.y - 40}px`;


      animationFrameRef.current =
        requestAnimationFrame(
          animatePreview
        );
    };


    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    animationFrameRef.current =
      requestAnimationFrame(
        animatePreview
      );


    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [isTouchDevice]);


  /* ========================================
     MOBILE — TAP OUTSIDE
  ======================================== */

  useEffect(() => {
    if (!isTouchDevice) return;


    const handleOutsideTap = (event) => {
      const section = sectionRef.current;

      if (!section) return;


      const clickedArtist =
        event.target.closest(".artist-row");

      const clickedPreview =
        event.target.closest(".artist-preview");


      if (
        !clickedArtist &&
        !clickedPreview
      ) {
        setPreviewVisible(false);
      }
    };


    document.addEventListener(
      "click",
      handleOutsideTap
    );


    return () => {
      document.removeEventListener(
        "click",
        handleOutsideTap
      );
    };
  }, [isTouchDevice]);


  /* ========================================
     ARTIST INTERACTIONS
  ======================================== */

  const handleMouseEnter = (artist) => {
    if (isTouchDevice) return;

    setPreviewImage(artist.image);
    setPreviewVisible(true);
  };


  const handleMouseLeave = () => {
    if (isTouchDevice) return;

    setPreviewVisible(false);
  };


  const handleArtistClick = (
    event,
    artist
  ) => {
    /*
     * Les lignes artistes sont pour
     * l'instant uniquement interactives.
     * On empêche donc le href="#".
     */

    event.preventDefault();


    if (!isTouchDevice) return;


    /*
     * Retap sur le même artiste :
     * fermeture.
     */

    if (
      previewVisible &&
      previewImage === artist.image
    ) {
      setPreviewVisible(false);
      return;
    }


    setPreviewImage(artist.image);
    setPreviewVisible(true);
  };


  return (
    <section
      className="artists-section"
      id="artistes"
      ref={sectionRef}
    >
      <div className="artists-heading">

        <span className="artists-label">
          Nos artistes
        </span>

        <h2>
          <span>Des univers.</span>
          <span>Une signature.</span>
        </h2>

      </div>


      <div className="artists-list">

        {artists.map((artist) => (
          <a
            href="#"
            className="artist-row"
            key={artist.number}

            onMouseEnter={() =>
              handleMouseEnter(artist)
            }

            onMouseLeave={
              handleMouseLeave
            }

            onClick={(event) =>
              handleArtistClick(
                event,
                artist
              )
            }
          >
            <span className="artist-number">
              {artist.number}
            </span>

            <h3 className="artist-name">
              {artist.name}
            </h3>

            <span className="artist-style">
              {artist.style}
            </span>

            <span className="artist-arrow">
              ↗
            </span>
          </a>
        ))}
      </div>


      {/* FLOATING PREVIEW */}

      <div
        ref={previewRef}
        className={
          `artist-preview ${
            previewVisible
              ? "active"
              : ""
          }`
        }
      >
        {previewImage && (
          <img
            src={previewImage}
            alt=""
            aria-hidden="true"
          />
        )}
      </div>

    </section>
  );
}

export default PranaArtists;
