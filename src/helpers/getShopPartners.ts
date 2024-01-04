import { SERVER_URL } from "@/config/config";
import { IShopPartner } from "@/models/ShopPartner";

export const getShopPartners = async (): Promise<IShopPartner[]> => {
  const response = await fetch(`${SERVER_URL}/api/shopPartners`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    next: { revalidate: 3600 },
  });

  return response.json();
};
