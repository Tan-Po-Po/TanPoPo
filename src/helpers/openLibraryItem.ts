import { ILibraryItem } from "@/models/LibraryItem";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

interface Params {
  item: ILibraryItem;
  router: AppRouterInstance;
  path: string;
  searchParams: ReadonlyURLSearchParams;
  autoplay?: "0" | "1";
}

export const openLibraryItem = ({
  item,
  router,
  path,
  searchParams,
  autoplay,
}: Params) => {
  if (
    item.type === "reels" ||
    (item.type === "music" && !item.content![0].href?.includes("youtube"))
  ) {
    return window.open(
      item!.gallery![0].video! || item!.content![0].href!,
      "_ blank"
    );
  }
  router.push(
    `${path}?page=${searchParams.get("page")}&id=${item._id}&autoplay=${
      autoplay || "0"
    }`,
    {
      scroll: false,
    }
  );
};
