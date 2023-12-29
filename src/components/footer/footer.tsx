"use client";
import cl from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getValidClassNames, getIconSrc, getSocialIconsLinks } from "@/helpers";
import { useEffect, useState } from "react";
import { NarrowFooter } from "./narrowFooter/narrowFooter";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";

const Footer: React.FC = () => {
  const width = "16px";

  const { isPc } = useAppSelector(selectWindowMatchMedia);

  if (!isPc) {
    return <NarrowFooter />;
  }

  return (
    <div className={cl.footer}>
      <div className={cl.linksList}>
        <div className={cl.socials}>{getSocialIconsLinks()}</div>
        <div className={cl.navigation}>
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("person")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href="/about#team">Наша команда</Link>
          </div>
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("personSpeak")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href={"/about#reviews"}>Відгуки про школу</Link>
          </div>
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("youTube")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href={"/contacts#videoGuides"}>Корисні відеогайди</Link>
          </div>
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("card")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href={"/store#mnemonicCards"}>Мнемонічні картки</Link>
          </div>
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("present")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href={"/courses/educationAsGift"}>Навчання у подарунок</Link>
          </div>
        </div>
      </div>
      <div className={cl.logo}>
        <div className={cl.logoContainer}>
          <Link href={"/"}>
            <Image
              src={"/logo/logo.svg"}
              className={cl.logoIcon}
              width={110}
              height={110}
              alt=""
            />
          </Link>
          <div className={cl.text}>
            <div className={cl.line}>Авторська школа</div>
            <div className={cl.name}>Тетяни Селіверстової</div>
          </div>
        </div>
      </div>
      <div className={cl.linksList}>
        <div className={getValidClassNames(cl.navigation, cl.navigationRight)}>
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("coinsStack")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href={"/courses/price"}>Вартість курсів</Link>
          </div>
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("palette")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href={"/courses/educationProgram"}>Освітня програма</Link>
          </div>
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("apple")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href={"/bonusBenefits"}>Додаткові переваги</Link>
          </div>
          <div className={cl.linkWrapper}>
            <Link href={"/contacts/confidentialityPolicy"}>
              Політика Конфідеційності
            </Link>
          </div>
          <div className={cl.linkWrapper}>
            <Link href={"/contacts/oferta"}>Публічна Оферта</Link>
            <span> & </span>
            <Link href={"/"}>Cookies</Link>
          </div>
          <div className={cl.text}>
            <div className={cl.line}>Онлайн-школа японської мови.</div>
            <div className={cl.line}>© 2023 TanPoPo. Всі права захищено.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
