import { ILibraryItem } from "@/models/LibraryItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Params {
  autoplay?: "0" | "1";
  item: ILibraryItem;
}

export const useOpenLibraryItem = ({ autoplay, item }: Params) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const openLibraryItem = () => {
    if (
      item.type === "reels" ||
      (item.type === "music" && !item.content![0].href?.includes("youtube"))
    ) {
      window.open(
        (item.gallery?.length && item.gallery[0].video) ||
          item!.content![0].href!,
        "_ blank"
      );
    } else {
      router.push(
        `${path}?page=${searchParams.get("page")}&id=${item._id}&autoplay=${
          autoplay || "0"
        }`,
        {
          scroll: false,
        }
      );
    }
  };
  return { router, path, searchParams, openLibraryItem };
};
