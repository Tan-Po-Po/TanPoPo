"use client";
import { Button, ContentCard, Dialog, CartButton } from "@/components";
import cl from "./headerNarrow.module.scss";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { getIconSrc, getSocialIconsLinks, getValidClassNames } from "@/helpers";
import TanPoPoIcon from "/public/logo/tanPoPo.svg";
import { useEffect, useState } from "react";
import { Slide } from "@mui/material";
import { Dropdown } from "./dropdown/dropdown";
import { aboutLinks, coursesLinks } from "../links";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const HeaderNarrow = () => {
  const { isTablet, isMobile } = useAppSelector(selectWindowMatchMedia);
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

  return (
    <header className={cl.headerNarrow}>
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
              links={aboutLinks}
              icon="building"
              onClick={handleClose}
            />
            <Dropdown
              body="КУРСИ"
              links={coursesLinks}
              icon="bookPlay"
              onClick={handleClose}
            />

            <Link href="/shop" className={cl.link}>
              <Image alt="" src={getIconSrc("shop")} width={20} height={20} />
              КРАМНИЦЯ
            </Link>

            <Link href="/test-intro" className={cl.link}>
              <Image alt="" src={getIconSrc("pc")} width={20} height={20} />
              ОНЛАЙН-ТЕСТ
            </Link>

            <Link href="/library" className={cl.link}>
              <Image alt="" src={getIconSrc("bank")} width={20} height={20} />
              БІБЛІОТЕКА
            </Link>

            <Link href="/contacts" className={cl.link}>
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
              <Link href="/join">
                <Button className={cl.button}>Долучитись</Button>
              </Link>

              <Link href="/join">
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
