import { ILibraryItem } from "@/models/LibraryItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Params {
  autoplay?: "0" | "1";
  isNew?: boolean;
  item: ILibraryItem;
}

export const useOpenLibraryItem = ({ autoplay, item, isNew }: Params) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const openLibraryItem = () => {
    if (
      item.type === "reels" ||
      (item.type === "music" && !item.media![0].video?.includes("youtube"))
    ) {
      window.open(item.media[0].video, "_ blank");
    } else {
      router.push(
        `${path}?page=${searchParams.get("page")}&id=${item._id}&autoplay=${
          autoplay || "0"
        }&new=${isNew}`,
        {
          scroll: false,
        }
      );
    }
  };
  return { router, path, searchParams, openLibraryItem };
};
