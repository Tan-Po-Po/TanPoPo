import { SERVER_URL } from "@/config/config";
import { IShopProduct } from "@/models/ShopProduct";

export const getShopItems = async (): Promise<IShopProduct[]> => {
  const response = await fetch(`${SERVER_URL}/api/shopItems`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    next: { revalidate: 3600 },
  });

  return response.json();
};
