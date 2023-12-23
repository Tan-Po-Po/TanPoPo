import LibraryItem, {
  ILibraryItem,
  ILibraryItemDocument,
} from "@/models/LibraryItem";
import cl from "./page.module.scss";
import dbConnect from "@/config/dbConnect";
import { Dialog, DialogGallery, LibraryCard } from "@/components";
import { LibraryItemCard } from "../_components/libraryItemCard/libraryItemCard";
import { getColor } from "@/helpers/getLibraryItemColors";
import DialogArticle from "../_components/dialogArticle/dialogArticle";

// const libraryItems: ILibraryItem[] = [
//   {
//     label: " Картинка-Аніме:”Наруто”",
//     section: "bonus-start",
//     type: "article",
//     labelColor: "#FFE6D8 #FFF5DB",
//     gallery: [
//       {
//         type: "image",
//         image: "/public/temp/library/narutoIMGHeader.jpg",
//       },
//     ],
//     hashtags: [
//       { value: "N5/N3+", color: "#E7FFD3" },
//       { value: "#тварини" },
//       { value: "#рослини" },
//       { value: "#візуалізація" },
//     ],
//     content: [
//       {
//         type: "paragraph",
//         value:
//           "Це корисне джерело інформації для тих, хто цікавиться біорізноманіттям цієї країни. Нехай ця таблиця стане вам корисним джерелом знань про природу Японії і допоможе вам поглибити розуміння цієї унікальної країни.",
//       },
//       { type: "header", value: " Заголовок для тексту нижче!" },
//       {
//         type: "paragraph",
//         value:
//           "У таблиці ви знайдете назви різних видів тварин та рослин, що характерні для різних регіонів Японії, а також короткий опис їхніх основних характеристик. Здійснюйте подорож цією таблицею, щоб таблиці ви знайдете назви різних видів тварин та рослин, що характерні для різних регіонів Японії, а також",
//       },
//       { type: "link", value: "https://www.youtube.com/watch?v=2Vcy8huku_Q" },
//       {
//         type: "text",
//         value:
//           "їхніх основних характеристик. Здійснюйте подорож цією таблицею, щоб дізнатися більше про різноманітність і велич природи Японії та вивчити інтересні назви тварин та рослин на японській мові.",
//       },
//       { type: "image", value: "/public/temp/library/narutoIMGHeader.jpg" },
//     ],
//   },
// ];

// const addLibraryItemsToDb = async () => {
//   await dbConnect();

//   libraryItems.forEach(async (item) => {
//     const itemDb = await new LibraryItem(item);

//     console.log("libraryItemDb", itemDb);

//     await itemDb.save();
//   });
// };

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
    .skip(pageSize * cursor)
    .limit(pageSize)
    .lean()) as ILibraryItem[];

  if (!itemsDb.length) {
    return null;
  }

  const items: ILibraryItem[] = itemsDb.map((item) =>
    JSON.parse(JSON.stringify(item))
  );

  items.forEach((item) => (item.labelColor = getColor(item.labelColor)));

  let lastPage = Math.ceil(
    (await LibraryItem.countDocuments({ section: section })) / pageSize - 1
  );
  lastPage = lastPage < 0 ? 0 : lastPage;

  return { items: items, lastPage };
};

interface Props {
  params: { section: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Content: React.FC<Props> = async ({ params, searchParams }) => {
  const page = (searchParams.page as string) ?? "1";
  // console.log("page", searchParams.page);

  // await addLibraryItemsToDb();

  const data = await getLibraryItems(params.section, page);
  // console.log("data", data);

  return (
    <main className={cl.contentMain}>
      {!data?.items
        ? "Наразі ми працюємо над контентом для цього розділу"
        : data.items.map((item, i) => (
            <LibraryItemCard key={item._id!} {...item} isNew={i < 2} />
          ))}

      {data && searchParams.id && (
        <DialogArticle page={page} items={data!.items} />
      )}
      <DialogGallery />
    </main>
  );
};
export default Content;
