"use server";

import { cookies } from "next/headers";

export const setCookieForPrivateLibraryItem = async (isPrivate: boolean) => {
  cookies().set("isPrivate", isPrivate.toString(), { secure: true });
};
