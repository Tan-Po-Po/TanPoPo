import cl from "./page.module.scss";
import LibraryItem, { ILibraryItem } from "@/models/LibraryItem";
import dbConnect from "@/config/dbConnect";
import { DialogGallery, Pagination } from "@/components";
import { LibraryItemCard } from "../../[section]/_components/libraryItemCard/libraryItemCard";
import DialogArticle from "./_components/serverDialogArticle";
import { getLibraryItems } from "../../[section]/@content/page";
import { getLibraryAccess } from "@/helpers/getLibraryAccess";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 900;

const getPostData = async (postUrl: string) => {
  await dbConnect();
  const itemDb = (await LibraryItem.findOne({ url: postUrl })
    .populate("media.image")
    .lean()) as ILibraryItem;

  if (!itemDb) {
    return null;
  }
  const item = JSON.parse(JSON.stringify(itemDb)) as ILibraryItem;

  return item;
};

export async function generateMetadata({
  params,
}: {
  params: { postUrl: string };
}): Promise<Metadata> {
  const postData = await getPostData(params.postUrl);

  return {
    title: postData?.tabTitle,
    description: postData?.pageDescription,
  };
}

interface Props {
  params: { postUrl: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Content: React.FC<Props> = async ({ params, searchParams }) => {
  const postData = await getPostData(params.postUrl);
  if (!postData) {
    return notFound();
  }

  const accessGranted = await getLibraryAccess(postData.section);
  if (!accessGranted) {
    redirect(`/library/${postData.section}`);
  }

  const data = await getLibraryItems(postData.section, "1");

  return (
    <main className={cl.contentMain}>
      <div className={cl.cards}>
        {!data?.items
          ? "Наразі ми працюємо над контентом для цього розділу"
          : data.items.map((item, i) => (
              <LibraryItemCard key={item._id!} {...item} isNew={i < 2} />
            ))}

        <DialogArticle postData={postData} />
        <DialogGallery />
      </div>
      {data && data.lastPage > 1 && (
        <Pagination pages={data.lastPage} className={cl.pagination} />
      )}
    </main>
  );
};
export default Content;
