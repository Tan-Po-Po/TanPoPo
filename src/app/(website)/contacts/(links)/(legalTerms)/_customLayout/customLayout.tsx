"use client";

import { Button, ContentCard, Typography } from "@/components";
import cl from "./customLayout.module.scss";
import Link from "next/link";
import { textContent } from "./textContent";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getIconArtSrc } from "@/helpers";

type PageName = "oferta" | "confidentialityPolicy";

export const CustomLayout = () => {
  const pathName = usePathname();

  const getPageName = () => {
    return pathName.split("/")[2] as PageName;
  };

  const pageName = getPageName();

  return (
    <div className={cl.customLayout}>
      <div className={cl.block1}>
        <div className={cl.links}>
          <div className={cl.line}></div>

          <Button variant="outlined" className={cl.button}>
            <Link href={textContent.links.confidentialityPolicy.href}>
              <Typography variant="body1">
                {textContent.links.confidentialityPolicy.title}
              </Typography>
            </Link>
          </Button>

          <Button variant="outlined" className={cl.button}>
            <Link href={textContent.links.oferta.href}>
              <Typography variant="body1">
                {textContent.links.oferta.title}
              </Typography>
            </Link>
          </Button>
        </div>

        <Image
          alt=""
          width={500}
          height={300}
          style={{ width: "auto", height: "auto" }}
          src={getIconArtSrc("toriGate3")}
        />

        <ContentCard
          width="726px"
          cardBgColor="linear-gradient(180deg, #FFF, #FFFBD8 100%"
        >
          <Typography variant="h3">
            {textContent.plate[pageName].tittle}
          </Typography>
          <Typography variant="body2">
            {textContent.plate[pageName].caption}
          </Typography>
        </ContentCard>
      </div>
    </div>
  );
};
