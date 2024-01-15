"use client";

import { Button, ContentCard, Typography } from "@/components";
import cl from "./layout.module.scss";
import Link from "next/link";
// import { textContent } from "textContent";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import { textContent } from "./textContent";
import { getPageName } from "@/helpers/getPageName";

export type PageName = "oferta" | "confidentialityPolicy";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const pathName = usePathname();
  console.log("pathName", pathName);

  const pageName = getPageName(pathName) as PageName;

  return (
    <div className={cl.layout}>
      <div className={cl.block1}>
        <Image
          alt=""
          width={500}
          height={300}
          style={{ width: "auto", height: "auto" }}
          src={getIconArtSrc("toriGate3")}
        />
        <div className={cl.links}>
          <Link
            href={textContent.links.confidentialityPolicy.href}
            className={cl.link}
          >
            <ContentCard
              className={getValidClassNames(
                cl.linkCard,
                pageName === "confidentialityPolicy" && cl.active
              )}
              width="618px"
            >
              <Typography variant="h3">
                {textContent.plate.confidentialityPolicy.tittle}
              </Typography>
              <Typography variant="body2">
                {textContent.plate.confidentialityPolicy.caption}
              </Typography>
            </ContentCard>
          </Link>

          <Link href={textContent.links.oferta.href} className={cl.link}>
            <ContentCard
              className={getValidClassNames(
                cl.linkCard,
                pageName === "oferta" && cl.active
              )}
              width="484px"
            >
              <Typography variant="h3">
                {textContent.plate.oferta.tittle}
              </Typography>
              <Typography variant="body2">
                {textContent.plate.oferta.caption}
              </Typography>
            </ContentCard>
          </Link>
        </div>
      </div>
      <div className={cl.text}>{children}</div>
    </div>
  );
};

export default Layout;
