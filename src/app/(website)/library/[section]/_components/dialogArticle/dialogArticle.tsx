"use client";
import { ContentCard, Dialog, Typography, Loading } from "@/components";
import cl from "./dialogArticle.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ILibraryItem } from "@/models/LibraryItem";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";
import { CardFooter } from "../libraryItemCard/cardFooter/cardFooter";
import { Media } from "./media/media";
import { NewLabel } from "../libraryItemCard/newLabel/newLabel";
import { Suspense, useEffect, useState } from "react";

import { getColor } from "@/helpers/getLibraryItemColors";
import { useWindowSize } from "@uidotdev/usehooks";

interface Props {
  page: string;
}
const DialogArticle: React.FC<Props> = ({ page }) => {
  const { width } = useWindowSize();
  const isMobile = Boolean(width && width < 678);
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const isNew = searchParams.get("new") === "true";

  const [item, setItem] = useState<ILibraryItem | undefined | null>(null);
  const [loading, setLoading] = useState(true);

  const handleClose = () => {
    router.push(`${path}?page=${page}`, { scroll: false });
  };

  useEffect(() => {
    const getLibraryItem = async (articleUrl: string) => {
      try {
        const response = await fetch(`/api/libraryItem?url=${articleUrl}`);

        if (!response.ok) {
          setLoading(false);
          throw new Error("Couldn't find the library item");
        }

        const itemDb = (await response.json()) as ILibraryItem;

        itemDb.labelColor = getColor(itemDb.labelColor);

        setItem(JSON.parse(JSON.stringify(itemDb)));
        setLoading(false);
      } catch (err: any) {
        console.log(err);
      }
    };
    const articleUrl = searchParams.get("url");
    getLibraryItem(articleUrl as string);
  }, [searchParams]);

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      className={cl.dialog}
      contentClassName={cl.content}
      scroll="paper"
      label={
        <ContentCard
          cardBgColor={item?.labelColor}
          className={cl.label}
          width="70%"
        >
          <Typography variant="body1">{item?.label}</Typography>
          {isNew && isMobile && <NewLabel position="center" />}
        </ContentCard>
      }
    >

      {loading ? (
        <div className={cl.loader}>
          <Loading heightAuto />
        </div>
      ) : !item ? (
        <Typography
          variant="h5"
          style={{ marginBottom: "40px" }}
          align="center"
        >
          Сталася помилка або данного матеріалу більше не існує😥
        </Typography>
      ) : (
        <>
          <Suspense fallback={<></>}>
            {isNew && !isMobile && <NewLabel className={cl.newLabel} />}
          </Suspense>
          <div className={cl.gallery}>
            <Media item={item} />
          </div>

          <LibraryItemContent item={item} isDialog={true} />
          <CardFooter item={item} />
        </>
      )}
    </Dialog>
  );
};

export default DialogArticle;
