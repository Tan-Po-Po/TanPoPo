import { OrderData } from "../type";
import ShopItem, { IShopProduct } from "@/models/ShopProduct";
import { getPromoCode } from "@/helpers/actions/getPromoCode";
import dbConnect from "@/config/dbConnect";

export const checkOrder = async ({ items, totalPrice, promoCode }: OrderData) => {
  let localTotalPrice = 0;
  // Check if all items are available and have correct price
  try {
    await dbConnect();
    for (const item of items) {
      const productDB = await ShopItem.findById(item._id).select(
        "large.available large.inDevelopment large.variants"
      );

      if (!productDB) {
        return {
          success: false,
          message:
            "Список продуктів оновився!\nБудь ласка, заповніть кошик ще раз🛒",
        };
      }
      
      const product: Partial<IShopProduct> = JSON.parse(
        JSON.stringify(productDB)
      );

      if (!product.large?.available || product.large?.inDevelopment) {
        return {
          success: false,
          message:
            "Список продуктів оновився!\nБудь ласка, заповніть кошик ще раз🛒",
          product: product._id,
        };
      }

      const variant = product.large?.variants.find(
        (variant) => variant.id === item.variantId
      );

      let isPriceEqual;
      if (item.price.sale && variant?.sale?.price) {
        isPriceEqual = variant.sale.price === item.price.sale;
        localTotalPrice = localTotalPrice + variant.sale.price * item.amount;
      } else {
        isPriceEqual = item.price.original === variant?.price;
        localTotalPrice = localTotalPrice + variant?.price! * item.amount;
      }

      if (!isPriceEqual) {
        return {
          success: false,
          message:
            "Ціна на обраний товар змінилась.\nБудь ласка, заповніть кошик ще раз🛒",
          product: product._id,
          variant: variant?.id,
        };
      } else if (!variant?.isAvailable) {
        return {
          success: false,
          message:
            "Список продуктів оновився!\nБудь ласка, заповніть кошик ще раз🛒",
          product: product._id,
          variant: variant?.id,
        };
      }
    }
    // Check total price and promo code if any
    localTotalPrice = Math.round(localTotalPrice);
    const code = await getPromoCode(promoCode?.code || "");

    if (code) {
      localTotalPrice -= Math.round(localTotalPrice * (code.perCent / 100));
    }

    if (localTotalPrice !== totalPrice.final) {
      return {
        success: false,
        message:
          "Ціна на обраний товар змінилась.\nБудь ласка, заповніть кошик ще раз🛒",
      };
    }

    return {
      success: true,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
};
