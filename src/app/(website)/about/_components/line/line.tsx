import { getIconSrc, getValidClassNames } from "@/helpers";
import cl from "./line.module.scss";
import Image from "next/image";

export function Line({
  posititon = "center",
  flag,
}: {
  posititon?: "left" | "center" | "right";
  flag?: "ua" | "jp";
}) {
  return (
    <div className={cl.lineWrapper}>
      <div
        className={getValidClassNames(cl.line, cl[posititon])}
        data-flag={flag}
      >
        {flag && flag === "jp" ? (
          <Image alt="" src={getIconSrc("flagJP")} width={500} height={300} />
        ) : (
          <Image alt="" src={getIconSrc("flagUA")} width={500} height={300} />
        )}
      </div>
    </div>
  );
}
