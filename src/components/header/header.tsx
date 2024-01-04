"use client";
import React from "react";
import cl from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, Button, IconLink } from "@/components";
import { getValidClassNames } from "@/helpers";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { useAppSelector } from "@/redux/hooks";
import { HeaderNarrow } from "./headerNarrow/headerNarrow";
import { aboutLinks, coursesLinks } from "./links";

const Header = () => {
  const { isPc } = useAppSelector(selectWindowMatchMedia);

  if (!isPc) {
    return <HeaderNarrow />;
  }

  return (
    <header className={cl.header}>
      <div className={getValidClassNames(cl.wrapper, "wrapper")}>
        <div className={cl.logo}>
          <Link href={"/"}>
            <Image
              src={"/logo/logoHeader.svg"}
              className={cl.logoIcon}
              width={110}
              height={100}
              alt=""
            />
          </Link>
        </div>
        <nav className={cl.navigation}>
          <Dropdown
            className={cl.dropdown}
            links={aboutLinks}
            body={"Про школу"}
            href="/about"
          />
          <Dropdown
            className={cl.dropdown}
            links={coursesLinks}
            body={"Курси"}
            href="/courses"
          />
          <Link href={"/shop"}>
            <Button icon="shop">Крамниця</Button>
          </Link>
          <Link href={"/test-intro"}>
            <Button icon="pc">Онлайн-тест</Button>
          </Link>
          <Link href={"/library"}>
            <Button icon="bank">Бібліотека</Button>
          </Link>
          <Link href={"/contacts"}>
            <Button icon="contact">Контакти</Button>
          </Link>
        </nav>
        <div className={cl.socials}>
          <IconLink icon="instagram" height="32px" />
          <IconLink icon="youTube" height="32px" />
        </div>
        <div className={cl.auth}>
          <Link href={"/join"}>
            <Button icon="hat">Вхід</Button>
          </Link>
          <Link href={"/join"}>
            <Button className={cl.register} variant="outlined">
              Долучитись
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
