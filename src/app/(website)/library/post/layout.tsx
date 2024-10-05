import cl from "./page.module.scss";

import { Typography } from "@/components";
import { getLibraryAccess } from "@/helpers/getLibraryAccess";
import { Metadata } from "next";
import { LibraryNav } from "../[section]/_components/libraryNav/libraryNav";

export const metadata: Metadata = {
  title: "Бібліотека | TanPoPo",
};
interface Props {
  children: any;
}

const LibrarySectionLayout: React.FC<Props> = async ({ children }) => {

  return (
    <div className={cl.layout}>
      <Typography variant="h3" align="center">
        БІБЛІОТЕКА TANPOPO
      </Typography>
      <LibraryNav />
      {children}
    </div>
  );
};

export default LibrarySectionLayout;
