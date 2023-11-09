import React from "react";
import cl from "./header.module.scss";
import { getIconSrc } from "@/helpers";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, Button, IconLink } from "@/components";

const aboutLinks = [
  { href: "/", body: "Історія розвитку", icon: "cup", bgColor: "#FFCCF4" },
  {
    href: "/prices",
    body: "Відгуки за школу",
    icon: "personSpeak",
    bgColor: "#B9C4FF",
  },
  {
    href: "/store",
    body: "Команда TanPoPo",
    icon: "person",
    bgColor: "#B6FFBD",
  },
  {
    href: "/about",
    body: "Наші партнери",
    icon: "groupThree",
    bgColor: "#E1C2FF",
  },
  {
    href: "/test",
    body: "Авторський контент",
    icon: "diamond",
    bgColor: "#FFFDEE",
  },
];

const coursesLinks = [
  {
    href: "/",
    body: "Онлайн-курси з сенсеєм",
    icon: "groupTwo",
    bgColor: "#FFCCF4",
  },
  {
    href: "/prices",
    body: "Відеокурси",
    icon: "camera",
    bgColor: "#FFA48F",
  },
  { href: "/store", body: "Аудіокурси", icon: "speaker", bgColor: "#B6FFBD" },
  {
    href: "/about",
    body: "Книжкові мінікурси",
    icon: "list",
    bgColor: "#AFF1FF",
  },
  {
    href: "/test",
    body: "Освітня програма",
    icon: "palette",
    bgColor: "#B9C4FF",
  },
  { href: "/test", body: "Вартість", icon: "coinsStack", bgColor: "#E1C2FF" },
  {
    href: "/test",
    body: "Навчання у подарунок",
    icon: "present",
    bgColor: "#FFFDEE",
  },
];

const Header = () => {
  return (
    <header className={cl.header}>
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
        <Button icon="shop">Крамниця</Button>
        <Button icon="pc">Онлайн-тест</Button>
        <Button icon="bank">Бібліотека</Button>
        <Button icon="contact">Контакти</Button>
      </nav>
      <div className={cl.socials}>
        <IconLink icon="instagram" height="32px" />
        <IconLink icon="youtube" height="32px" />
      </div>
      <div className={cl.auth}>
        <Button icon="hat">Вхід</Button>
        <Button className={cl.register} variant="outlined">
          Долучитись
        </Button>
      </div>
    </header>
  );
};

export { Header };
