import cl from "./page.module.scss";
import LibraryItem, { ILibraryItem } from "@/models/LibraryItem";
import dbConnect from "@/config/dbConnect";
import { DialogGallery } from "@/components";
import { LibraryItemCard } from "../../[section]/_components/libraryItemCard/libraryItemCard";
import DialogArticle from "./_components/serverDialogArticle/serverDialogArticle";
import { getLibraryItems } from "../../[section]/@content/page";
import { getLibraryAccess } from "@/helpers/getLibraryAccess";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getColor } from "@/helpers/getLibraryItemColors";
import { headers } from "next/headers";
import PreviewDialogArticle from "./_components/previewDialog/previewDialog";

export const revalidate = 900;

const getPostData = async (postUrl: string) => {
  await dbConnect();
  const itemDb = (await LibraryItem.findOne({ url: postUrl })
    .populate("media.image")
    .populate("content.images.image")
    .lean()) as ILibraryItem;

  if (!itemDb) {
    return null;
  }
  itemDb.labelColor = getColor(itemDb.labelColor);
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

  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isGoogleBot = userAgent.toLowerCase().includes("googlebot");
  const accessGranted =
    isGoogleBot || (await getLibraryAccess(postData.section));

  const data = await getLibraryItems(postData.section, "1");

  return (
    <main className={cl.contentMain}>
      <div className={cl.cards}>
        {!data?.items
          ? "Наразі ми працюємо над контентом для цього розділу"
          : data.items.map((item, i) => (
              <LibraryItemCard key={item._id!} {...item} isNew={i < 2} />
            ))}

        {accessGranted ? (
          <DialogArticle postData={postData} />
        ) : (
          <PreviewDialogArticle
            postData={postData}
            isNew={data?.items
              .slice(0, 3)
              .some((item) => item._id === postData._id) ?? false}
          />
        )}
        <DialogGallery />
      </div>
    </main>
  );
};
export default Content;
