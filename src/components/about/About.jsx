import { useState } from "react";
import "./About.css";

const content = {
  fr: {
    label: "À PROPOS / PROCESSUS",

    title1: "NOUS CRÉONS",
    title2: "DES EXPÉRIENCES",
    title3: "DIGITALES.",

    intro:
      "Bernal Studio est un studio web indépendant basé à Montréal.",

    text:
      "Nous imaginons et développons des expériences digitales sur mesure, pensées pour donner à chaque marque une présence unique, forte et mémorable.",

    location: "MONTRÉAL — DISPONIBLE À L'INTERNATIONAL",

    expertiseLabel: "NOTRE PROCESSUS",

    services: [
      {
        number: "01",
        title: "ON",
        outline: "ÉCHANGE",
        details: "VOTRE ACTIVITÉ / VOS OBJECTIFS / VOS BESOINS",

        expanded: [
          {
            number: "01",
            title: "VOTRE ACTIVITÉ",
            text:
              "Nous commençons par comprendre votre activité, votre univers et ce qui vous différencie.",
          },
          {
            number: "02",
            title: "VOS OBJECTIFS",
            text:
              "Nous définissons ensemble ce que votre site doit accomplir et l'expérience que vous souhaitez proposer.",
          },
          {
            number: "03",
            title: "LE PROJET",
            text:
              "Contenus, fonctionnalités et direction générale sont définis avant de commencer la création.",
          },
        ],
      },

      {
        number: "02",
        title: "NOUS",
        outline: "CRÉONS",
        details: "DIRECTION / DESIGN / DÉVELOPPEMENT",

        expanded: [
          {
            number: "01",
            title: "DIRECTION",
            text:
              "Nous construisons une direction visuelle cohérente avec votre identité et votre positionnement.",
          },
          {
            number: "02",
            title: "DESIGN",
            text:
              "Chaque page est pensée pour être claire, responsive et créer une expérience visuelle forte.",
          },
          {
            number: "03",
            title: "DÉVELOPPEMENT",
            text:
              "Nous développons le site sur mesure avec ses animations, interactions et fonctionnalités.",
          },
        ],
      },

      {
        number: "03",
        title: "VOUS",
        outline: "VALIDEZ",
        details: "PRÉSENTATION / RETOURS / AJUSTEMENTS / MISE EN LIGNE",

        expanded: [
          {
            number: "01",
            title: "PRÉSENTATION",
            text:
              "Nous vous présentons le projet afin que vous puissiez découvrir et tester l'expérience.",
          },
          {
            number: "02",
            title: "AJUSTEMENTS",
            text:
              "Nous recueillons vos retours et effectuons les ajustements nécessaires jusqu'à validation.",
          },
          {
            number: "03",
            title: "MISE EN LIGNE",
            text:
              "Une fois le projet finalisé, nous pouvons également nous charger de la mise en ligne et de sa configuration.",
          },
        ],
      },
    ],
  },

  en: {
    label: "ABOUT / PROCESS",

    title1: "WE CREATE",
    title2: "DIGITAL",
    title3: "EXPERIENCES.",

    intro:
      "Bernal Studio is an independent web studio based in Montreal.",

    text:
      "We design and develop custom digital experiences built to give every brand a unique, strong and memorable presence.",

    location: "MONTREAL — AVAILABLE WORLDWIDE",

    expertiseLabel: "OUR PROCESS",

    services: [
      {
        number: "01",
        title: "WE",
        outline: "TALK",
        details: "YOUR BUSINESS / YOUR GOALS / YOUR NEEDS",

        expanded: [
          {
            number: "01",
            title: "YOUR BUSINESS",
            text:
              "We start by understanding your business, your identity and what makes your brand different.",
          },
          {
            number: "02",
            title: "YOUR GOALS",
            text:
              "Together, we define what your website needs to achieve and the experience you want to create.",
          },
          {
            number: "03",
            title: "THE PROJECT",
            text:
              "Content, functionality and the overall direction are defined before the creative process begins.",
          },
        ],
      },

      {
        number: "02",
        title: "WE",
        outline: "CREATE",
        details: "DIRECTION / DESIGN / DEVELOPMENT",

        expanded: [
          {
            number: "01",
            title: "DIRECTION",
            text:
              "We build a visual direction aligned with your identity and positioning.",
          },
          {
            number: "02",
            title: "DESIGN",
            text:
              "Every page is designed to be clear, responsive and deliver a strong visual experience.",
          },
          {
            number: "03",
            title: "DEVELOPMENT",
            text:
              "We develop your website with custom interactions, animations and functionality.",
          },
        ],
      },

      {
        number: "03",
        title: "YOU",
        outline: "APPROVE",
        details: "PRESENTATION / FEEDBACK / REFINEMENTS / LAUNCH",

        expanded: [
          {
            number: "01",
            title: "PRESENTATION",
            text:
              "We present the project so you can explore, experience and test the website.",
          },
          {
            number: "02",
            title: "REFINEMENTS",
            text:
              "We collect your feedback and make the necessary refinements until everything is approved.",
          },
          {
            number: "03",
            title: "LAUNCH",
            text:
              "Once the project is finalized, we can also handle the launch and technical setup of your website.",
          },
        ],
      },
    ],
  },
};


function About({ language = "fr" }) {
  const t = content[language] || content.fr;

  const [openService, setOpenService] = useState(null);

  const toggleService = (number) => {
    setOpenService((current) =>
      current === number ? null : number
    );
  };

  return (
    <section className="about" id="about">

      {/* ========================================
          TOP META
      ======================================== */}

      <div className="about__meta">
        <div className="about__meta-left">
          <span>03</span>
          <span className="about__meta-line" />
          <span>{t.label}</span>
        </div>

        <span className="about__meta-right">
          BERNAL STUDIO®
        </span>
      </div>


      {/* ========================================
          STATEMENT
      ======================================== */}

      <div className="about__statement">

        <div className="about__title">
          <h2>
            <span className="about__title-small">
              {t.title1}
            </span>

            <span className="about__title-solid">
              {t.title2}
            </span>

            <span className="about__title-outline">
              {t.title3}
            </span>
          </h2>
        </div>


        <div className="about__description">

          <span className="about__description-index">
            [ ABOUT ]
          </span>

          <p className="about__description-intro">
            {t.intro}
          </p>

          <p>
            {t.text}
          </p>

          <span className="about__location">
            {t.location}
          </span>

        </div>

      </div>


      {/* ========================================
          PROCESS HEADER
      ======================================== */}

      <div className="about__expertise-header">
        <span>{t.expertiseLabel}</span>
        <span>01 — 03</span>
      </div>


      {/* ========================================
          PROCESS
      ======================================== */}

      <div className="about__services">

        {t.services.map((service) => {
          const isOpen =
            openService === service.number;

          return (
            <div
              className={`about__service-wrapper ${
                isOpen ? "is-open" : ""
              }`}
              key={service.number}
            >

              {/* MAIN LINE */}

              <button
                type="button"
                className="about__service"
                onClick={() =>
                  toggleService(service.number)
                }
                aria-expanded={isOpen}
              >

                <div className="about__service-number">
                  {service.number}
                </div>


                <div className="about__service-name">

                  <span className="about__service-solid">
                    {service.title}
                  </span>

                  <span className="about__service-outline">
                    {service.outline}
                  </span>

                </div>


                <div className="about__service-details">
                  {service.details}
                </div>


                <div className="about__service-arrow">
                  ↗
                </div>

              </button>


              {/* EXPANDED CONTENT */}

              <div className="about__service-expand">

                <div className="about__service-expand-inner">

                  {service.expanded.map((item) => (
                    <div
                      className="about__process-item"
                      key={item.number}
                    >

                      <span className="about__process-number">
                        {item.number}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}


export default About;
