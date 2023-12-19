import cl from "./page.module.scss";

import { Typography } from "@/components";
import { LibraryNav } from "./_components/libraryNav/libraryNav";
import { cookies } from "next/headers";
import { validateKey } from "./actions";
import { librarySections } from "@/config/librarySections";

const getLibraryAccess = async (params: string) => {
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

interface Props {
  password: React.ReactNode;
  content: React.ReactNode;
  params: {
    section: string;
  };
}

const LibrarySectionLayout: React.FC<Props> = async ({
  password,
  content,
  params,
}) => {
  const accessGranted = await getLibraryAccess(params.section);
  return (
    <div className={cl.layout}>
      <Typography variant="h3">БІБЛІОТЕКА TANPOPO</Typography>
      <LibraryNav />
      {accessGranted ? content : password}
    </div>
  );
};

export default LibrarySectionLayout;
