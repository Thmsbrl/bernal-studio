import {
  useRef,
  useState,
} from "react";

import CustomCursor from "./components/cursor/CustomCursor";
import Intro from "./components/intro/Intro";
import Hero from "./components/hero/Hero";

import SelectedWork from "./components/selected-work/SelectedWork";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import PranaProject from "./components/selected-work/prana/PranaProject";
import EliasProject from "./components/selected-work/elias/EliasProject";

import "./App.css";


function App() {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);

  const [language, setLanguage] = useState("fr");

  /*
   * Projet actuellement ouvert.
   *
   * null = Bernal Studio
   * "prana" = Projet Prana
   * "elias" = Projet Elias
   */
  const [activeProject, setActiveProject] =
    useState(null);


  /* ========================================
     PROJECT NAVIGATION
  ======================================== */

  const openPrana = () => {
    setActiveProject("prana");
  };


  const openElias = () => {
    setActiveProject("elias");

    window.scrollTo(0, 0);
  };


  const closeProject = () => {
    setActiveProject(null);
  };


  return (
    <main className="site">

      {/* =====================================
          CUSTOM CURSOR
      ===================================== */}

      <CustomCursor
        activeProject={activeProject}
      />


      {/* =====================================
          BERNAL STUDIO
      ===================================== */}

      <div
        className={`bernal-site ${
          activeProject
            ? "project-is-open"
            : ""
        }`}
      >

        {/* HERO */}

        <Hero
          ref={heroRef}
          contentRef={heroContentRef}
          language={language}
          onLanguageChange={setLanguage}
        />


        {/* SELECTED WORK */}

        <SelectedWork
          language={language}
          onOpenPrana={openPrana}
          onOpenElias={openElias}
        />


        {/* ABOUT + PROCESS */}

        <About
          language={language}
        />


        {/* CONTACT */}

        <Contact
          language={language}
        />

      </div>


      {/* =====================================
          INTRO
      ===================================== */}

      <Intro
        heroRef={heroRef}
        heroContentRef={heroContentRef}
      />


      {/* =====================================
          PRANA PROJECT EXPERIENCE
      ===================================== */}

      {activeProject === "prana" && (
        <div className="project-experience">

          <button
            type="button"
            className="project-back"
            onClick={closeProject}
          >
            <span>←</span>

            <span>
              BERNAL STUDIO
            </span>
          </button>


          <PranaProject
            onBackToProjects={closeProject}
            onOpenElias={() => {
              setActiveProject("elias");

              window.scrollTo(0, 0);
            }}
          />

        </div>
      )}


      {/* =====================================
          ELIAS PROJECT EXPERIENCE
      ===================================== */}

      {activeProject === "elias" && (
        <div className="project-experience">

          <button
            type="button"
            className="project-back"
            onClick={closeProject}
          >
            <span>←</span>

            <span>
              BERNAL STUDIO
            </span>
          </button>


          <EliasProject
            onBackToProjects={closeProject}
          />

        </div>
      )}

    </main>
  );
}


export default App;
