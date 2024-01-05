"use client";
import { ContentCard, Dialog, Typography, Loading } from "@/components";
import cl from "./dialogArticle.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ILibraryItem } from "@/models/LibraryItem";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";
import { Footer } from "../libraryItemCard/footer/footer";
import { Media } from "./media/media";
import { NewLabel } from "../libraryItemCard/newLabel/newLabel";
import { useEffect, useState } from "react";
import { SERVER_URL } from "@/config/config";

interface Props {
  page: string;
  items: ILibraryItem[];
}
const DialogArticle: React.FC<Props> = ({ page, items }) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const isNew = searchParams.get("new");

  const [item, setItem] = useState<ILibraryItem | undefined | null>(null);
  const [loading, setLoading] = useState(true);
  const handleClose = () => {
    router.push(`${path}?page=${page}`, { scroll: false });
  };

  useEffect(() => {
    const getLibraryItem = async (id: string) => {
      try {
        const response = await fetch(`${SERVER_URL}/api/libraryItem?id=${id}`, {
          next: { revalidate: 1 },
        });

        if (!response.ok) {
          setLoading(false);
          throw new Error("Couldn't find the library item");
        }

        const itemDb = await response.json();
        setItem(JSON.parse(JSON.stringify(itemDb)));
        setLoading(false);
      } catch (err: any) {
        console.log(err);
      }
    };
    getLibraryItem(id as string);

    // let libraryItem = items.find((item) => item._id === id) as
    //   | ILibraryItem
    //   | undefined;
    // if (!libraryItem) {
    //   getLibraryItem(id as string);
    // } else {
    //   setItem(libraryItem);
    // }
  }, [id]);

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      className={cl.dialog}
      contentClassName={cl.content}
      scroll="paper"
    >
      {loading ? (
        <div className={cl.loader}>
          <Loading />
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
          {isNew && <NewLabel />}
          <ContentCard
            cardBgColor={item?.labelColor}
            className={cl.label}
            width="fit-content"
          >
            <Typography variant="body1">{item!.label}</Typography>
          </ContentCard>

          <div className={cl.gallery}>
            <Media item={item} />
          </div>

          <LibraryItemContent item={item} isDialog={true} />
          <Footer item={item} />
        </>
      )}
    </Dialog>
  );
};

export default DialogArticle;
