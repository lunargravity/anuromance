"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./stars.module.css";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/anuromance" : "";

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
            <div className="first-row">
              <Image
                src={`${basePath}/profile.jpg`}
                alt="Profile of Anu"
                className="profile"
                width={100}
                height={100}
              />
              <div className="custom-container">
                <p className="logline-label">
                  Logline
                </p>
                <div>
                  <p>Ghostwriter with a BFA in Creative Writing, delivering romance stories that balance fresh emotions with classic tropes, turning every project into a new romance worth falling for.</p>
                  <button className="contact">Let&apos;s Connect</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
