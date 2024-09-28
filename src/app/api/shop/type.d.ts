import { FormData } from "@/components/orderForm/formData";
import { IShopCart } from "@/redux/slices/shopCart/shopCartSlice";

export type OrderData = FormData &
  IShopCart & {
    totalPrice: {
      original: number;
      final: number;
    };
  };
