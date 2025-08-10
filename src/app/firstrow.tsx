import React, { useEffect } from "react";
import Image from "next/image";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/anuromance" : "";

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

export default function FirstRow() {
  useEffect(() => {
    const container = document.querySelector(".draggable-container");
    if (container instanceof HTMLElement) {
      dragElement(container);
    }
  }, []);

  return (
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
            Ghostwriter with a BFA in Creative Writing, delivering romance
            stories that balance fresh emotions with classic tropes, turning
            every project into a new romance worth falling for.
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
  );
}
