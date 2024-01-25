import React from "react";
import cl from "./loading.module.scss";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";

const Loading = ({ heightAuto }: { heightAuto?: boolean }) => {
  return (
    <div
      className={getValidClassNames(
        cl.logoWrapper,
        heightAuto && cl.heightAuto
      )}
    >
      <Image
        className={cl.logo}
        alt="Logo"
        src="/logo/logo.svg"
        width={165}
        height={165}
      />
    </div>
  );
};

export { Loading };
