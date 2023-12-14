import cl from "./page.module.scss";

import { Typography } from "@/components";
import { LibraryNav } from "./_components/libraryNav/libraryNav";

interface Props {
  children: React.ReactNode;
}

const LibrarySectionLayout: React.FC<Props> = async ({ children }) => {
  return (
    <div className={cl.layout}>
      <Typography variant="h3">БІБЛІОТЕКА TANPOPO</Typography>
      <LibraryNav />
      {children}
    </div>
  );
};

export default LibrarySectionLayout;
