"use client";

import { Dialog } from "@/components";
import cl from "./previewDialog.module.scss";
import { useRouter } from "next/navigation";
import { ILibraryItem } from "@/models/LibraryItem";
import { LibraryItemCard } from "@/app/(website)/library/[section]/_components/libraryItemCard/libraryItemCard";

interface Props {
  postData: ILibraryItem;
  isNew: boolean;
}

const PreviewDialogArticle: React.FC<Props> = ({ postData, isNew }) => {
  const router = useRouter();

  const handleClose = () => {
    router.push(`/library/${postData.section}?page=1`, { scroll: false });
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      className={cl.dialog}
      contentClassName={cl.content}
      scroll="paper"
    >
      <LibraryItemCard {...postData} isNew={isNew} isPreview />
    </Dialog>
  );
};

export default PreviewDialogArticle;
