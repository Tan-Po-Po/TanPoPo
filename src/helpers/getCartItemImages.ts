import { IShopProduct } from "@/models/ShopProduct";
import { IMAGE_BASE_URL } from "@/config/config";
interface Params {
  gallery: IShopProduct["large"]["gallery"];
  itemValue: string;
}

export const getCartItemImages = ({ gallery, itemValue }: Params) => {
  const valueSet = new Set(itemValue.split(" "));
  const images: string[] = [];

  for (const img of gallery) {
    if (valueSet.has(img.value!)) {
      images.push(`${IMAGE_BASE_URL}/${img.image.filename}`);
      if (images.length >= 2) {
        break;
      }
    }
  }

  if (!images.length) {
    images.push(
      `${IMAGE_BASE_URL}/${gallery[0].image.filename}`,
      `${IMAGE_BASE_URL}/${gallery[1].image.filename}`
    );
  }

  return images;
};
