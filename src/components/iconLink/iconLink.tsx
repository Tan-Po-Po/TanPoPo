"use client";
import Image from "next/image";
import React, { useState } from "react";
import cl from "./iconLink.module.scss";
import { socialLinks } from "@/config/config";

interface Props {
  icon: string;
  href?: string;
}

export const IconLink: React.FC<Props> = ({ icon, href }) => {
  const iconUrl = `/icons/socials/${icon}.png`;
  const iconColorUrl = `/icons/socials/${icon}Color.png`;

  const [src, setSrc] = useState(iconUrl);

  const handleMouseOver = () => {
    setSrc(iconColorUrl);
  };

  const handleMouseOut = () => {
    setSrc(iconUrl);
  };

  const handleClick = () => {
    window.open(href || socialLinks[icon as keyof typeof socialLinks]);
  };

  return (
    <div className={cl.iconLink}>
      <Image
        className={cl.icon}
        src={src}
        width={30}
        height={30}
        style={{
          width: "auto",
          height: "22px",
        }}
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      ></Image>
    </div>
  );
};
