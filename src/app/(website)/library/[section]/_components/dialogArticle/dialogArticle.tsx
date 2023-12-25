"use client";
import { ContentCard, Dialog, Typography } from "@/components";
import cl from "./dialogArticle.module.scss";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { ILibraryItem } from "@/models/LibraryItem";
import { LibraryItemContent } from "@/app/(website)/library/[section]/_components/libraryItemContent/libraryItemContent";
import { Footer } from "../libraryItemCard/footer/footer";
import { Media } from "./media/media";
import { NewLabel } from "../libraryItemCard/newLabel/newLabel";

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

  const item = items.find((item) => item._id === id) as ILibraryItem;

  const handleClose = () => {
    router.push(`${path}?page=${page}`, { scroll: false });
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      className={cl.dialog}
      contentClassName={cl.content}
      scroll="paper"
    >
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
    </Dialog>
  );
};

export default DialogArticle;
