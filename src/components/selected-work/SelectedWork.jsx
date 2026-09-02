import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SelectedWork.css";
import pranaPreview from "../../assets/prana/videos/prana-preview.mp4";
import eliasPreview from "../../assets/elias/videos/elias-preview.mp4";

gsap.registerPlugin(ScrollTrigger);

const translations = {
  fr: {
    eyebrow: "Projets sélectionnés",
    intro: "Une sélection de projets pensés pour créer une identité forte et une expérience mémorable.",

    pranaType: "Studio de tatouage",
    pranaLocation: "Montréal — Canada",
    pranaServices: "Design · Développement",
    pranaAction: "Voir le projet",

    eliasType: "Photographie",
    eliasLocation: "Montréal — Canada",
    eliasServices: "Design · Développement",
    eliasAction: "Voir le projet",
  },

  en: {
    eyebrow: "Selected work",
    intro: "A selection of projects designed to create a strong identity and a memorable experience.",

    pranaType: "Tattoo studio",
    pranaLocation: "Montréal — Canada",
    pranaServices: "Design · Development",
    pranaAction: "View project",

    eliasType: "Photography",
    eliasLocation: "Montréal — Canada",
    eliasServices: "Design · Development",
    eliasAction: "View project",
  },
};

function SelectedWork({
  language = "fr",
  onOpenPrana,
  onOpenElias,
}) {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const pranaRef = useRef(null);
  const eliasRef = useRef(null);

  const t = translations[language];

  const handleOpenPrana = () => {
    const visual = pranaRef.current?.querySelector(
      ".project-visual-prana"
    );

    if (!visual) {
      onOpenPrana?.();
      return;
    }

    const rect = visual.getBoundingClientRect();

    const transition = visual.cloneNode(true);

    transition.classList.add("project-transition-clone");

    Object.assign(transition.style, {
      position: "fixed",
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      margin: "0",
      padding: "0",
      transform: "none",
      zIndex: "99999",
      pointerEvents: "none",
    });

    document.body.appendChild(transition);
    document.body.style.overflow = "hidden";

    const video = transition.querySelector(
      ".project-preview-video"
    );

    const enterButton = transition.querySelector(
      ".project-enter"
    );

    const tl = gsap.timeline();


    // =====================================
    // 1. CTA DISPARAÎT
    // =====================================

    if (enterButton) {
      tl.to(
        enterButton,
        {
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        0
      );
    }


    // =====================================
    // 2. PETITE RESPIRATION AU CLIC
    // =====================================

    tl.to(
      transition,
      {
        scale: 0.985,
        duration: 0.18,
        ease: "power2.out",
      },
      0
    );


    // =====================================
    // 3. LE CADRE PREND L'ÉCRAN
    // =====================================

    tl.to(
      transition,
      {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        scale: 1,

        duration: 1.65,

        ease: "power4.inOut",
      },
      0.16
    );


    // =====================================
    // 4. LA VIDÉO ACCOMPAGNE LE MOUVEMENT
    // =====================================

    if (video) {
      tl.to(
        video,
        {
          scale: 1.045,

          duration: 1.7,

          ease: "power2.inOut",
        },
        0.16
      );
    }


    // =====================================
    // 5. ASSOMBRISSEMENT TRÈS LÉGER
    // =====================================

    if (video) {
      tl.to(
        video,
        {
          opacity: 0.72,

          duration: 0.45,

          ease: "power2.inOut",
        },
        1.25
      );
    }


    // =====================================
    // 6. PRANA EST CHARGÉ DERRIÈRE
    // =====================================

    tl.call(() => {
      onOpenPrana?.();
      window.scrollTo(0, 0);
    });


    // On laisse React afficher le projet
    // pendant que le clone couvre encore l'écran.

    tl.to({}, {
      duration: 0.18,
    });


    // =====================================
    // 7. RÉVÉLATION DE PRANA
    // =====================================

    tl.to(transition, {
      opacity: 0,

      duration: 0.8,

      ease: "power3.out",

      onComplete: () => {
        transition.remove();
        document.body.style.overflow = "";
      },
    });
  };

  const handleOpenElias = () => {
    const visual = eliasRef.current?.querySelector(
      ".project-visual-elias"
    );

    if (!visual) {
      onOpenElias?.();
      return;
    }

    const rect = visual.getBoundingClientRect();
    const transition = visual.cloneNode(true);

    transition.classList.add("project-transition-clone");

    Object.assign(transition.style, {
      position: "fixed",
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      margin: "0",
      padding: "0",
      transform: "none",
      zIndex: "99999",
      pointerEvents: "none",
    });

    document.body.appendChild(transition);
    document.body.style.overflow = "hidden";

    const video = transition.querySelector(
      ".project-preview-video"
    );

    const enterButton = transition.querySelector(
      ".project-enter"
    );

    const tl = gsap.timeline();

    if (enterButton) {
      tl.to(
        enterButton,
        {
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        0
      );
    }

    tl.to(
      transition,
      {
        scale: 0.985,
        duration: 0.18,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      transition,
      {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        scale: 1,
        duration: 1.65,
        ease: "power4.inOut",
      },
      0.16
    );

    if (video) {
      tl.to(
        video,
        {
          scale: 1.045,
          duration: 1.7,
          ease: "power2.inOut",
        },
        0.16
      );

      tl.to(
        video,
        {
          opacity: 0.72,
          duration: 0.45,
          ease: "power2.inOut",
        },
        1.25
      );
    }

    tl.call(() => {
      onOpenElias?.();
      window.scrollTo(0, 0);
    });

    tl.to({}, {
      duration: 0.18,
    });

    tl.to(transition, {
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",

      onComplete: () => {
        transition.remove();
        document.body.style.overflow = "";
      },
    });
  };


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.from(".selected-work-intro-top", {
        opacity: 0,
        y: 18,
        duration: 0.7,
        ease: "power3.out",
      })

        .from(
          ".selected-work-intro-main h2",
          {
            opacity: 0,
            y: 70,
            duration: 1.15,
            ease: "power4.out",
          },
          "-=0.3"
        )

        .from(
          ".selected-work-intro-main p",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55"
        );

      // =====================================
      // PRANA
      // =====================================

      gsap.from(
        pranaRef.current.querySelector(".project-heading"),
        {
          scrollTrigger: {
            trigger: pranaRef.current,
            start: "top 78%",
          },
          opacity: 0,
          x: -60,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.from(
        pranaRef.current.querySelector(".project-visual"),
        {
          scrollTrigger: {
            trigger: pranaRef.current,
            start: "top 78%",
          },
          opacity: 0,
          x: 60,
          duration: 1.15,
          ease: "power3.out",
        }
      );

      gsap.from(
        pranaRef.current.querySelector(".project-number"),
        {
          scrollTrigger: {
            trigger: pranaRef.current,
            start: "top 82%",
          },
          opacity: 0,
          x: -30,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.from(
        pranaRef.current.querySelector(".project-meta"),
        {
          scrollTrigger: {
            trigger: pranaRef.current,
            start: "top 72%",
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        }
      );


      // =====================================
      // ELIAS — MOUVEMENT INVERSÉ
      // =====================================

      gsap.from(
        eliasRef.current.querySelector(".project-heading"),
        {
          scrollTrigger: {
            trigger: eliasRef.current,
            start: "top 78%",
          },
          opacity: 0,
          x: 60,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.from(
        eliasRef.current.querySelector(".project-visual"),
        {
          scrollTrigger: {
            trigger: eliasRef.current,
            start: "top 78%",
          },
          opacity: 0,
          x: -60,
          duration: 1.15,
          ease: "power3.out",
        }
      );

      gsap.from(
        eliasRef.current.querySelector(".project-number"),
        {
          scrollTrigger: {
            trigger: eliasRef.current,
            start: "top 82%",
          },
          opacity: 0,
          x: 30,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.from(
        eliasRef.current.querySelector(".project-meta"),
        {
          scrollTrigger: {
            trigger: eliasRef.current,
            start: "top 72%",
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="selected-work"
      id="projects"
      ref={sectionRef}
    >
      {/* =====================================
          SECTION INTRO
      ===================================== */}

      <div
        className="selected-work-intro"
        ref={introRef}
      >

        <div className="selected-work-intro-top">
          <span className="selected-work-index">
            01
          </span>

          <span className="selected-work-label">
            {t.eyebrow}
          </span>
        </div>

        <div className="selected-work-intro-main">

          <h2>
            SELECTED
            <br />
            <span>WORK.</span>
          </h2>

          <p>
            {t.intro}
          </p>

        </div>

      </div>


      {/* =====================================
          PROJECT 01 — PRANA
      ===================================== */}

      <article
        className="selected-project selected-project-prana"
        ref={pranaRef}
        data-project="prana"
      >
        <div className="project-number">
          <span>01</span>
          <span className="project-number-line" />
        </div>


        <div className="project-heading">

          <span className="project-category">
            {t.pranaType}
          </span>

          <h3>
            <span>PRANA</span>
            <span>TATTOO</span>
          </h3>

        </div>


        {/* VISUAL
            On branchera la vidéo Prana ici
            à l'étape suivante.
        */}

        <button
          type="button"
          className="project-visual project-visual-prana"
          onClick={handleOpenPrana}
          aria-label={t.pranaAction}
        >
          <video
            className="project-preview-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src={pranaPreview}
              type="video/mp4"
            />
          </video>


          <div className="project-enter">
            <span>{t.pranaAction}</span>

            <span className="project-enter-arrow">
              ↗
            </span>
          </div>
        </button>


        <div className="project-meta">

          <div>
            <span className="project-meta-label">
              LOCATION
            </span>

            <span>
              {t.pranaLocation}
            </span>
          </div>


          <div>
            <span className="project-meta-label">
              SERVICES
            </span>

            <span>
              {t.pranaServices}
            </span>
          </div>


          <div>
            <span className="project-meta-label">
              YEAR
            </span>

            <span>
              2026
            </span>
          </div>

        </div>

      </article>


      {/* =====================================
          PROJECT 02 — ELIAS
      ===================================== */}

      <article
        className="selected-project selected-project-elias"
        ref={eliasRef}
        data-project="elias"
      >
        <div className="project-number">
          <span>02</span>
          <span className="project-number-line" />
        </div>


        <div className="project-heading">

          <span className="project-category">
            {t.eliasType}
          </span>

          <h3>
            <span>ELIAS</span>
            <span>STUDIO</span>
          </h3>

        </div>


        <button
          type="button"
          className="project-visual project-visual-elias"
          onClick={handleOpenElias}
          aria-label={t.eliasAction}
        >
          <video
            className="project-preview-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src={eliasPreview}
              type="video/mp4"
            />
          </video>

          <div className="project-enter">
            <span>{t.eliasAction}</span>

            <span className="project-enter-arrow">
              ↗
            </span>
          </div>
        </button>


        <div className="project-meta">

          <div>
            <span className="project-meta-label">
              LOCATION
            </span>

            <span>
              {t.eliasLocation}
            </span>
          </div>


          <div>
            <span className="project-meta-label">
              SERVICES
            </span>

            <span>
              {t.eliasServices}
            </span>
          </div>


          <div>
            <span className="project-meta-label">
              YEAR
            </span>

            <span>
              2026
            </span>
          </div>

        </div>

      </article>

    </section>
  );
}

export default SelectedWork;