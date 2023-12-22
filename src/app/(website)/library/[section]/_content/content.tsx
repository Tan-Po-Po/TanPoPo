import LibraryItem, {
  ILibraryItem,
  ILibraryItemDocument,
} from "@/models/LibraryItem";
import cl from "./page.module.scss";
import dbConnect from "@/config/dbConnect";
import { LibraryCard } from "@/components";
import { LibraryItemCard } from "../_components/libraryItemCard/libraryItemCard";
import { getColor } from "@/helpers/getLibraryItemColors";
import { Section } from "../../section";

const libraryItems: ILibraryItem[] = [
  {
    label: " Картинка-Аніме:”Наруто”",
    section: "bonus-start",
    type: "article",
    labelColor: "#FFE6D8 #FFF5DB",
    gallery: [
      {
        type: "image",
        image: "/public/temp/library/narutoIMGHeader.jpg",
      },
    ],
    hashtags: [
      { value: "N5/N3+", color: "#E7FFD3" },
      { value: "#тварини" },
      { value: "#рослини" },
      { value: "#візуалізація" },
    ],
    content: [
      {
        type: "paragraph",
        value:
          "Це корисне джерело інформації для тих, хто цікавиться біорізноманіттям цієї країни. Нехай ця таблиця стане вам корисним джерелом знань про природу Японії і допоможе вам поглибити розуміння цієї унікальної країни.",
      },
      { type: "header", value: " Заголовок для тексту нижче!" },
      {
        type: "paragraph",
        value:
          "У таблиці ви знайдете назви різних видів тварин та рослин, що характерні для різних регіонів Японії, а також короткий опис їхніх основних характеристик. Здійснюйте подорож цією таблицею, щоб таблиці ви знайдете назви різних видів тварин та рослин, що характерні для різних регіонів Японії, а також",
      },
      { type: "link", value: "https://www.youtube.com/watch?v=2Vcy8huku_Q" },
      {
        type: "text",
        value:
          "їхніх основних характеристик. Здійснюйте подорож цією таблицею, щоб дізнатися більше про різноманітність і велич природи Японії та вивчити інтересні назви тварин та рослин на японській мові.",
      },
      { type: "image", value: "/public/temp/library/narutoIMGHeader.jpg" },
    ],
  },
];

const addLibraryItemsToDb = async () => {
  await dbConnect();

  libraryItems.forEach(async (item) => {
    const itemDb = await new LibraryItem(item);

    console.log("libraryItemDb", itemDb);

    await itemDb.save();
  });
};

const getLibraryItems = async (
  section: string
): Promise<ILibraryItem[] | null> => {
  await dbConnect();

  const itemsDb = (await LibraryItem.find({
    section: section,
  }).lean()) as ILibraryItem[];

  if (!itemsDb.length) {
    return null;
  }

  const items: ILibraryItem[] = itemsDb.map((item) =>
    JSON.parse(JSON.stringify(item))
  );
  items.forEach((item) => (item.labelColor = getColor(item.labelColor)));
  return items;
};

interface Props {
  params: { section: Section };
}

const Content: React.FC<Props> = async ({ params }) => {
  console.clear();
  // await addLibraryItemsToDb();
  console.log("section", params.section);

  const items = await getLibraryItems(params.section);
  console.log("libraryItems", items);

  return (
    <main className={cl.contentMain}>
      {!items
        ? "Наразі ми працюємо над контентом для цього розділу"
        : items.map((item, i) => (
            <LibraryItemCard key={item._id!} {...item} isNew={i < 2} />
          ))}
    </main>
  );
};
export default Content;
