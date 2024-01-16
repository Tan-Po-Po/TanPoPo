import { ContentCard, Typography } from "@/components";
import cl from "./narrowFooter.module.scss";
import { getIconSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";
import Link from "next/link";

export const NarrowFooter = () => {
  const width = "16px";

  return (
    <div className={cl.narrowFooter}>
      <ContentCard
        className={getValidClassNames(cl.left, cl.links)}
        cardBgColor="transparent"
      >
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
            src={getIconSrc("coinsStack")}
            width={0}
            height={0}
            style={{ width, height: "auto" }}
            alt=""
          />
          <Link href={"/courses/price"}>Вартість курсів</Link>
        </div>
      </ContentCard>
      <div className={cl.right}>
        <ContentCard className={cl.links} cardBgColor="transparent">
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("contact")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href={"/contacts"}>Контакти</Link>
          </div>
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("settings")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href={"/contacts/confidentialityPolicy"}>
              Політика Конфідеційності
            </Link>
          </div>
          <div className={cl.linkWrapper}>
            <Image
              src={getIconSrc("checkList")}
              width={0}
              height={0}
              style={{ width, height: "auto" }}
              alt=""
            />
            <Link href={"/contacts/oferta"}>Публічна Оферта</Link>
            <span> & </span>
            <Link href={"/contacts/confidentialityPolicy#7"}>Cookies</Link>
          </div>
        </ContentCard>
        <ContentCard className={cl.info} cardBgColor="transparent">
          <div className={cl.logoNameWrapper}>
            <div className={cl.logo}>
              <Link href={"/"}>
                <Image
                  src={"/logo/logo.svg"}
                  className={cl.logoIcon}
                  width={104}
                  height={104}
                  alt=""
                />
              </Link>
            </div>
            <div className={cl.name}>
              <Typography variant="subtitle1">Авторська школа</Typography>
              <Typography
                variant="h6"
                style={{ fontSize: "22px", lineHeight: "normal" }}
              >
                Тетяни Селіверстової
              </Typography>
            </div>
          </div>
          <div className={cl.rights}>© 2024 TanPoPo. Всі права захищено.</div>
        </ContentCard>
      </div>
    </div>
  );
};
