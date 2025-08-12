import React, { useEffect } from "react";
import Image from "next/image";
import { dragElement, toggleDisplay } from "@/utils/domHelpers";
import {BASE_PATH} from "@/config/constants";

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
        src={`${BASE_PATH}/profile.jpg`}
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
