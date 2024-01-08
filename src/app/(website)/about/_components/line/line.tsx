import { getIconSrc, getValidClassNames } from "@/helpers";
import cl from "./line.module.scss";
import Image from "next/image";

export function Line({
  position = "center",
  flag,
  height,
}: {
  position?: "left" | "center" | "right";
  flag?: "ua" | "jp";
  height?: string;
}) {
  return (
    <div className={cl.lineWrapper} style={{ height: height }}>
      <div
        className={getValidClassNames(cl.line, cl[position])}
        data-flag={flag}
      >
        {flag && (
          <Image
            alt=""
            src={getIconSrc(`flag${flag.toUpperCase()}`)}
            width={500}
            height={300}
          />
        )}
      </div>
    </div>
  );
}
