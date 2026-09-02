import { useEffect, useRef } from "react";
import gsap from "gsap";
import BernalLogo from "./BernalLogo";
import "./Intro.css";

function Intro({ heroRef, heroContentRef }) {
  const introRef = useRef(null);
  const logoRef = useRef(null);
  const scopeRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("intro-playing");

    const ctx = gsap.context(() => {
      const intro = introRef.current;
      const logo = logoRef.current;
      const hero = heroRef.current;
      const heroContent = heroContentRef.current;

      const drawB = scopeRef.current.querySelector(".draw-b");
      const drawS = scopeRef.current.querySelector(".draw-s");

      [drawB, drawS].forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });
      });

      gsap.set(".bs-solid", {
        opacity: 0,
        scale: 0.985,
        transformOrigin: "50% 50%",
      });

      gsap.set(".intro-line", {
        scaleX: 0,
        opacity: 1,
        transformOrigin: "center",
      });

      gsap.set(".intro-name", {
        opacity: 0,
        y: 10,
      });

      gsap.set(".intro-flash", {
        opacity: 0,
      });

      gsap.set(hero, {
        opacity: 0,
        scale: 1.035,
      });

      gsap.set(heroContent, {
        opacity: 0,
        y: 26,
      });

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove("intro-playing");
        },
      });

      /* 01 — DRAW */

      tl.to(
        drawB,
        {
          strokeDashoffset: 0,
          duration: 1.15,
          ease: "power2.inOut",
        },
        0.15
      );

      tl.to(
        drawS,
        {
          strokeDashoffset: 0,
          duration: 1.15,
          ease: "power2.inOut",
        },
        0.32
      );

      /* 02 — MATERIALISATION */

      tl.to(
        ".bs-solid",
        {
          opacity: 1,
          scale: 1,
          duration: 0.52,
          ease: "power2.out",
        },
        1.05
      );

      tl.to(
        [drawB, drawS],
        {
          opacity: 0,
          duration: 0.35,
          ease: "power1.out",
        },
        1.22
      );

      /* 03 — SIGNATURE */

      tl.to(
        ".intro-line",
        {
          scaleX: 1,
          duration: 0.42,
          ease: "power2.inOut",
        },
        1.3
      );

      tl.to(
        ".intro-name",
        {
          opacity: 1,
          y: 0,
          duration: 0.58,
          ease: "power3.out",
        },
        1.43
      );

      /* RESPIRATION */

      tl.to({}, { duration: 0.42 });

      /* 04 — ANTICIPATION */

      tl.to(logo, {
        scale: 0.955,
        duration: 0.18,
        ease: "power2.inOut",
      });

      tl.to(
        ".intro-name",
        {
          opacity: 0,
          y: -7,
          duration: 0.18,
          ease: "power2.in",
        },
        "<"
      );

      tl.to(
        ".intro-line",
        {
          scaleX: 0,
          opacity: 0,
          duration: 0.18,
          ease: "power2.in",
        },
        "<"
      );

      /* 05 — TRAVERSÉE */

      tl.to(logo, {
        scale: 34,
        duration: 1.15,
        ease: "power4.in",
        force3D: true,
      });

      /* BLOOM */

      tl.to(
        ".intro-flash",
        {
          opacity: 0.09,
          duration: 0.16,
          ease: "power2.out",
        },
        "-=0.55"
      );

      tl.to(".intro-flash", {
        opacity: 0,
        duration: 0.32,
        ease: "power2.out",
      });

      /* HERO DÉJÀ PRÉSENT DERRIÈRE */

      tl.set(
        hero,
        {
          opacity: 1,
          scale: 1.018,
        },
        "-=0.72"
      );

      tl.set(
        heroContent,
        {
          opacity: 0,
          y: 26,
        },
        "<"
      );

      /* OUVERTURE DU FOND */

      tl.to(
        intro,
        {
          backgroundColor: "rgba(2, 2, 2, 0)",
          duration: 0.24,
          ease: "power2.in",
        },
        "-=0.38"
      );

      tl.to(
        hero,
        {
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.24"
      );

      /* DISPARITION INTRO */

      tl.to(
        intro,
        {
          autoAlpha: 0,
          duration: 0.18,
          ease: "none",
        },
        "-=0.50"
      );

      tl.set(intro, {
        display: "none",
      });

      /* HERO CONTENT */

      tl.to(
        heroContent,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.04"
      );

      /*
       * IMPORTANT :
       * Je conserve aussi le deuxième mouvement
       * présent dans ta version validée actuelle.
       */

      tl.to(
        heroContent,
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power4.out",
        },
        "-=0.38"
      );
    }, scopeRef);

    return () => {
      ctx.revert();
      document.body.classList.remove("intro-playing");
    };
  }, [heroRef, heroContentRef]);

  return (
    <section className="intro" ref={introRef}>
      <div className="intro-noise" />
      <div className="intro-flash" />

      <div
        className="intro-logo-container"
        ref={scopeRef}
      >
        <div
          className="intro-monogram"
          ref={logoRef}
        >
          <BernalLogo />
        </div>

        <span className="intro-line" />

        <div className="intro-name">
          BERNAL STUDIO
        </div>
      </div>
    </section>
  );
}

export default Intro;
