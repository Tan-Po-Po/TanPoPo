import { validateKey } from "@/app/(website)/library/[section]/actions";
import { librarySections } from "@/config/librarySections";
import { cookies } from "next/headers";

export const getLibraryAccess = async (params: string) => {
  const section = librarySections.find((section) =>
    section.href.includes(params)
  );

  if (!section!.isPrivate) {
    return true;
  }

  const key = cookies().get("libraryKey")?.value;

  if (!key) {
    return false;
  }

  const isKeyValid = await validateKey(key);
  return isKeyValid;
};
