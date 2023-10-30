import React from "react";
import cl from "./header.module.scss"

const aboutLinks =  [
  { href: "/", body: "Історія розвитку", icon: "cup", bgColor: "#FFCCF4" },
  {
    href: "/prices",
    body: "Відгуки за школу",
    icon: "personSpeak",
    bgColor: "#B9C4FF",
  },
  { href: "/store", body: "Команда TanPoPo", icon: "person", bgColor: "#B6FFBD" },
  { href: "/about", body: "Наші партнери", icon: "groupThree", bgColor: "#E1C2FF" },
  { href: "/test", body: "Авторський контент", icon: "diamond", bgColor: "#FFFDEE" },
];

const coursesLinks =  [
  { href: "/", body: "Онлайн-курси з сенсеєм", icon: "groupTwo", bgColor: "#FFCCF4" },
  {
    href: "/prices",
    body: "Відеокурси",
    icon: "camera",
    bgColor: "#FFA48F",
  },
  { href: "/store", body: "Аудіокурси", icon: "speaker", bgColor: "#B6FFBD" },
  { href: "/about", body: "Книжкові мінікурси", icon: "list", bgColor: "#AFF1FF" },
  { href: "/test", body: "Освітня програма", icon: "palette", bgColor: "#B9C4FF" },
  { href: "/test", body: "Вартість", icon: "coinStack", bgColor: "#E1C2FF" },
  { href: "/test", body: "Навчання у подарунок", icon: "present", bgColor: "#FFFDEE" }
];

const Header = () => {
  return <header className={cl.header}>header</header>;
};

export { Header };
