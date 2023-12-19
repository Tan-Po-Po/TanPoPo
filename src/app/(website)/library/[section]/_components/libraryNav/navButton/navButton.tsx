"use client";
import { librarySections } from "@/config/librarySections";
import cl from "./navButton.module.scss";
import Link from "next/link";
import { ContentCard, Typography } from "@/components";
import Image from "next/image";
import { getIconSrc, getValidClassNames } from "@/helpers";
import { usePathname, useRouter } from "next/navigation";

type Props = (typeof librarySections)[0];

export const NavButton: React.FC<Props> = ({ href, icon, body, isPrivate }) => {
  const pathName = usePathname();

  const isActive = href.includes(pathName);

  return (
    <Link href={href}>
      <ContentCard
        width="fit-content"
        className={getValidClassNames(cl.navButton, isActive && cl.active)}
      >
        <Typography variant="body2" style={{ fontWeight: "600" }}>
          {body}
        </Typography>
        <Image
          alt=""
          src={getIconSrc(icon)}
          width={40}
          height={40}
          style={{ width: "15px", height: "auto" }}
        />
      </ContentCard>
    </Link>
  );
};
