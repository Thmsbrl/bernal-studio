import "./PranaOutro.css";

function PranaOutro({ onBackToProjects, onOpenElias}) {
    return (
        <section className="prana-outro">

            {/* =========================
                NEXT PROJECT
            ========================== */}

            <div className="prana-next">

                <div className="prana-next__top">
                    <span>NEXT PROJECT</span>

                    <div className="prana-next__number">
                        <span>02</span>
                        <span className="prana-next__line" />
                    </div>
                </div>

                <button
                    className="prana-next__project"
                    type="button"
                    data-cursor="VIEW"
                    onClick={onOpenElias}
                >
                    <span className="prana-next__category">
                        PHOTOGRAPHIE
                    </span>

                    <div className="prana-next__title">
                        <span>ELIAS</span>

                        <span className="prana-next__outline">
                            STUDIO
                        </span>
                    </div>

                    <span className="prana-next__arrow">
                        ↗
                    </span>
                </button>

            </div>


            <div className="prana-outro__back">
    <button
        type="button"
        data-cursor="BACK"
        onClick={onBackToProjects}
    >
        BACK TO PROJECTS ↑
    </button>
</div>


        </section>
    );
}

export default PranaOutro;
