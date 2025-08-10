"use client";
import React, { useRef, useEffect } from "react";
import styles from "./stars.module.css";
import SocialMedias from "./socialmedias";
import FirstRow from "./firstrow";
import SecondRow from "./secondrow";

function random(range: number, unit: string) {
  const randNum = Math.floor(Math.random() * range) + 1;
  return `${randNum}${unit}`;
}

function createStar(size: number, width: number, height: number) {
  const randRange5 = Math.floor(Math.random() * 5) + 1;
  const widthAndHeight = random(size, "px");
  return {
    className: `${styles.circle} ${styles[`blink_${randRange5}`]}`,
    style: {
      width: widthAndHeight,
      height: widthAndHeight,
      left: random(width, "px"),
      top: random(height, "px"),
      position: "absolute" as const,
    },
  };
}

type Star = {
  className: string;
  style: React.CSSProperties;
};

export default function Page() {
  const [stars, setStars] = React.useState<Star[]>([]);
  const skyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const starArr = [];
    for (let i = 0; i < 50; i++) {
      starArr.push(createStar(5, width, height));
    }
    setStars(starArr);
  }, []);

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
          {SecondRow()}
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
        {SocialMedias()}
      </section>
    </>
  );
}
