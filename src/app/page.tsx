import { Dropdown } from "@/components";
import cl from "./page.module.scss";

export default function Home() {
  const links = [
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
  return (
    <main className={cl.main}>
      <h1>Home page</h1>
      <div className={cl.test}>
        <Dropdown body="Про школу" href="/about" links={links} />
      </div>
    </main>
  );
}
