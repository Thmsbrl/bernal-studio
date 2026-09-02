import {
    useEffect,
    useRef,
    useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logoImage from "../../../assets/elias/images/elias-logo.png";
import heroVideo from "../../../assets/elias/videos/wedding-hero.mp4";

gsap.registerPlugin(ScrollTrigger);


function EliasHero() {
    const heroRef = useRef(null);
    const videoRef = useRef(null);
    const introRef = useRef(null);

    const [introFinished, setIntroFinished] =
        useState(false);


    /* ========================================
       INTRO + HERO ANIMATIONS
    ======================================== */

    useEffect(() => {
        const hero = heroRef.current;
        const intro = introRef.current;
        const video = videoRef.current;

        if (!hero || !intro) {
            return undefined;
        }

        document.body.classList.add(
            "elias-intro-playing"
        );


        const context = gsap.context(() => {

            /* INTRO */

            gsap.set(".intro-logo", {
                opacity: 0,
                y: 24,
                scale: 0.92,
            });

            gsap.set(".intro-line", {
                scaleX: 0,
                transformOrigin: "center",
            });

            gsap.set(".intro-subtitle", {
                opacity: 0,
                y: 12,
            });


            /* HERO */

            gsap.set(".hero-header", {
                opacity: 0,
                y: -18,
            });

            gsap.set(".hero-eyebrow", {
                opacity: 0,
                y: 20,
            });

            gsap.set(".hero-title-line", {
                opacity: 0,
                yPercent: 110,
            });

            gsap.set(".hero-description", {
                opacity: 0,
                y: 22,
            });

            gsap.set(".hero-actions", {
                opacity: 0,
                y: 18,
            });

            gsap.set(".hero-scroll", {
                opacity: 0,
                y: 16,
            });

            gsap.set(".hero-video", {
                scale: 1.08,
            });


            /* =====================================
               INTRO TIMELINE
            ===================================== */

            const introTimeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },

                onComplete: () => {
                    setIntroFinished(true);

                    document.body.classList.remove(
                        "elias-intro-playing"
                    );

                    if (video) {
                        video.play().catch(() => { });
                    }

                    ScrollTrigger.refresh();
                },
            });


            introTimeline
                .to(".intro-logo", {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.35,
                })

                .to(
                    ".intro-line",
                    {
                        scaleX: 1,
                        duration: 0.8,
                        ease: "power2.inOut",
                    },
                    0.65
                )

                .to(
                    ".intro-subtitle",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.85,
                    },
                    0.9
                )

                .to(
                    ".intro-content",
                    {
                        opacity: 0,
                        y: -16,
                        duration: 0.8,
                        ease: "power2.inOut",
                    },
                    2.15
                )

                .to(
                    intro,
                    {
                        autoAlpha: 0,
                        duration: 1.15,
                        ease: "power2.inOut",
                    },
                    2.55
                )

                .to(
                    ".hero-video",
                    {
                        scale: 1,
                        duration: 7,
                        ease: "none",
                    },
                    2.55
                )

                .to(
                    ".hero-header",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                    },
                    2.95
                )

                .to(
                    ".hero-eyebrow",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                    },
                    3.25
                )

                .to(
                    ".hero-title-line",
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 1.05,
                        stagger: 0.12,
                        ease: "power4.out",
                    },
                    3.38
                )

                .to(
                    ".hero-description",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.85,
                    },
                    3.9
                )

                .to(
                    ".hero-actions",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                    },
                    4.1
                )

                .to(
                    ".hero-scroll",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                    },
                    4.35
                );


            /* =====================================
               HERO SCROLL EFFECTS
            ===================================== */

            gsap.to(".hero-video", {
                yPercent: 13,
                ease: "none",

                scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.3,
                },
            });


            gsap.to(".hero-overlay-main", {
                opacity: 0.78,
                ease: "none",

                scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });


            gsap.to(".hero-content", {
                yPercent: 17,
                opacity: 0.2,
                ease: "none",

                scrollTrigger: {
                    trigger: hero,
                    start: "35% top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

        }, hero);


        return () => {
            context.revert();

            document.body.classList.remove(
                "elias-intro-playing"
            );
        };
    }, []);


    /* ========================================
       NAVIGATION
    ======================================== */

    const scrollToStories = () => {
        document
            .querySelector("#elias-stories")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };


    const scrollToContact = () => {
        document
            .querySelector("#elias-contact")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };


    return (
        <>
            {/* ====================================
          INTRO
      ==================================== */}

            <section
                className="intro-screen"
                ref={introRef}
                aria-hidden={introFinished}
            >
                <div className="intro-grain" />

                <div
                    className="intro-light intro-light-one"
                />

                <div
                    className="intro-light intro-light-two"
                />


                <div className="intro-content">
                    <img
                        src={logoImage}
                        alt="Élias Studio"
                        className="intro-logo"
                    />

                    <span className="intro-line" />

                    <p className="intro-subtitle">
                        Timeless wedding photography
                    </p>
                </div>
            </section>


            {/* ====================================
          HERO
      ==================================== */}

            <section
                className="hero-section"
                data-cursor-tone="light"
                ref={heroRef}
            >
                <video
                    ref={videoRef}
                    className="hero-video"
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                />


                <div
                    className="hero-overlay hero-overlay-main"
                />

                <div
                    className="hero-overlay hero-overlay-gradient"
                />

                <div className="hero-film-grain" />


                {/* HEADER */}

                <header className="hero-header">

                    <button
                        type="button"
                        className="header-logo-button"
                        aria-label="Retour en haut"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                    >
                        <img
                            src={logoImage}
                            alt="Élias Studio"
                            className="header-logo"
                        />
                    </button>


                    <nav className="desktop-navigation">

                        <button
                            type="button"
                            onClick={scrollToStories}
                        >
                            Portfolio
                        </button>

                        <button
                            type="button"
                            onClick={scrollToContact}
                        >
                            Experience
                        </button>

                        <button
                            type="button"
                            className="navigation-contact"
                            onClick={scrollToContact}
                        >
                            Contact
                        </button>

                    </nav>
                </header>


                {/* CONTENT */}

                <div className="hero-content">

                    <p className="hero-eyebrow">
                        Wedding photographer · Montréal
                    </p>


                    <h1 className="hero-title">

                        <span className="hero-title-mask">
                            <span className="hero-title-line">
                                Every love
                                <br />
                                story
                            </span>
                        </span>

                        <span className="hero-title-mask hero-title-mask-italic">
                            <span className="hero-title-line hero-title-italic">
                                deserves to be
                                <br />
                                remembered.
                            </span>
                        </span>

                    </h1>



                    <p className="hero-description">
                        Timeless wedding photography for
                        couples who want to relive every
                        glance, every emotion and every
                        unforgettable moment.
                    </p>


                    <div className="hero-actions">

                        <button
                            type="button"
                            className="primary-button"
                            onClick={scrollToContact}
                        >
                            <span>Reserve your date</span>

                            <span className="button-arrow">
                                ↗
                            </span>
                        </button>


                        <button
                            type="button"
                            className="text-button"
                            onClick={scrollToStories}
                        >
                            Explore our stories
                        </button>

                    </div>
                </div>


                {/* SCROLL */}

                <button
                    type="button"
                    className="hero-scroll"
                    onClick={scrollToStories}
                >
                    <span>Discover</span>

                    <span className="scroll-track">
                        <span className="scroll-progress" />
                    </span>
                </button>

            </section>
        </>
    );
}

export default EliasHero;
