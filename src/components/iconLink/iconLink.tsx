"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import cl from "./iconLink.module.scss";
import { socialLinks } from "@/config/config";
import { getValidClassNames } from "@/helpers";

interface Props {
  icon: string;
  href?: string;
  height?: string;
  className?: string;
  isHovered?: boolean;
}

const IconLink: React.FC<Props> = ({
  icon,
  href,
  height,
  className,
  isHovered,
}) => {
  const iconUrl = `/icons/socials/${icon}.png`;
  const iconColorUrl = `/icons/socials/${icon}Color.png`;
  const [src, setSrc] = useState(iconUrl);
  
  useEffect(() => {
    setSrc(isHovered ? iconColorUrl : iconUrl);
  }, [isHovered, iconColorUrl, iconUrl]);

  const handleMouseOver = () => {
    if (!isHovered) {
      setSrc(iconColorUrl);
    }
  };

  const handleMouseOut = () => {
    if (!isHovered) {
      setSrc(iconUrl);
    }
  };

  const handleClick = () => {
    window.open(href || socialLinks[icon as keyof typeof socialLinks]);
  };

  return (
    <div className={cl.iconLink}>
      <Image
        className={getValidClassNames(cl.icon, className)}
        src={src}
        width={50}
        height={50}
        style={{
          width: "auto",
          height: `${height || "26px"}`,
          minWidth: "26px",
        }}
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      />
    </div>
  );
};

export { IconLink };
