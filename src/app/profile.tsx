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
        width={175}
        height={175}
      />
      <div className="custom-container">
        <div>
          <p className="logline">
            Ghostwriter with a BFA in Creative Writing, <br/> <strong>Anu Altankhuyag </strong> 
            delivers romance stories that <br/> 
            balance fresh emotions with classic tropes, <br/> turning every project into a new romance <br/> 
            <em>worth falling for.</em>
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
