"use client";

import React from "react";
import Image from "next/image";
import cl from "./dropdown.module.scss";
import NextLink from "next/link";
import { getIconSrc } from "@/helpers";

type Properties = {
  href: string;
  icon: string;
  body: string;
  bgColor: string;
};

const defaultColor = "#fde543";

const CustomLink: React.FC<Properties> = ({ body, href, bgColor, icon }) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <NextLink
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={href}
      className={cl.link}
      style={{ backgroundColor: isHover ? bgColor : defaultColor }}
    >
      <div className={cl.linkWrapper}>
        <Image src={getIconSrc(icon)} alt={icon} width={20} height={20} />
        <p>{body}</p>
      </div>
    </NextLink>
  );
};

export { CustomLink };
