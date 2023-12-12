import { ICartItem } from "@/redux/slices/shopCart/shopCartSlice";
import path from "path";

export const parseImages = (items: ICartItem[]) => {
  return items.map((item, index) => {
    const imagePath = item.images[0].split("/");
    const itemName = imagePath[2];
    const imageName = imagePath[3];

    return {
      filename: imageName,
      path: path.join(process.cwd(), "public", "shop", itemName, imageName),
      cid: `item${index}`,
    };
  });
};
