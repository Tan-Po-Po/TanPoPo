import React from "react";
import cl from "./loading.module.scss";
import Image from "next/image";

const Loading = () => {
  return (
    <div className={cl.logoWrapper}>
      <Image className={cl.logo} alt="Logo" src="/logo/logo.svg" width={165} height={165} />
    </div>
  );
};

export { Loading };
