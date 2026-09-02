import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./EliasProject.css";

import EliasHero from "./EliasHero";
import EliasStories from "./EliasStories";
import EliasQuote from "./EliasQuote";
import EliasContact from "./EliasContact";


gsap.registerPlugin(ScrollTrigger);


function EliasProject({ onBackToProjects }) {
  const projectRef = useRef(null);


  /* ========================================
     PROJECT ANIMATIONS
  ======================================== */

  useEffect(() => {
    const project = projectRef.current;

    if (!project) {
      return undefined;
    }


    const context = gsap.context(() => {

      /* =====================================
         GENERAL REVEALS
      ===================================== */

      const revealItems =
        gsap.utils.toArray(".reveal-item");

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",

            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions:
                "play none none none",
            },
          }
        );
      });


      /* =====================================
         STORIES
      ===================================== */

      gsap.fromTo(
        ".story-card",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.14,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".stories-grid",
            start: "top 83%",
            toggleActions:
              "play none none none",
          },
        }
      );


      /* STORY IMAGE PARALLAX */

      gsap.utils
        .toArray(".story-image")
        .forEach((image) => {
          gsap.fromTo(
            image,
            {
              scale: 1.12,
            },
            {
              scale: 1,
              ease: "none",

              scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        });


      /* =====================================
         QUOTE
      ===================================== */

      gsap.fromTo(
        ".quote-line",
        {
          opacity: 0,
          yPercent: 110,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1.1,
          stagger: 0.13,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".quote-section",
            start: "top 72%",
            toggleActions:
              "play none none none",
          },
        }
      );


      /* BACKGROUND WORD */

      gsap.to(".quote-background-word", {
        xPercent: -12,
        ease: "none",

        scrollTrigger: {
          trigger: ".quote-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });


      /* =====================================
         CLOSING GLOW
      ===================================== */

      gsap.to(".closing-glow", {
        scale: 1.18,
        opacity: 0.75,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });


      /*
       * Les dimensions peuvent changer après
       * le montage du projet dans Bernal.
       */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

    }, project);


    return () => {
      context.revert();
    };
  }, []);


  return (
    <main
      className="elias-project"
      ref={projectRef}
    >
      <EliasHero />

      <EliasStories />

      <EliasQuote />

      <EliasContact
        onBackToProjects={onBackToProjects}
      />
    </main>
  );
}


export default EliasProject;