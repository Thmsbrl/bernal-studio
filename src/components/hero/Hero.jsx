import {
    forwardRef,
    useEffect,
    useRef,
    useState,
} from "react";

import gsap from "gsap";

import "./Hero.css";


const translations = {
    en: {
        navWork: "Work",
        navAbout: "About",
        navContact: "Contact",

        menu: "Menu",
        close: "Close",

        cta: "Start a project",

        services:
            "Web design · Development · Creative direction",

        location: "Montréal — Canada",

        line1: "We create",
        line2: "Digital",
        line3: "Experiences.",

        selected: "Selected work",

        available: "Available for projects",
    },

    fr: {
        navWork: "Projets",
        navAbout: "À propos",
        navContact: "Contact",

        menu: "Menu",
        close: "Fermer",

        cta: "Parlons de votre projet",

        services:
            "Design web · Développement · Direction créative",

        location: "Montréal — Canada",

        line1: "Nous créons",
        line2: "Des expériences",
        line3: "digitales.",

        selected: "Projets sélectionnés",

        available: "Disponible pour vos projets",
    },
};


const Hero = forwardRef(function Hero(
    {
        language,
        onLanguageChange,
        contentRef,
    },
    ref
) {

    const heroInnerRef = useRef(null);

    const interactionRef = useRef(null);

    const lightRef = useRef(null);

    const lightGridRef = useRef(null);

    const previousLanguage =
        useRef(language);


    const [mobileMenuOpen, setMobileMenuOpen] =
        useState(false);


    const t = translations[language];


    /* =====================================
       NAVIGATION
    ===================================== */

    const scrollToSection = (id) => {

        setMobileMenuOpen(false);

        requestAnimationFrame(() => {

            document
                .getElementById(id)
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

        });

    };


    /* =====================================
       BLOCK BODY WHEN MENU IS OPEN
    ===================================== */

    useEffect(() => {

        if (!mobileMenuOpen) {
            return undefined;
        }

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow =
            "hidden";


        return () => {

            document.body.style.overflow =
                previousOverflow;

        };

    }, [mobileMenuOpen]);


    /* =====================================
       LANGUAGE TRANSITION
    ===================================== */

    useEffect(() => {

        if (
            previousLanguage.current ===
            language
        ) {
            return;
        }


        const ctx = gsap.context(() => {

            gsap.fromTo(
                ".hero-translatable",

                {
                    opacity: 0,
                    y: 8,
                },

                {
                    opacity: 1,
                    y: 0,

                    duration: 0.5,

                    stagger: 0.025,

                    ease: "power3.out",
                }
            );

        }, heroInnerRef);


        previousLanguage.current =
            language;


        return () => ctx.revert();

    }, [language]);


    /* =====================================
       DESKTOP INTERACTION SYSTEM
    ===================================== */

    useEffect(() => {

        const hero =
            interactionRef.current;

        const light =
            lightRef.current;

        const lightGrid =
            lightGridRef.current;


        if (
            !hero ||
            !light ||
            !lightGrid
        ) {
            return undefined;
        }


        const finePointer =
            window.matchMedia(
                "(pointer: fine)"
            );


        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            );


        if (!finePointer.matches) {
            return undefined;
        }


        const ctx = gsap.context(() => {

            /* =====================================
               HERO LIGHT
            ===================================== */

            const lightX =
                gsap.quickTo(
                    light,
                    "x",
                    {
                        duration: 0.85,
                        ease: "power3.out",
                    }
                );


            const lightY =
                gsap.quickTo(
                    light,
                    "y",
                    {
                        duration: 0.85,
                        ease: "power3.out",
                    }
                );


            const gridX =
                gsap.quickTo(
                    lightGrid,
                    "x",
                    {
                        duration: 0.7,
                        ease: "power3.out",
                    }
                );


            const gridY =
                gsap.quickTo(
                    lightGrid,
                    "y",
                    {
                        duration: 0.7,
                        ease: "power3.out",
                    }
                );


            /* =====================================
               STATEMENT PARALLAX
            ===================================== */

            const titleX =
                gsap.quickTo(
                    ".hero-statement",
                    "x",
                    {
                        duration: 1.1,
                        ease: "power3.out",
                    }
                );


            const titleY =
                gsap.quickTo(
                    ".hero-statement",
                    "y",
                    {
                        duration: 1.1,
                        ease: "power3.out",
                    }
                );


            /* =====================================
               INITIAL LIGHT POSITION
            ===================================== */

            const bounds =
                hero.getBoundingClientRect();


            const initialX =
                bounds.width / 2;

            const initialY =
                bounds.height / 2;


            gsap.set(
                [light, lightGrid],
                {
                    x: initialX,
                    y: initialY,
                }
            );


            /* =====================================
               EVENTS
            ===================================== */

            const handleEnter = () => {

                gsap.to(
                    [light, lightGrid],
                    {
                        opacity: 1,

                        duration: 0.55,

                        ease: "power2.out",
                    }
                );

            };


            const handleLeave = () => {

                gsap.to(
                    light,
                    {
                        opacity: 0.3,

                        duration: 0.7,
                    }
                );


                gsap.to(
                    lightGrid,
                    {
                        opacity: 0,

                        duration: 0.7,
                    }
                );


                if (
                    !reducedMotion.matches
                ) {

                    titleX(0);

                    titleY(0);

                }

            };


            const handleMove = (
                event
            ) => {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                lightX(x);

                lightY(y);

                gridX(x);

                gridY(y);


                if (
                    !reducedMotion.matches
                ) {

                    const normalizedX =
                        x / rect.width -
                        0.5;


                    const normalizedY =
                        y / rect.height -
                        0.5;


                    titleX(
                        normalizedX * 9
                    );


                    titleY(
                        normalizedY * 5
                    );

                }

            };


            hero.addEventListener(
                "mouseenter",
                handleEnter
            );


            hero.addEventListener(
                "mouseleave",
                handleLeave
            );


            hero.addEventListener(
                "mousemove",
                handleMove
            );


            return () => {

                hero.removeEventListener(
                    "mouseenter",
                    handleEnter
                );


                hero.removeEventListener(
                    "mouseleave",
                    handleLeave
                );


                hero.removeEventListener(
                    "mousemove",
                    handleMove
                );

            };

        }, hero);


        return () => ctx.revert();

    }, []);


    return (

        <section
            className="hero"

            ref={(node) => {

                interactionRef.current =
                    node;


                if (
                    typeof ref ===
                    "function"
                ) {

                    ref(node);

                } else if (ref) {

                    ref.current =
                        node;

                }

            }}
        >

            {/* =================================
                BACKGROUND
            ================================= */}

            <div className="hero-base-glow" />

            <div className="hero-grid" />


            <div
                className="hero-mouse-light"
                ref={lightRef}
            />


            <div
                className="hero-grid-reveal"
                ref={lightGridRef}
            />


            <div className="hero-noise" />


            {/* =================================
                CONTENT
            ================================= */}

            <div
                className="hero-content"
                ref={contentRef}
            >

                <div
                    className="hero-inner"
                    ref={heroInnerRef}
                >

                    {/* =================================
                        HEADER
                    ================================= */}

                    <header className="hero-header">

                        {/* BRAND */}

                        <button
                            type="button"

                            className="hero-brand"

                            aria-label="Bernal Studio"

                            data-cursor=""

                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }
                        >

                            <span className="hero-brand-mark">
                                BS
                            </span>


                            <span className="hero-brand-name">
                                Bernal Studio
                            </span>

                        </button>


                        {/* =================================
                            NAVIGATION
                        ================================= */}

                        <nav className="hero-navigation">

                            {/* PROJECTS */}

                            <button
                                type="button"

                                className="hero-nav-link hero-translatable"

                                data-cursor=""

                                onClick={() =>
                                    scrollToSection(
                                        "projects"
                                    )
                                }
                            >
                                {t.navWork}
                            </button>


                            {/* ABOUT */}

                            <button
                                type="button"

                                className="hero-nav-link hero-translatable"

                                data-cursor=""

                                onClick={() =>
                                    scrollToSection(
                                        "about"
                                    )
                                }
                            >
                                {t.navAbout}
                            </button>


                            {/* CONTACT */}

                            <button
                                type="button"

                                className="hero-nav-link hero-translatable"

                                data-cursor=""

                                onClick={() =>
                                    scrollToSection(
                                        "contact"
                                    )
                                }
                            >
                                {t.navContact}
                            </button>


                            {/* LANGUAGE */}

                            <div className="hero-language">

                                <button
                                    type="button"

                                    className={
                                        language ===
                                            "fr"
                                            ? "active"
                                            : ""
                                    }

                                    onClick={() =>
                                        onLanguageChange(
                                            "fr"
                                        )
                                    }

                                    data-cursor=""
                                >
                                    FR
                                </button>


                                <span>
                                    /
                                </span>


                                <button
                                    type="button"

                                    className={
                                        language ===
                                            "en"
                                            ? "active"
                                            : ""
                                    }

                                    onClick={() =>
                                        onLanguageChange(
                                            "en"
                                        )
                                    }

                                    data-cursor=""
                                >
                                    EN
                                </button>

                            </div>


                            {/* =================================
                                MOBILE MENU BUTTON
                            ================================= */}

                            <button
                                type="button"

                                className="hero-menu-toggle"

                                onClick={() =>
                                    setMobileMenuOpen(
                                        true
                                    )
                                }

                                aria-label={
                                    t.menu
                                }

                                aria-expanded={
                                    mobileMenuOpen
                                }
                            >

                                <span>
                                    {t.menu}
                                </span>


                                <span className="hero-menu-icon">

                                    <i />

                                    <i />

                                </span>

                            </button>


                            {/* =================================
                                DESKTOP CTA
                            ================================= */}

                            <button
                                type="button"

                                className="hero-contact hero-translatable"

                                data-cursor="GO"

                                onClick={() =>
                                    scrollToSection(
                                        "contact"
                                    )
                                }
                            >

                                <span>
                                    {t.cta}
                                </span>


                                <span className="hero-contact-arrow">
                                    ↗
                                </span>

                            </button>

                        </nav>

                    </header>


                    {/* =================================
                        META
                    ================================= */}

                    <div className="hero-meta">

                        <p className="hero-services hero-translatable">
                            {t.services}
                        </p>


                        <p className="hero-location">
                            {t.location}
                        </p>

                    </div>


                    {/* =================================
                        TYPOGRAPHY
                    ================================= */}

                    <div
                        className={
                            `hero-statement hero-statement-${language}`
                        }
                    >

                        <div className="hero-title-mask">

                            <span className="hero-title-line hero-title-first hero-translatable">
                                {t.line1}
                            </span>

                        </div>


                        <div className="hero-title-mask">

                            <span className="hero-title-line hero-title-second hero-translatable">
                                {t.line2}
                            </span>

                        </div>


                        <div className="hero-title-mask hero-title-mask-last">

                            <span className="hero-title-line hero-title-third hero-translatable">
                                {t.line3}
                            </span>

                        </div>

                    </div>
                    {/* =================================
                        BOTTOM
                    ================================= */}

                    <div className="hero-bottom">

                        <button
                            type="button"
                            className="hero-selected hero-translatable"
                            data-cursor={
                                language === "fr"
                                    ? "VOIR"
                                    : "VIEW"
                            }
                            onClick={() =>
                                scrollToSection("projects")
                            }
                        >
                            <span>
                                {t.selected}
                            </span>

                            <span className="hero-selected-line">
                                <span />
                            </span>

                            <span className="hero-selected-arrow">
                                ↓
                            </span>
                        </button>


                        <div className="hero-availability">

                            <span className="availability-dot" />

                            <span className="hero-translatable">
                                {t.available}
                            </span>

                        </div>


                        <span className="hero-index">
                            © 2026
                        </span>

                    </div>

                </div>

            </div>


            {/* =================================
                MOBILE FULLSCREEN MENU
            ================================= */}

            <div
                className={`hero-mobile-menu ${mobileMenuOpen
                        ? "is-open"
                        : ""
                    }`}
                aria-hidden={!mobileMenuOpen}
            >

                {/* =================================
                    MENU TOP
                ================================= */}

                <div className="hero-mobile-menu-top">

                    <div className="hero-mobile-menu-brand">

                        <span>
                            BS
                        </span>

                        <span>
                            BERNAL STUDIO®
                        </span>

                    </div>


                    <button
                        type="button"
                        className="hero-mobile-menu-close"
                        onClick={() =>
                            setMobileMenuOpen(false)
                        }
                        aria-label={t.close}
                    >
                        <span>
                            {t.close}
                        </span>

                        <span>
                            ×
                        </span>
                    </button>

                </div>


                {/* =================================
                    MENU NAVIGATION
                ================================= */}

                <nav className="hero-mobile-menu-nav">

                    {/* PROJECTS */}

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("projects")
                        }
                    >
                        <span>
                            01
                        </span>

                        <strong>
                            {t.navWork}
                        </strong>

                        <span>
                            ↘
                        </span>
                    </button>


                    {/* ABOUT */}

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("about")
                        }
                    >
                        <span>
                            02
                        </span>

                        <strong>
                            {t.navAbout}
                        </strong>

                        <span>
                            ↘
                        </span>
                    </button>


                    {/* CONTACT */}

                    <button
                        type="button"
                        onClick={() =>
                            scrollToSection("contact")
                        }
                    >
                        <span>
                            03
                        </span>

                        <strong>
                            {t.navContact}
                        </strong>

                        <span>
                            ↘
                        </span>
                    </button>

                </nav>


                {/* =================================
                    MOBILE CTA
                ================================= */}

                <button
                    type="button"
                    className="hero-mobile-menu-cta"
                    onClick={() =>
                        scrollToSection("contact")
                    }
                >
                    <span>
                        {t.cta}
                    </span>

                    <span className="hero-mobile-menu-cta-arrow">
                        ↗
                    </span>
                </button>


                {/* =================================
                    MENU BOTTOM
                ================================= */}

                <div className="hero-mobile-menu-bottom">

                    <span>
                        MONTRÉAL — CANADA
                    </span>

                    <span>
                        © 2026
                    </span>

                </div>

            </div>

        </section>
    );
});


export default Hero;
