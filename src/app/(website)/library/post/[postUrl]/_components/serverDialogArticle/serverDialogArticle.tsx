"use client";

import { ContentCard, Dialog, Typography } from "@/components";
import cl from "./styles.module.scss";
import { useRouter } from "next/navigation";
import { ILibraryItem } from "@/models/LibraryItem";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";

import { Media } from "../../../../[section]/_components/dialogArticle/media/media";
import { CardFooter } from "../../../../[section]/_components/libraryItemCard/cardFooter/cardFooter";

interface Props {
  postData: ILibraryItem;
}

const DialogArticle: React.FC<Props> = ({ postData }) => {
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
      label={
        <ContentCard
          cardBgColor={postData.labelColor}
          className={cl.label}
          width="70%"
        >
          <Typography variant="body1">{postData.label}</Typography>
        </ContentCard>
      }
    >
      <>
        <div className={cl.gallery}>
          <Media item={postData} />
        </div>

        <LibraryItemContent item={postData} isDialog={true} />
        <CardFooter item={postData} />
      </>
    </Dialog>
  );
};

export default DialogArticle;
