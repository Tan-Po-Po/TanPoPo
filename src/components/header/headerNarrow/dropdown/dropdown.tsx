"use client";

import { Links } from "@/components/dropdown/dropdown";
import cl from "./dropdown.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import TriangleIcon from "/public/icons/triangleDown.svg";
import { getIconSrc, getValidClassNames } from "@/helpers";

interface Props {
  body: string;
  icon: string;
  links: Links[];
  onClick?: () => void;
}

export const Dropdown: React.FC<Props> = ({ body, links, icon, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={getValidClassNames(cl.dropdown, isOpen && cl.open)}>
      <div className={cl.body} onClick={handleClick}>
        <Image alt="" src={getIconSrc(icon)} width={20} height={20} />
        <div className={cl.text}>{body}</div>
        <TriangleIcon className={cl.triangle} />
      </div>

      <div className={cl.linksWrapper}>
        <ul>
          {links.map((link, i) => (
            <Link key={i} href={link.href}>
              <li onClick={onClick}>
                <Image
                  alt=""
                  src={getIconSrc(link.icon)}
                  width={20}
                  height={20}
                />
                {link.body}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
