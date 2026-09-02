import { useEffect, useRef, useState } from "react";

import consultationImage from "../../../assets/prana/images/consultation-prana.jpg";
import studioImage from "../../../assets/prana/images/studio-prana.jpg";
import precisionImage from "../../../assets/prana/images/precision-prana.jpg";

const experienceSteps = [
  {
    number: "01",
    title: "Consultation",
    text: (
      <>
        Chaque projet commence par une conversation.
        Vos idées, vos inspirations et votre histoire
        donnent naissance à une pièce qui vous ressemble.
      </>
    ),
    image: consultationImage,
    alt: "Consultation artistique chez Prana Tattoo",
  },
  {
    number: "02",
    title: "Intimité",
    text: (
      <>
        Un espace calme et soigneusement pensé,
        où chaque séance devient un moment à part.
      </>
    ),
    image: studioImage,
    alt: "Studio Prana Tattoo",
  },
  {
    number: "03",
    title: "Précision",
    text: (
      <>
        Du premier trait au dernier détail,
        chaque geste est guidé par la maîtrise,
        la composition et l'exigence.
      </>
    ),
    image: precisionImage,
    alt: "Tatouage réalisé avec précision",
  },
];

function PranaExperience() {
  const scrollRef = useRef(null);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const experienceSection = scrollRef.current;

    if (!experienceSection) return;

    const updateExperience = () => {
      const rect =
        experienceSection.getBoundingClientRect();

      const scrollableDistance =
        experienceSection.offsetHeight -
        window.innerHeight;

      if (scrollableDistance <= 0) return;

      const progress = Math.min(
        Math.max(
          -rect.top / scrollableDistance,
          0
        ),
        1
      );

      let step = Math.floor(
        progress * experienceSteps.length
      );

      step = Math.min(
        step,
        experienceSteps.length - 1
      );

      setActiveStep((current) =>
        current === step ? current : step
      );
    };

    updateExperience();

    window.addEventListener(
      "scroll",
      updateExperience,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateExperience
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateExperience
      );

      window.removeEventListener(
        "resize",
        updateExperience
      );
    };
  }, []);

  return (
    <section
      className="prana-experience"
      id="experience"
    >
      <div className="experience-intro">
        <span className="section-label">
          L'expérience Prana
        </span>

        <h2>
          <span>Un studio pensé</span>
          <span>pour créer plus</span>
          <span>qu'un tatouage.</span>
        </h2>
      </div>

      <div
        className="experience-scroll"
        ref={scrollRef}
      >
        <div className="experience-sticky">

          <div className="experience-visual">

            {experienceSteps.map(
              (step, index) => (
                <img
                  key={step.number}
                  src={step.image}
                  alt={step.alt}
                  className={
                    `experience-image ${
                      activeStep === index
                        ? "active"
                        : ""
                    }`
                  }
                />
              )
            )}

            <div className="image-overlay" />

            <div className="experience-counter">
              <span className="current-number">
                {experienceSteps[activeStep].number}
              </span>

              <span className="counter-line" />

              <span>
                {String(
                  experienceSteps.length
                ).padStart(2, "0")}
              </span>
            </div>

          </div>

          <div className="experience-content">

            {experienceSteps.map(
              (step, index) => (
                <article
                  key={step.number}
                  className={
                    `experience-item ${
                      activeStep === index
                        ? "active"
                        : ""
                    }`
                  }
                >
                  <span className="experience-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              )
            )}

          </div>
        </div>

        {experienceSteps.map((step) => (
          <div
            key={step.number}
            className="experience-trigger"
          />
        ))}
      </div>
    </section>
  );
}

export default PranaExperience;
