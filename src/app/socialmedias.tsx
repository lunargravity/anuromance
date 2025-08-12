import React from "react";
import Icon from "@/components/Icon";
import { BASE_PATH } from "@/config/constants";

export default function SocialMedias() {
  return (
    <div className="social-medias">
      <Icon
        href="mailto:altankhanu@gmail.com"
        src={`${BASE_PATH}/gmail.png`}
        alt="Email"
        size={35}
        className="email"
      />
      <Icon
        href="https://www.linkedin.com/in/anu-altankhuyag/"
        src={`${BASE_PATH}/linkedin.png`}
        alt="LinkedIn"
        size={35}
        className="linkedin"
      />
      <Icon
        href="https://www.upwork.com/freelancers/~01aa165982992f2332?mp_source=share"
        src={`${BASE_PATH}/upwork.png`}
        alt="Upwork"
        className="upwork"
        size={35}
      />
      <Icon
        href="https://www.tiktok.com/@alunarbunnie?is_from_webapp=1&sender_device=pc"
        src={`${BASE_PATH}/tiktok.png`}
        alt="TikTok"
        className="tiktok"
        size={35}
      />
    </div>
  );
}
