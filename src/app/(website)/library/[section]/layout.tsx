import cl from "./page.module.scss";

import { Typography } from "@/components";
import { LibraryNav } from "./_components/libraryNav/libraryNav";
import { getLibraryAccess } from "@/helpers/getLibraryAccess";

interface Props {
  password: React.ReactNode;
  content: React.ReactNode;
  modalArticle: React.ReactNode;
  children: React.ReactNode;
  params: {
    section: string;
  };
}

const LibrarySectionLayout: React.FC<Props> = async ({
  password,
  content,
  params,
  modalArticle,
  children,
}) => {
  // const accessGranted = await getLibraryAccess(params.section);
  return (
    <div className={cl.layout}>
      <Typography variant="h3">БІБЛІОТЕКА TANPOPO</Typography>
      <LibraryNav />
      {children}
      {modalArticle}
      {/* {accessGranted ? content : password} */}
    </div>
  );
};

export default LibrarySectionLayout;
