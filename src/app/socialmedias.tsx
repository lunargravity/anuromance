import React, { useEffect} from "react";
import Icon from "@/components/Icon";

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

export default function SocialMedias() {
  useEffect(() => {
    const container = document.querySelector(".draggable-container");
    if (container instanceof HTMLElement) {
      dragElement(container);
    }
  }, []);

  return (
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
        <Icon
          href="mailto:altankhanu@gmail.com"
          src={`${basePath}/gmail.png`}
          alt="Email"
          size={35}
          className="email"
        />
        <Icon
          href="https://www.linkedin.com/in/anu-altankhuyag/"
          src={`${basePath}/linkedin.png`}
          alt="LinkedIn"
          size={35}
          className="linkedin"
        />
        <Icon
          href="https://www.upwork.com/freelancers/~01aa165982992f2332?mp_source=share"
          src={`${basePath}/upwork.png`}
          alt="Upwork"
          className="upwork"
          size={35}
        />
        <Icon
          href="https://www.tiktok.com/@alunarbunnie?is_from_webapp=1&sender_device=pc"
          src={`${basePath}/tiktok.png`}
          alt="TikTok"
          className="tiktok"
          size={35}
        />
      </div>
    </div>
  );
}
