import {
    useMemo,
    useState,
} from "react";

import "./Contact.css";


const content = {
    fr: {
        meta: "CONTACT / DÉMARRER UN PROJET",

        heroLabel: "04 — CONTACT",
        title1: "UN PROJET",
        title2: "EN TÊTE ?",
        title3: "PARLONS-EN.",

        intro:
            "Parlez-nous de votre projet. Quelques informations suffisent pour nous permettre de comprendre vos besoins et revenir vers vous avec une première direction.",

        directionLabel: "01 / PREMIÈRE DIRECTION OFFERTE",
        directionTitle:
            "VOYEZ CE QUE VOTRE PROJET POURRAIT DEVENIR.",
        directionText:
            "Découvrez votre projet avant de vous engager. Nous pouvons réaliser une première maquette visuelle gratuitement et sans engagement, afin de vous permettre de découvrir notre approche avant de démarrer.",

        progress: [
            "VOTRE PROJET",
            "VOS BESOINS",
            "VOS COORDONNÉES",
        ],

        steps: {
            project: {
                label: "01 / VOTRE PROJET",
                title: "QUE SOUHAITEZ-VOUS CRÉER ?",

                projectTypes: [
                    "SITE VITRINE",
                    "E-COMMERCE",
                    "LANDING PAGE",
                    "PORTFOLIO",
                    "REFONTE",
                    "AUTRE",
                ],

                businessLabel:
                    "NOM DE VOTRE ENTREPRISE / MARQUE",
                businessPlaceholder: "BERNAL STUDIO",

                websiteLabel:
                    "SITE OU INSTAGRAM ACTUEL — OPTIONNEL",
                websitePlaceholder: "https://...",

                descriptionLabel:
                    "PARLEZ-NOUS DE VOTRE PROJET",
                descriptionPlaceholder:
                    "Votre activité, votre idée, ce que vous aimeriez créer...",

                objectiveLabel:
                    "QUEL EST L'OBJECTIF PRINCIPAL DU SITE ?",

                objectives: [
                    "PRÉSENTER MON ACTIVITÉ",
                    "GÉNÉRER DES DEMANDES",
                    "VENDRE EN LIGNE",
                    "PRENDRE DES RENDEZ-VOUS",
                    "PRÉSENTER MON TRAVAIL",
                    "AUTRE",
                ],
            },

            needs: {
                label: "02 / VOS BESOINS",
                title: "PARLONS DE VOS BESOINS.",

                servicesLabel:
                    "DE QUOI AVEZ-VOUS BESOIN ?",

                services: [
                    "DESIGN",
                    "DÉVELOPPEMENT",
                    "REFONTE",
                    "E-COMMERCE",
                    "ANIMATIONS",
                    "RÉSERVATION / RENDEZ-VOUS",
                    "JE NE SAIS PAS ENCORE",
                ],

                contentLabel:
                    "AVEZ-VOUS DÉJÀ VOS CONTENUS ?",

                contentOptions: [
                    "OUI",
                    "EN PARTIE",
                    "NON",
                ],

                budgetLabel: "BUDGET ENVISAGÉ",

                budgets: [
                    "MOINS DE 1 000 $",
                    "1 000 — 2 000 $",
                    "2 000 — 4 000 $",
                    "4 000 $ +",
                    "À DÉFINIR ENSEMBLE",
                ],

                timelineLabel:
                    "QUAND SOUHAITEZ-VOUS LANCER LE PROJET ?",

                timelines: [
                    "DÈS QUE POSSIBLE",
                    "DANS 1 MOIS",
                    "1 — 3 MOIS",
                    "3 MOIS +",
                    "FLEXIBLE",
                ],

                extraLabel:
                    "AUTRE CHOSE À NOUS PRÉCISER — OPTIONNEL",
                extraPlaceholder:
                    "Contraintes, fonctionnalités particulières, références, idées...",
            },

            contact: {
                label: "03 / VOS COORDONNÉES",
                title:
                    "COMMENT POUVONS-NOUS VOUS RECONTACTER ?",

                firstNameLabel: "PRÉNOM",
                firstNamePlaceholder: "",

                lastNameLabel: "NOM",
                lastNamePlaceholder: "",

                emailLabel: "E-MAIL",
                emailPlaceholder: "hello@entreprise.com",

                phoneLabel: "TÉLÉPHONE — OPTIONNEL",
                phonePlaceholder: "+1 ...",

                submit: "ENVOYER MA DEMANDE",
            },
        },

        continue: "CONTINUER",
        back: "RETOUR",

        required:
            "Veuillez compléter les informations nécessaires avant de continuer.",

        emailError:
            "Veuillez entrer une adresse e-mail valide.",

        footerLocation:
            "MONTRÉAL — DISPONIBLE À L'INTERNATIONAL",

        footerMessage:
            "UN PROJET ? PARLONS-EN.",
    },


    en: {
        meta: "CONTACT / START A PROJECT",

        heroLabel: "04 — CONTACT",
        title1: "A PROJECT",
        title2: "IN MIND?",
        title3: "LET'S TALK.",

        intro:
            "Tell us about your project. A few details are enough for us to understand your needs and come back to you with an initial direction.",

        directionLabel:
            "01 / FIRST DIRECTION ON US",
        directionTitle:
            "SEE WHAT YOUR PROJECT COULD BECOME.",
        directionText:
            "For selected projects, we can create an initial visual direction with no commitment, allowing you to discover our approach before getting started.",

        progress: [
            "YOUR PROJECT",
            "YOUR NEEDS",
            "YOUR DETAILS",
        ],

        steps: {
            project: {
                label: "01 / YOUR PROJECT",
                title:
                    "WHAT WOULD YOU LIKE TO CREATE?",

                projectTypes: [
                    "BUSINESS WEBSITE",
                    "E-COMMERCE",
                    "LANDING PAGE",
                    "PORTFOLIO",
                    "REDESIGN",
                    "OTHER",
                ],

                businessLabel:
                    "BUSINESS / BRAND NAME",
                businessPlaceholder: "BERNAL STUDIO",

                websiteLabel:
                    "CURRENT WEBSITE OR INSTAGRAM — OPTIONAL",
                websitePlaceholder: "https://...",

                descriptionLabel:
                    "TELL US ABOUT YOUR PROJECT",
                descriptionPlaceholder:
                    "Your business, your idea, what you would like to create...",

                objectiveLabel:
                    "WHAT IS THE MAIN GOAL OF THE WEBSITE?",

                objectives: [
                    "PRESENT MY BUSINESS",
                    "GENERATE LEADS",
                    "SELL ONLINE",
                    "BOOK APPOINTMENTS",
                    "SHOWCASE MY WORK",
                    "OTHER",
                ],
            },

            needs: {
                label: "02 / YOUR NEEDS",
                title:
                    "LET'S TALK ABOUT YOUR NEEDS.",

                servicesLabel:
                    "WHAT DO YOU NEED?",

                services: [
                    "DESIGN",
                    "DEVELOPMENT",
                    "REDESIGN",
                    "E-COMMERCE",
                    "ANIMATIONS",
                    "BOOKING / APPOINTMENTS",
                    "I'M NOT SURE YET",
                ],

                contentLabel:
                    "DO YOU ALREADY HAVE YOUR CONTENT?",

                contentOptions: [
                    "YES",
                    "PARTIALLY",
                    "NO",
                ],

                budgetLabel:
                    "ESTIMATED BUDGET",

                budgets: [
                    "UNDER $1,000",
                    "$1,000 — $2,000",
                    "$2,000 — $4,000",
                    "$4,000 +",
                    "LET'S DEFINE IT TOGETHER",
                ],

                timelineLabel:
                    "WHEN WOULD YOU LIKE TO LAUNCH?",

                timelines: [
                    "AS SOON AS POSSIBLE",
                    "WITHIN 1 MONTH",
                    "1 — 3 MONTHS",
                    "3+ MONTHS",
                    "FLEXIBLE",
                ],

                extraLabel:
                    "ANYTHING ELSE WE SHOULD KNOW — OPTIONAL",
                extraPlaceholder:
                    "Constraints, specific features, references, ideas...",
            },

            contact: {
                label: "03 / YOUR DETAILS",
                title:
                    "HOW CAN WE REACH YOU?",

                firstNameLabel: "FIRST NAME",
                firstNamePlaceholder: "THOMAS",

                lastNameLabel: "LAST NAME",
                lastNamePlaceholder: "BERNAL",

                emailLabel: "EMAIL",
                emailPlaceholder: "hello@company.com",

                phoneLabel: "PHONE — OPTIONAL",
                phonePlaceholder: "+1 ...",

                submit: "SEND MY REQUEST",
            },
        },

        continue: "CONTINUE",
        back: "BACK",

        required:
            "Please complete the required information before continuing.",

        emailError:
            "Please enter a valid email address.",

        footerLocation:
            "MONTREAL — AVAILABLE WORLDWIDE",

        footerMessage:
            "HAVE A PROJECT? LET'S TALK.",
    },
};

function Contact({ language = "fr" }) {
    const t = content[language] || content.fr;

    const [step, setStep] = useState(1);
    const [showErrors, setShowErrors] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    const [formData, setFormData] = useState({
        projectType: "",
        businessName: "",
        website: "",
        description: "",
        objective: "",

        services: [],
        contentStatus: "",
        budget: "",
        timeline: "",
        extra: "",

        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });


    /* ========================================
       GENERIC FIELD UPDATE
    ======================================== */

    const updateField = (field, value) => {
        setFormData((current) => ({
            ...current,
            [field]: value,
        }));
    };


    /* ========================================
       MULTI SELECT SERVICES
    ======================================== */

    const toggleService = (service) => {
        setFormData((current) => {
            const exists =
                current.services.includes(service);

            return {
                ...current,

                services: exists
                    ? current.services.filter(
                        (item) => item !== service
                    )
                    : [...current.services, service],
            };
        });
    };


    /* ========================================
       EMAIL VALIDATION
    ======================================== */

    const emailIsValid = useMemo(() => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            formData.email.trim()
        );
    }, [formData.email]);


    /* ========================================
       STEP VALIDATION
    ======================================== */

    const step1Valid =
        formData.projectType !== "" &&
        formData.businessName.trim() !== "" &&
        formData.description.trim() !== "" &&
        formData.objective !== "";


    const step2Valid =
        formData.contentStatus !== "" &&
        formData.budget !== "" &&
        formData.timeline !== "";


    const step3Valid =
        formData.firstName.trim() !== "" &&
        formData.lastName.trim() !== "" &&
        formData.email.trim() !== "" &&
        emailIsValid;


    const currentStepValid =
        step === 1
            ? step1Valid
            : step === 2
                ? step2Valid
                : step3Valid;


    /* ========================================
       NEXT STEP
    ======================================== */

    const nextStep = () => {
        if (!currentStepValid) {
            setShowErrors(true);
            return;
        }

        setShowErrors(false);

        setStep((current) =>
            Math.min(current + 1, 3)
        );
    };


    /* ========================================
       PREVIOUS STEP
    ======================================== */

    const previousStep = () => {
        setShowErrors(false);

        setStep((current) =>
            Math.max(current - 1, 1)
        );
    };


    /* ========================================
       SUBMIT
    ======================================== */
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!step3Valid) {
            setShowErrors(true);
            return;
        }

        setShowErrors(false);
        setIsSubmitting(true);
        setSubmitStatus("");

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },

                    body: JSON.stringify({
                        access_key:
                            "48c4920a-ecce-47c2-8ae1-d9f39e04bcf9",

                        subject:
                            `Nouvelle demande — ${formData.businessName}`,

                        from_name:
                            "Bernal Studio — Site web",

                        project_type:
                            formData.projectType,

                        business_name:
                            formData.businessName,

                        website_or_instagram:
                            formData.website || "Non renseigné",

                        project_description:
                            formData.description,

                        main_objective:
                            formData.objective,

                        content_status:
                            formData.contentStatus,

                        budget:
                            formData.budget,

                        timeline:
                            formData.timeline,

                        additional_information:
                            formData.extra || "Aucune",

                        first_name:
                            formData.firstName,

                        last_name:
                            formData.lastName,

                        email:
                            formData.email,

                        phone:
                            formData.phone || "Non renseigné",
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message ||
                    "Impossible d'envoyer le formulaire."
                );
            }

            setSubmitStatus("success");

        } catch (error) {
            console.error(
                "BERNAL STUDIO — FORM ERROR:",
                error
            );

            setSubmitStatus("error");

        } finally {
            setIsSubmitting(false);
        }
    };


    /* ========================================
       COMPONENT
    ======================================== */

    return (
        <section
            className="contact"
            id="contact"
        >

            {/* =====================================
          META
      ===================================== */}

            <div className="contact__meta">

                <div className="contact__meta-left">
                    <span>04</span>

                    <span className="contact__meta-line" />

                    <span>{t.meta}</span>
                </div>

                <span className="contact__meta-right">
                    BERNAL STUDIO®
                </span>

            </div>


            {/* =====================================
          HERO
      ===================================== */}

            <div className="contact__hero">

                <div className="contact__hero-title">

                    <span className="contact__hero-index">
                        {t.heroLabel}
                    </span>

                    <h2>

                        <span className="contact__title-small">
                            {t.title1}
                        </span>

                        <span className="contact__title-solid">
                            {t.title2}
                        </span>

                        <span className="contact__title-outline">
                            {t.title3}
                        </span>

                    </h2>

                </div>


                <p className="contact__hero-text">
                    {t.intro}
                </p>

            </div>


            {/* =====================================
          FIRST DIRECTION
      ===================================== */}

            <div className="contact__direction">

                <span className="contact__direction-label">
                    {t.directionLabel}
                </span>

                <h3 className="contact__direction-title">
                    {t.directionTitle}
                </h3>

                <p className="contact__direction-text">
                    {t.directionText}
                </p>

            </div>


            {/* =====================================
          FORM
      ===================================== */}

            <form
                className="contact__form-area"
                onSubmit={handleSubmit}
                noValidate
            >

                {/* =================================
            PROGRESS
        ================================= */}

                <div className="contact__progress">

                    {t.progress.map((item, index) => {
                        const itemStep = index + 1;

                        return (
                            <div
                                key={item}
                                className={`contact__progress-item ${step === itemStep
                                    ? "is-active"
                                    : ""
                                    }`}
                            >

                                <span className="contact__progress-number">
                                    0{itemStep}
                                </span>

                                <span>
                                    {item}
                                </span>

                            </div>
                        );
                    })}

                </div>
                {/* =================================
            STEP 01 — VOTRE PROJET
        ================================= */}

                {step === 1 && (
                    <div className="contact__step">

                        <span className="contact__step-label">
                            {t.steps.project.label}
                        </span>

                        <h3 className="contact__step-title">
                            {t.steps.project.title}
                        </h3>


                        {/* TYPE DE PROJET */}

                        <div className="contact__options">

                            {t.steps.project.projectTypes.map(
                                (type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        className={`contact__option ${formData.projectType === type
                                            ? "is-selected"
                                            : ""
                                            }`}
                                        onClick={() =>
                                            updateField(
                                                "projectType",
                                                type
                                            )
                                        }
                                    >
                                        <span>{type}</span>

                                        <span className="contact__option-symbol">
                                            {formData.projectType === type
                                                ? "−"
                                                : "+"}
                                        </span>
                                    </button>
                                )
                            )}

                        </div>


                        {/* ENTREPRISE + SITE */}

                        <div className="contact__fields">

                            <div className="contact__field">

                                <label>
                                    {t.steps.project.businessLabel} *
                                </label>

                                <input
                                    type="text"
                                    value={formData.businessName}
                                    placeholder={
                                        t.steps.project.businessPlaceholder
                                    }
                                    onChange={(event) =>
                                        updateField(
                                            "businessName",
                                            event.target.value
                                        )
                                    }
                                />

                            </div>


                            <div className="contact__field">

                                <label>
                                    {t.steps.project.websiteLabel}
                                </label>

                                <input
                                    type="text"
                                    value={formData.website}
                                    placeholder={
                                        t.steps.project.websitePlaceholder
                                    }
                                    onChange={(event) =>
                                        updateField(
                                            "website",
                                            event.target.value
                                        )
                                    }
                                />

                            </div>

                        </div>


                        {/* DESCRIPTION */}

                        <div className="contact__field contact__field--full">

                            <label>
                                {t.steps.project.descriptionLabel} *
                            </label>

                            <textarea
                                rows="4"
                                value={formData.description}
                                placeholder={
                                    t.steps.project.descriptionPlaceholder
                                }
                                onChange={(event) =>
                                    updateField(
                                        "description",
                                        event.target.value
                                    )
                                }
                            />

                        </div>


                        {/* OBJECTIF */}

                        <div className="contact__question">

                            <span className="contact__question-label">
                                {t.steps.project.objectiveLabel} *
                            </span>

                            <div className="contact__choices">

                                {t.steps.project.objectives.map(
                                    (objective) => (
                                        <button
                                            key={objective}
                                            type="button"
                                            className={`contact__choice ${formData.objective === objective
                                                ? "is-selected"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                updateField(
                                                    "objective",
                                                    objective
                                                )
                                            }
                                        >
                                            {objective}
                                        </button>
                                    )
                                )}

                            </div>

                        </div>

                    </div>
                )}


                {/* =================================
            STEP 02 — VOS BESOINS
        ================================= */}

                {step === 2 && (
                    <div className="contact__step">

                        <span className="contact__step-label">
                            {t.steps.needs.label}
                        </span>

                        <h3 className="contact__step-title">
                            {t.steps.needs.title}
                        </h3>


                        {/* CONTENUS */}

                        <div className="contact__question">

                            <span className="contact__question-label">
                                {t.steps.needs.contentLabel} *
                            </span>

                            <div className="contact__choices">

                                {t.steps.needs.contentOptions.map(
                                    (option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            className={`contact__choice ${formData.contentStatus === option
                                                ? "is-selected"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                updateField(
                                                    "contentStatus",
                                                    option
                                                )
                                            }
                                        >
                                            {option}
                                        </button>
                                    )
                                )}

                            </div>

                        </div>


                        {/* BUDGET */}

                        <div className="contact__question">

                            <span className="contact__question-label">
                                {t.steps.needs.budgetLabel} *
                            </span>

                            <div className="contact__choices">

                                {t.steps.needs.budgets.map(
                                    (budget) => (
                                        <button
                                            key={budget}
                                            type="button"
                                            className={`contact__choice ${formData.budget === budget
                                                ? "is-selected"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                updateField(
                                                    "budget",
                                                    budget
                                                )
                                            }
                                        >
                                            {budget}
                                        </button>
                                    )
                                )}

                            </div>

                        </div>


                        {/* DÉLAI */}

                        <div className="contact__question">

                            <span className="contact__question-label">
                                {t.steps.needs.timelineLabel} *
                            </span>

                            <div className="contact__choices">

                                {t.steps.needs.timelines.map(
                                    (timeline) => (
                                        <button
                                            key={timeline}
                                            type="button"
                                            className={`contact__choice ${formData.timeline === timeline
                                                ? "is-selected"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                updateField(
                                                    "timeline",
                                                    timeline
                                                )
                                            }
                                        >
                                            {timeline}
                                        </button>
                                    )
                                )}

                            </div>

                        </div>


                        {/* INFORMATIONS SUPPLÉMENTAIRES */}

                        <div className="contact__field contact__field--full">

                            <label>
                                {t.steps.needs.extraLabel}
                            </label>

                            <textarea
                                rows="4"
                                value={formData.extra}
                                placeholder={
                                    t.steps.needs.extraPlaceholder
                                }
                                onChange={(event) =>
                                    updateField(
                                        "extra",
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </div>
                )}
                {/* =================================
            STEP 03 — VOS COORDONNÉES
        ================================= */}

                {step === 3 && (
                    <div className="contact__step">

                        <span className="contact__step-label">
                            {t.steps.contact.label}
                        </span>

                        <h3 className="contact__step-title">
                            {t.steps.contact.title}
                        </h3>


                        <div className="contact__fields">

                            {/* PRÉNOM */}

                            <div className="contact__field">

                                <label>
                                    {t.steps.contact.firstNameLabel} *
                                </label>

                                <input
                                    type="text"
                                    value={formData.firstName}
                                    placeholder={
                                        t.steps.contact.firstNamePlaceholder
                                    }
                                    onChange={(event) =>
                                        updateField(
                                            "firstName",
                                            event.target.value
                                        )
                                    }
                                />

                            </div>


                            {/* NOM */}

                            <div className="contact__field">

                                <label>
                                    {t.steps.contact.lastNameLabel} *
                                </label>

                                <input
                                    type="text"
                                    value={formData.lastName}
                                    placeholder={
                                        t.steps.contact.lastNamePlaceholder
                                    }
                                    onChange={(event) =>
                                        updateField(
                                            "lastName",
                                            event.target.value
                                        )
                                    }
                                />

                            </div>


                            {/* EMAIL */}

                            <div className="contact__field">

                                <label>
                                    {t.steps.contact.emailLabel} *
                                </label>

                                <input
                                    type="email"
                                    value={formData.email}
                                    placeholder={
                                        t.steps.contact.emailPlaceholder
                                    }
                                    onChange={(event) =>
                                        updateField(
                                            "email",
                                            event.target.value
                                        )
                                    }
                                />

                            </div>


                            {/* TÉLÉPHONE */}

                            <div className="contact__field">

                                <label>
                                    {t.steps.contact.phoneLabel}
                                </label>

                                <input
                                    type="tel"
                                    value={formData.phone}
                                    placeholder={
                                        t.steps.contact.phonePlaceholder
                                    }
                                    onChange={(event) =>
                                        updateField(
                                            "phone",
                                            event.target.value
                                        )
                                    }
                                />

                            </div>

                        </div>

                    </div>
                )}


                {/* =================================
            ERROR MESSAGE
        ================================= */}

                {showErrors && (
                    <p className="contact__error">

                        {step === 3 &&
                            formData.email.trim() !== "" &&
                            !emailIsValid
                            ? t.emailError
                            : t.required}

                    </p>
                )}


                {/* =================================
    ACTIONS
================================= */}

                <div className="contact__actions">

                    {/* RETOUR */}

                    {step > 1 && (
                        <button
                            type="button"
                            className="contact__back"
                            onClick={previousStep}
                        >
                            ← {t.back}
                        </button>
                    )}


                    {/* CONTINUER / ENVOYER */}

                    {step < 3 ? (

                        <button
                            type="button"
                            className={`contact__continue ${!currentStepValid
                                    ? "is-disabled"
                                    : ""
                                }`}
                            onClick={nextStep}
                            aria-disabled={!currentStepValid}
                        >
                            <span>
                                {t.continue}
                            </span>

                            <span>
                                →
                            </span>
                        </button>

                    ) : (

                        <div className="contact__submit-area">

                            <button
                                type="submit"
                                className="contact__submit"
                                disabled={isSubmitting}
                            >
                                <span>
                                    {isSubmitting
                                        ? language === "fr"
                                            ? "ENVOI..."
                                            : "SENDING..."
                                        : t.steps.contact.submit}
                                </span>

                                <span>
                                    ↗
                                </span>
                            </button>


                            {submitStatus === "success" && (
                                <p className="contact__submit-message contact__submit-message--success">
                                    {language === "fr"
                                        ? "✓ Votre demande a bien été envoyée. Nous reviendrons vers vous rapidement."
                                        : "✓ Your request has been sent. We'll get back to you shortly."}
                                </p>
                            )}


                            {submitStatus === "error" && (
                                <p className="contact__submit-message contact__submit-message--error">
                                    {language === "fr"
                                        ? "Une erreur est survenue. Veuillez réessayer."
                                        : "Something went wrong. Please try again."}
                                </p>
                            )}

                        </div>

                    )}

                </div>

            </form>


            {/* =====================================
          FOOTER
      ===================================== */}

            <footer className="contact__footer">


                <div className="contact__footer-meta">

                    <span>
                        {t.footerLocation}
                    </span>

                    <span>
                        {t.footerMessage}
                    </span>

                    <span>
                        BERNAL STUDIO®
                    </span>

                </div>


                <div className="contact__footer-logo">

                    <span className="contact__footer-logo-solid">
                        BERNAL
                    </span>

                    <span className="contact__footer-logo-outline">
                        STUDIO
                    </span>

                </div>

            </footer>

        </section>
    );
}


export default Contact;
