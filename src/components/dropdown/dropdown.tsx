"use client";

import React, { MouseEvent } from "react";
import Image from "next/image";
import Triangle from "../../../public/icons/triangleDown.svg";
import cl from "./dropdown.module.scss";
import { CustomLink } from "./customLink";
import Link from "next/link";

type Links = {
  href: string;
  icon: string;
  body: string;
  bgColor: string;
};

type Properties = {
  body: string;
  href: string;
  links: Links[];
};

const Dropdown: React.FC<Properties> = ({ body, href, links }) => {
  return (
    <div className={cl.dropdown}>
      <Link href={href} className={cl.body}>
        {body}
        <Triangle className={cl.triangle} />
      </Link>
      <div className={cl.linksWrapper}>
        <div className={cl.links}>
          {links.map((link, index) => (
            <CustomLink
              body={link.body}
              bgColor={link.bgColor}
              icon={link.icon}
              href={link.href}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Dropdown };
