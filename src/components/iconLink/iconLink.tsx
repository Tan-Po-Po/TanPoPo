"use client";
import Image from "next/image";
import React, { useState } from "react";
import cl from "./iconLink.module.scss";
import { socialLinks } from "@/config/config";

interface Props {
  icon: string;
  href?: string;
  height?: string;
}

export const IconLink: React.FC<Props> = ({ icon, href, height }) => {
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
        width={50}
        height={50}
        style={{
          width: "auto",
          height: `${height || "26px"}`,
        }}
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      ></Image>
    </div>
  );
};
