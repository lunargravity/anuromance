"use client";
import React, { useRef, useEffect } from "react";
import styles from "./stars.module.css";
import SocialMedias from "./socialmedias";
import FirstRow from "./profile";
import Sample from "@/components/Sample";
import { dragElement, toggleDisplay } from "@/utils/domHelpers";
import { BASE_PATH } from "@/config/constants";
import { createStar, Star } from "@/utils/stars";

export default function Page() {
  const [stars, setStars] = React.useState<Star[]>([]);
  const skyRef = useRef<HTMLDivElement>(null);

  const [showFirstSample, setShowFirstSample] = React.useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const starArr: Star[] = [];
    for (let i = 0; i < 50; i++) {
      starArr.push(createStar(5, width, height, styles));
    }
    setStars(starArr);

    document.querySelectorAll(".draggable-container").forEach((container) => {
      if (container instanceof HTMLElement) {
        dragElement(container);
      }
    });
  }, [showFirstSample]);

  return (
    <>
      <section>
        <div
          className={styles.sky}
          ref={skyRef}
          style={{ position: "relative", width: "100vw", height: "100vh" }}
        >
          {stars.map((star, idx) => (
            <div key={idx} className={star.className} style={star.style}></div>
          ))}
        </div>
        <span className={styles.shootingStar}></span>
        <span className={styles.shootingStar}></span>
        <span className={styles.shootingStar}></span>
        <span className={styles.shootingStar}></span>
        <div className="mockup-window">
          <div className="bar">Anu Altankhuyag</div>
          {FirstRow()}
          <div className="second-row">
            <div className="custom-container">
              <p className="logline-label">samples</p>
              <div className="samples">
                <Sample
                  onClick={() => {setShowFirstSample(true); console.log(showFirstSample);}}
                  src={`${BASE_PATH}/thirdtimesthecharm.png`}
                  alt="Weight Icon"
                  className="sample-icon"
                />
              </div>
            </div>
          </div>
          <div className="source">
            <p>
              Icons by{" "}
              <a
                href="https://icons8.com/"
                target="_blank"
                rel="noopener referrer"
              >
                icons8.com
              </a>
            </p>
          </div>
        </div>
        {showFirstSample && Sample({
          onClick: () => setShowFirstSample(false),
          src: `${BASE_PATH}/thirdtimesthecharm.png`,
          alt: "Third Time's the Charm",
          className: "sample-icon",
          })}   
        <div id="contact-window" className="draggable-container">
          <div className="draggable-header">
            <p>contact</p>
            <button
              className="close-btn"
              onClick={() => toggleDisplay("contact-window")}
            >
              &times;
            </button>
          </div>
          {SocialMedias()}
        </div>
      </section>
    </>
  );
}
