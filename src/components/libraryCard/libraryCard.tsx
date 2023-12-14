"use client";

import React from "react";
import { ContentCard } from "../contentCard/contentCard";
import { Typography } from "../typography/typography";
import { getIconSrc } from "@/helpers";
import Link from "next/link";
import Image from "next/image";

import cl from "./libraryCard.module.scss";
import { useRouter } from "next/navigation";
import { setCookieForPrivateLibraryItem } from "@/helpers/actions/setCookieForPrivateLibraryItem";

type Properties = {
  icon: string;
  body: string;
  bgColor: string;
  hoverBgColor: string;
  href: string;
  isPrivate?: boolean;
};

const LibraryCard: React.FC<Properties> = ({
  icon,
  body,
  href,
  isPrivate = false,
  bgColor,
  hoverBgColor,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = async () => {
    await setCookieForPrivateLibraryItem(isPrivate);
  };

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={cl.link}
      href={href}
    >
      <ContentCard
        width="260px"
        height="160px"
        cardBgColor={isHovered ? hoverBgColor : bgColor}
      >
        {isPrivate && (
          <ContentCard className={cl.privateIcon} width="33px" height="33px">
            <Image
              className={cl.star}
              src={getIconSrc("star")}
              alt="star"
              width={18}
              height={17}
            />
          </ContentCard>
        )}
        <Image
          className={cl.icon}
          src={getIconSrc(icon)}
          alt={icon}
          width={40}
          height={40}
        />
        <Typography className={cl.body} variant="h6">
          {body}
        </Typography>
      </ContentCard>
    </Link>
  );
};

export { LibraryCard };
