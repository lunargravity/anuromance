"use client";
import React, { useRef, useEffect } from "react";
import styles from "./stars.module.css";
import SocialMedias from "./socialmedias";
import FirstRow from "./profile";
import SampleIcon from "@/components/SampleIcon";
import FirstSample from "./firstsample";
import SecondSample from "./secondsample";
import ThirdSample from "./thirdsample";
import { dragElement, toggleDisplay } from "@/utils/domHelpers";
import { BASE_PATH } from "@/config/constants";
import { createStar, Star } from "@/utils/stars";

export default function Page() {
  const [stars, setStars] = React.useState<Star[]>([]);
  const skyRef = useRef<HTMLDivElement>(null);

  const [showFirstSample, setShowFirstSample] = React.useState(false);
  const [showSecondSample, setShowSecondSample] = React.useState(false);
  const [showThirdSample, setShowThirdSample] = React.useState(false);

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
          {<FirstRow />}
          <div className="second-row">
            <div className="custom-container">
              <p className="logline-label">samples</p>
              <div className="samples">
                <SampleIcon
                  onClick={() => {
                    setShowFirstSample(true);
                  }}
                  src={`${BASE_PATH}/thirdtimesthecharm.png`}
                  alt="Weight Icon"
                  className="sample-icon"
                />
                <SampleIcon
                  onClick={() => {
                    setShowSecondSample(true);
                  }}
                  src={`${BASE_PATH}/boilingpot.png`}
                  alt="Chef Hat Icon"
                  className="sample-icon"
                />
                <SampleIcon
                  onClick={() => {
                    setShowThirdSample(true);
                  }}
                  src={`${BASE_PATH}/troublewithlynn.png`}
                  alt="Wounded Person Icon"
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
        {showFirstSample && (
          <FirstSample
            onClick={() => {
              setShowFirstSample(false);
            }}
          />
        )}
        {showSecondSample && (
          <SecondSample
            onClick={() => {
              setShowSecondSample(false);
            }}
          />
        )}
        {showThirdSample && (
          <ThirdSample
            onClick={() => {
              setShowThirdSample(false);
            }}
          />
        )}
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
          {<SocialMedias />}
        </div>
      </section>
    </>
  );
}
