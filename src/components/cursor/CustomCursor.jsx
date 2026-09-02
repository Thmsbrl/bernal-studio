import {
    useEffect,
    useRef,
    useState,
} from "react";

import gsap from "gsap";

import "./CustomCursor.css";


function CustomCursor({ activeProject }) {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);

    const [label, setLabel] = useState("");

    const [eliasCursorTone, setEliasCursorTone] = useState("light");


    useEffect(() => {
        const cursor = cursorRef.current;
        const dot = dotRef.current;

        if (!cursor || !dot) {
            return undefined;
        }


        const finePointer = window.matchMedia(
            "(pointer: fine)"
        );

        if (!finePointer.matches) {
            return undefined;
        }


        // =====================================
        // MOVEMENT
        // =====================================

        const cursorX = gsap.quickTo(
            cursor,
            "x",
            {
                duration: 0.32,
                ease: "power3.out",
            }
        );

        const cursorY = gsap.quickTo(
            cursor,
            "y",
            {
                duration: 0.32,
                ease: "power3.out",
            }
        );

        const dotX = gsap.quickTo(
            dot,
            "x",
            {
                duration: 0.08,
                ease: "power2.out",
            }
        );

        const dotY = gsap.quickTo(
            dot,
            "y",
            {
                duration: 0.08,
                ease: "power2.out",
            }
        );


        /*
         * Position initiale.
         */

        gsap.set(
            [cursor, dot],
            {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                autoAlpha: 0,
            }
        );


        const handleMove = (event) => {
            cursorX(event.clientX);
            cursorY(event.clientY);

            dotX(event.clientX);
            dotY(event.clientY);

            if (activeProject === "elias") {
                const hoveredElement = document.elementFromPoint(
                    event.clientX,
                    event.clientY
                );

                const cursorZone = hoveredElement?.closest(
                    "[data-cursor-tone]"
                );

                const isDarkCursor =
                    cursorZone?.dataset.cursorTone === "dark";

                setEliasCursorTone(
                    isDarkCursor ? "dark" : "light"
                );

                gsap.set(cursor, {
                    borderColor: isDarkCursor
                        ? "rgba(23, 23, 20, .65)"
                        : "rgba(242, 241, 237, .55)",
                });

                gsap.set(dot, {
                    backgroundColor: isDarkCursor
                        ? "#171714"
                        : "#f2f1ed",
                });
            }


            gsap.to(
                [cursor, dot],
                {
                    autoAlpha: 1,
                    duration: 0.2,
                    overwrite: "auto",
                }
            );
        };


        const handleLeaveWindow = () => {
            gsap.to(
                [cursor, dot],
                {
                    autoAlpha: 0,
                    duration: 0.2,
                }
            );
        };


        const handleEnterWindow = () => {
            gsap.to(
                [cursor, dot],
                {
                    autoAlpha: 1,
                    duration: 0.2,
                }
            );
        };


        // =====================================
        // INTERACTIVE ELEMENTS
        // =====================================

        const handleOver = (event) => {
            const target = event.target.closest(
                "[data-cursor], button, a"
            );

            if (!target) {
                return;
            }


            const cursorLabel =
                target.dataset.cursor || "";

            setLabel(cursorLabel);

            gsap.to(cursor, {
                width: cursorLabel ? 82 : 48,
                height: cursorLabel ? 82 : 48,

                backgroundColor:
                    activeProject === "prana"
                        ? "rgba(201,163,74,.10)"
                        : activeProject === "elias"
                            ? "transparent"
                            : "rgba(242,241,237,.10)",

                borderColor:
                    activeProject === "prana"
                        ? "rgba(201,163,74,.75)"
                        : activeProject === "elias"
                            ? undefined
                            : "rgba(242,241,237,.58)",

                duration: 0.38,
                ease: "power3.out",
            });


            gsap.to(dot, {
                scale: 0,

                duration: 0.2,
                ease: "power2.out",
            });
        };


        const handleOut = (event) => {
            const target = event.target.closest(
                "[data-cursor], button, a"
            );

            if (!target) {
                return;
            }


            /*
             * Évite le reset lorsqu'on passe
             * d'un enfant à un autre dans
             * le même élément interactif.
             */

            if (
                event.relatedTarget &&
                target.contains(event.relatedTarget)
            ) {
                return;
            }


            setLabel("");


            gsap.to(cursor, {
                width: 30,
                height: 30,

                backgroundColor:
                    activeProject === "prana"
                        ? "rgba(201,163,74,.04)"
                        : "transparent",

                borderColor:
                    activeProject === "prana"
                        ? "rgba(201,163,74,.75)"
                        : activeProject === "elias"
                            ? undefined
                            : "rgba(242,241,237,.42)",

                duration: 0.38,
                ease: "power3.out",
            });

            gsap.to(dot, {
                scale: 1,

                duration: 0.25,
                ease: "power2.out",
            });
        };


        // =====================================
        // EVENTS
        // =====================================

        window.addEventListener(
            "mousemove",
            handleMove
        );

        document.addEventListener(
            "mouseover",
            handleOver
        );

        document.addEventListener(
            "mouseout",
            handleOut
        );

        document.documentElement.addEventListener(
            "mouseleave",
            handleLeaveWindow
        );

        document.documentElement.addEventListener(
            "mouseenter",
            handleEnterWindow
        );


        // =====================================
        // CLEANUP
        // =====================================

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMove
            );

            document.removeEventListener(
                "mouseover",
                handleOver
            );

            document.removeEventListener(
                "mouseout",
                handleOut
            );

            document.documentElement.removeEventListener(
                "mouseleave",
                handleLeaveWindow
            );

            document.documentElement.removeEventListener(
                "mouseenter",
                handleEnterWindow
            );
        };

    }, [activeProject]);


    return (
        <>
            <div
                className={`global-cursor ${activeProject
                    ? `global-cursor-${activeProject}`
                    : "global-cursor-bernal"
                    } ${activeProject === "elias"
                        ? `global-cursor-elias-${eliasCursorTone}`
                        : ""
                    }`}
                ref={cursorRef}
                aria-hidden="true"
            >
                <span>
                    {label}
                </span>
            </div>


            <div
                className={`global-cursor-dot ${activeProject
                    ? `global-cursor-dot-${activeProject}`
                    : "global-cursor-dot-bernal"
                    } ${activeProject === "elias"
                        ? `global-cursor-dot-elias-${eliasCursorTone}`
                        : ""
                    }`}

                ref={dotRef}
                aria-hidden="true"
            />
        </>
    );
}


export default CustomCursor;
