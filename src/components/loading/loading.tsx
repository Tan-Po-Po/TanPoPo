import React from "react";
import cl from "./loading.module.scss";
import Image from "next/image";

const Loading = () => {
  return (
    <div className={cl.logoWrapper}>
      <Image className={cl.logo} alt="Logo" src="/logo/logo.svg" width={300} height={300} />
    </div>
  );
};

export { Loading };
