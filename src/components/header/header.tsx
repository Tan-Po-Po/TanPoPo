"use client";
import React from "react";
import cl from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, Button, IconLink, CartButton } from "@/components";
import { getValidClassNames } from "@/helpers";
import { HeaderNarrow } from "./headerNarrow/headerNarrow";
import { aboutLinks, coursesLinks } from "./links";
import { useWindowSize } from "@uidotdev/usehooks";

const Header = () => {
  const { width } = useWindowSize();

  if (width && width < 1120) {
    return <HeaderNarrow />;
  }

  return (
    <header className={cl.header}>
      <div className={getValidClassNames(cl.wrapper, "wrapper")}>
        <CartButton />

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

        <div className={getValidClassNames(cl.caption)}>
          Онлайн-школа японської мови
        </div>

        <div className={cl.burger}>
          <div className={cl.background}>
            <div className={cl.icon}>
              <div className={getValidClassNames(cl.burgerIcon)}>
                <div className={cl.first}></div>
                <div className={cl.second}></div>
                <div className={cl.third}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
