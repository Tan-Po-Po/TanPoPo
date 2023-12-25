import React from "react";
import cl from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, Button, IconLink } from "@/components";

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
    </header>
  );
};

const aboutLinks = [
  {
    href: "/about#history",
    body: "Історія розвитку",
    icon: "cup",
    bgColor: "#FFCCF4",
  },
  {
    href: "/about#feedbacks",
    body: "Відгуки за школу",
    icon: "personSpeak",
    bgColor: "#B9C4FF",
  },
  {
    href: "/about#team",
    body: "Команда TanPoPo",
    icon: "person",
    bgColor: "#B6FFBD",
  },
  {
    href: "/about#partners",
    body: "Наші партнери",
    icon: "groupThree",
    bgColor: "#E1C2FF",
  },
  {
    href: "/about#content",
    body: "Авторський контент",
    icon: "diamond",
    bgColor: "#FFFDEE",
  },
];

const coursesLinks = [
  {
    href: "/courses#teacher",
    body: "Онлайн-курси з сенсеєм",
    icon: "groupTwo",
    bgColor: "#FFCCF4",
  },
  {
    href: "/courses#video",
    body: "Відеокурси",
    icon: "camera",
    bgColor: "#FFA48F",
  },
  {
    href: "/courses#audio",
    body: "Аудіокурси",
    icon: "speaker",
    bgColor: "#B6FFBD",
  },
  {
    href: "/courses#book",
    body: "Книжкові мінікурси",
    icon: "list",
    bgColor: "#AFF1FF",
  },
  {
    href: "/education",
    body: "Освітня програма",
    icon: "palette",
    bgColor: "#B9C4FF",
  },
  { href: "/prices", body: "Вартість", icon: "coinsStack", bgColor: "#E1C2FF" },
  {
    href: "/test",
    body: "Навчання у подарунок",
    icon: "present",
    bgColor: "#FFFDEE",
  },
];

export { Header };
