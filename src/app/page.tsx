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

function dragElement(elmnt: HTMLElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const header = document.getElementById("draggable-header");
  // if present, the header is where you move the DIV from:
  if (header) {
    header.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function toggleDisplay(buttonId: string) {
  const x = document.getElementById(buttonId)!;
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

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

    const container = document.querySelector(".draggable-container");
    if (container instanceof HTMLElement) {
      dragElement(container);
    }
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
            <div className="bar">Anu Altankhuyag</div>
            <div className="first-row">
              <Image
                src={`${basePath}/profile.jpg`}
                alt="Profile of Anu"
                className="profile"
                width={100}
                height={100}
              />
              <div className="custom-container">
                <p className="logline-label">logline</p>
                <div>
                  <p className="logline">
                    Ghostwriter with a BFA in Creative Writing, delivering
                    romance stories that balance fresh emotions with classic
                    tropes, turning every project into a new romance worth
                    falling for.
                  </p>
                  <button
                    className="contact"
                    onClick={() => toggleDisplay("contact-window")}
                  >
                    let&apos;s connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact-window" className="draggable-container">
          <div id="draggable-header">
            <p>contact</p>
            <button
              className="close-btn"
              onClick={() => toggleDisplay("contact-window")}
            >
              &times;
            </button>
          </div>
            <div className="social-medias">
              <a
                href="mailto:altankhanu@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${basePath}/gmail.png`}
                  alt="Gmail"
                  className="gmail"
                  width={35}
                  height={35}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/anu-altankhuyag/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${basePath}/linkedin.png`}
                  alt="LinkedIn"
                  className="linkedin"
                  width={35}
                  height={35}
                />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01aa165982992f2332?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${basePath}/upwork.png`}
                  alt="Upwork"
                  className="upwork"
                  width={35}
                  height={35}
                />
              </a>
              <a
                href="https://www.tiktok.com/@alunarbunnie?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${basePath}/tiktok.png`}
                  alt="TikTok"
                  className="tiktok"
                  width={35}
                  height={35}
                />
              </a>
            </div>
            
          </div>
      </section>
      <ul className="source">
                <li>
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/8808/linkedin"
                  >
                    LinkedIn
                  </a>{" "}
                  icon by{" "}
                  <a target="_blank" href="https://icons8.com">
                    Icons8
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/2y_wcSzVjqiQ/upwork"
                  >
                    Upwork
                  </a>{" "}
                  icon by{" "}
                  <a target="_blank" href="https://icons8.com">
                    Icons8
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://icons8.com/icon/118638/tiktok"
                  >
                    TikTok
                  </a>{" "}
                  icon by{" "}
                  <a target="_blank" href="https://icons8.com">
                    Icons8
                  </a>
                </li>
              </ul>
    </>
  );
}
