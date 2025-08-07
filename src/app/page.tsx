"use client";
import React, { useRef, useEffect } from "react";
import styles from "./stars.module.css";

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
          <div className="home">
            <div className="bar">home</div>
            <div>
              <img
                src="/profile.jpg"
                alt="Profile of Anu"
                className="profile"
              />
              <div className="relative mt-10 border border-gray-400 rounded-lg px-4 pt-6 pb-4">
                <p className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600">
                  Logline
                </p>
                <div>
                  <p>This is some static content inside the container.</p>
                </div>
              </div>
            </div>
            <h1>Hello!</h1>
          </div>
        </div>
      </section>
    </>
  );
}
