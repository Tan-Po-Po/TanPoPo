import { useEffect, useState } from "react";
import Content from "./@content/page";
import Password from "./@password/page";

import { validateKey } from "./actions";
import { Loading } from "@/components";
import { cookies } from "next/headers";

const getLibraryAccess = async () => {
  const isPrivate = JSON.parse(cookies().get("isPrivate")?.value as string);

  if (!isPrivate) {
    return true;
  }

  const key = cookies().get("libraryKey")?.value;

  if (!key) {
    return false;
  }

  const isKeyValid = await validateKey(key);
  return isKeyValid;
};

const Section = async () => {
  const accessGranted = await getLibraryAccess();
  return <div>{accessGranted ? <Content /> : <Password />}</div>;
};
export default Section;
