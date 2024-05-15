import LibraryItem, { ILibraryItem } from "@/models/LibraryItem";
import cl from "./page.module.scss";
import dbConnect from "@/config/dbConnect";
import { DialogGallery, Pagination } from "@/components";
import { LibraryItemCard } from "../_components/libraryItemCard/libraryItemCard";
import { getColor } from "@/helpers/getLibraryItemColors";
import DialogArticle from "../_components/dialogArticle/dialogArticle";

export const revalidate = 900;

const getLibraryItems = async (
  section: string,
  page: string
): Promise<{ items: ILibraryItem[]; lastPage: number } | null> => {
  const pageSize = 16;
  const cursor = Number(page) - 1;

  await dbConnect();

  const itemsDb = (await LibraryItem.find({
    section: section,
  })
    .sort({
      createdAt: -1,
    })
    .skip(pageSize * cursor)
    .limit(pageSize)
    .populate("media.image")
    .lean()) as ILibraryItem[];

  if (!itemsDb.length) {
    return null;
  }

  const items: ILibraryItem[] = itemsDb.map((item) => {
    item.labelColor = getColor(item.labelColor);
    return JSON.parse(JSON.stringify(item));
  });

  let lastPage = Math.ceil(
    (await LibraryItem.countDocuments({ section: section })) / pageSize
  );
  lastPage = lastPage;

  return { items: items, lastPage };
};

interface Props {
  params: { section: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Content: React.FC<Props> = async ({ params, searchParams }) => {
  const page = (searchParams.page as string) ?? "1";

  const data = await getLibraryItems(params.section, page);

  return (
    <main className={cl.contentMain}>
      <div className={cl.cards}>
        {!data?.items
          ? "Наразі ми працюємо над контентом для цього розділу"
          : data.items.map((item, i) => (
              <LibraryItemCard
                key={item._id!}
                {...item}
                isNew={page === "1" && i < 2}
              />
            ))}

        {searchParams.id && <DialogArticle page={page} />}
        <DialogGallery />
      </div>
      {data && data.lastPage > 1 && (
        <Pagination pages={data.lastPage} className={cl.pagination} />
      )}
    </main>
  );
};
export default Content;
