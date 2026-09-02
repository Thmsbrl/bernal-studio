import story1 from "../../../assets/elias/images/story-1.jpg";
import story2 from "../../../assets/elias/images/story-2.jpg";
import story3 from "../../../assets/elias/images/story-3.jpg";
import story4 from "../../../assets/elias/images/story-4.jpg";


const stories = [
  {
    image: story1,
    names: "Emma & Lucas",
    location: "Montréal, Canada",
    number: "01",
  },
  {
    image: story2,
    names: "Olivia & James",
    location: "Toronto, Canada",
    number: "02",
  },
  {
    image: story3,
    names: "Juliette & Nathan",
    location: "Provence, France",
    number: "03",
  },
  {
    image: story4,
    names: "Clara & Thomas",
    location: "Tuscany, Italy",
    number: "04",
  },
];


function EliasStories() {
  return (
    <section
      className="stories-section"
      id="elias-stories"
      data-cursor-tone="dark"
    >
      {/* ====================================
          HEADER
      ==================================== */}

      <div className="stories-header">

        <div className="section-index reveal-item">
          <span>01</span>

          <span className="section-index-line" />

          <span>Selected stories</span>
        </div>


        <div className="stories-heading">

          <p className="section-eyebrow reveal-item">
            Recent weddings
          </p>


          <h2 className="section-title reveal-item">
            Stories that feel

            <span>
              entirely your own.
            </span>
          </h2>


          <p className="section-description reveal-item">
            Honest moments, subtle details and
            unforgettable celebrations, documented
            with an editorial eye and a deeply
            personal approach.
          </p>

        </div>

      </div>


      {/* ====================================
          STORIES
      ==================================== */}

      <div className="stories-grid">

        {stories.map((story) => (
          <article
            className="story-card"
            key={story.names}
          >
            <div className="story-image-container">

              <img
                src={story.image}
                alt={`${story.names}, wedding in ${story.location}`}
                className="story-image"
              />


              <div className="story-image-shade" />


              <span className="story-number">
                {story.number}
              </span>


              <span className="story-view">
                View story
              </span>

            </div>


            <div className="story-information">

              <h3>
                {story.names}
              </h3>


              <p>
                {story.location}
              </p>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}


export default EliasStories;