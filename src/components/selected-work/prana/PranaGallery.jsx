import prana01 from "../../../assets/prana/images/prana1.jpg";
import prana02 from "../../../assets/prana/images/prana2.jpg";
import prana03 from "../../../assets/prana/images/prana3.jpg";
import prana04 from "../../../assets/prana/images/prana4.jpg";

function PranaGallery() {
  return (
    <section className="works" id="galerie">

      <div className="works-header">
        <span className="works-label">
          SÉLECTION
        </span>

        <h2>
          L'art prend
          <br />
          <em>forme sur la peau.</em>
        </h2>

        <p>
          Une sélection de pièces réalisées au studio,
          entre précision, composition et identité.
        </p>
      </div>

      <div className="works-grid">

        {/* 01 */}

        <figure className="work work-1">
          <div className="work-image">
            <img
              src={prana01}
              alt="Tatouage Prana Tattoo"
            />
          </div>

          <figcaption>
            <span>01</span>
            <span>Ornemental</span>
          </figcaption>
        </figure>

        {/* 02 */}

        <figure className="work work-2">
          <div className="work-image">
            <img
              src={prana02}
              alt="Tatouage Prana Tattoo"
            />
          </div>

          <figcaption>
            <span>02</span>
            <span>Black & Grey</span>
          </figcaption>
        </figure>

        {/* 03 */}

        <figure className="work work-3">
          <div className="work-image">
            <img
              src={prana03}
              alt="Tatouage Prana Tattoo"
            />
          </div>

          <figcaption>
            <span>03</span>
            <span>Japanese · Color</span>
          </figcaption>
        </figure>

        {/* 04 */}

        <figure className="work work-4">
          <div className="work-image">
            <img
              src={prana04}
              alt="Tatouage Prana Tattoo"
            />
          </div>

          <figcaption>
            <span>04</span>
            <span>Fine line · Blackwork</span>
          </figcaption>
        </figure>

      </div>

      <div className="works-footer">
        <span>PRANA TATTOO · MONTRÉAL</span>

        <span>PROJET CONCEPT</span>

        <span>2026</span>
      </div>
    </section>
  );
}

export default PranaGallery;