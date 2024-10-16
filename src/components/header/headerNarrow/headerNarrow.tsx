"use client";
import { Button, ContentCard, Dialog, CartButton } from "@/components";
import cl from "./headerNarrow.module.scss";
import { getIconSrc, getSocialIconsLinks, getValidClassNames } from "@/helpers";
import TanPoPoIcon from "/public/logo/tanPoPo.svg";
import { useEffect, useState } from "react";
import { Slide } from "@mui/material";
import { Dropdown } from "./dropdown/dropdown";
import { aboutLinks, coursesLinks } from "../links";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";

type Props = {
  className?: string;
};

export const HeaderNarrow: React.FC<Props> = ({ className }) => {
  const { width } = useWindowSize();
  const isMobile = Boolean(width && width < 678);
  const isTablet = Boolean(width && width >= 678 && width < 1024);
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    handleClose();
  }, [path]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const aboutBlockLinks = [
    { ...aboutLinks[0], href: "/about" },
    ...aboutLinks.slice(1),
  ];
  return (
    <header className={getValidClassNames(cl.headerNarrow, className)}>
      {!isOpen && <CartButton />}
      <div className={cl.wrapper}>
        <div className={cl.logo}>
          <Link href="/">
            <div className={cl.background}>
              <div className={cl.icon}>
                <TanPoPoIcon />
              </div>
            </div>
          </Link>
        </div>
        <div
          className={getValidClassNames(
            cl.caption,
            isMobile && cl.mobile,
            isTablet && cl.tablet
          )}
        >
          <Link href="/">
            {isMobile ? (
              <>
                Онлайн-школа <br /> японської мови
              </>
            ) : (
              "Онлайн-школа японської мови"
            )}
          </Link>
        </div>
        <div className={cl.burger} onClick={isOpen ? handleClose : handleOpen}>
          <div className={cl.background}>
            <div className={cl.icon}>
              <Burger isOpen={isOpen} />
            </div>
          </div>
        </div>
        <Dialog
          open={isOpen}
          onClose={handleClose}
          closeIcon={false}
          className={cl.dialog}
          TransitionComponent={Slide}
          contentClassName={cl.dialogContent}
        >
          <div className={cl.menu}>
            <Dropdown
              body="ПРО ШКОЛУ"
              links={aboutBlockLinks}
              icon="building"
              onClick={handleClose}
            />
            <Dropdown
              body="КУРСИ"
              links={coursesLinks}
              icon="bookPlay"
              onClick={handleClose}
            />

            <Link href="/shop" className={cl.link} onClick={handleClose}>
              <Image alt="" src={getIconSrc("shop")} width={20} height={20} />
              КРАМНИЦЯ
            </Link>

            <Link href="/test-intro" className={cl.link} onClick={handleClose}>
              <Image alt="" src={getIconSrc("pc")} width={20} height={20} />
              ОНЛАЙН-ТЕСТ
            </Link>

            <Link href="/library" className={cl.link} onClick={handleClose}>
              <Image alt="" src={getIconSrc("bank")} width={20} height={20} />
              БІБЛІОТЕКА
            </Link>

            <Link href="/contacts" className={cl.link} onClick={handleClose}>
              <Image
                alt=""
                src={getIconSrc("contact")}
                width={20}
                height={20}
              />
              КОНТАКТИ
            </Link>
          </div>
          <ContentCard width="305px" className={cl.card}>
            <div className={cl.buttons}>
              <Link href="/join" onClick={handleClose}>
                <Button className={cl.button}>Долучитись</Button>
              </Link>

              <Link
                href="https://school.tanpopo.com.ua/login"
                onClick={handleClose}
              >
                <Button className={cl.button}>Вхід</Button>
              </Link>
            </div>
            <div className={cl.caption}>
              <>
                Найбільший освітній портал <br /> японської мови в Україні.
              </>
            </div>
            <div className={cl.icons}>{getSocialIconsLinks("35px")}</div>
          </ContentCard>
        </Dialog>
      </div>
    </header>
  );
};

function Burger({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={getValidClassNames(cl.burgerIcon, isOpen && cl.open)}>
      <div className={cl.first}></div>
      <div className={cl.second}></div>
      <div className={cl.third}></div>
    </div>
  );
}
