import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IPromoCode } from "@/models/PromoCode";
import { getShopItemFromDb } from "./ations";

export type ICartItem = {
  _id: string;
  name: string;
  label: string;
  amount: number;
  price: { original: number; sale: number };
  images: string[];
};

export interface IShopCart {
  items: ICartItem[] | [];
  loading: boolean;
  promoCode: IPromoCode | null;
}

const shopCartLS =
  typeof window !== "undefined" && localStorage.getItem("shopCart");

const initialState: IShopCart = shopCartLS
  ? (() => {
      const cart = JSON.parse(shopCartLS);
      cart.loading = false;
      return cart;
    })()
  : {
      items: [],
      loading: false,
      promoCode: null,
    };

export const getShopItemFromDbAndAddToCart = createAsyncThunk(
  "shopItem/fetchByIdAndValue",

  async ({ id, value }: { id: string; value: string }, thunkAPI) => {
    return await getShopItemFromDb(id, value);
  }
);

export const shopCartSlice = createSlice({
  name: "shopCart",
  initialState,
  reducers: {
    increaseItemAmount: (state, action: PayloadAction<Partial<ICartItem>>) => {
      state.items.find((item) => item._id === action.payload._id)!.amount++;
      localStorage.setItem("shopCart", JSON.stringify(state));
      return state;
    },
    decreaseItemAmount: (state, action: PayloadAction<Partial<ICartItem>>) => {
      state.items.find((item) => item._id === action.payload._id)!.amount--;
      localStorage.setItem("shopCart", JSON.stringify(state));
      return state;
    },
    deleteCartItem: (state, action: PayloadAction<Partial<ICartItem>>) => {
      const items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("shopCart", JSON.stringify({ ...state, items }));
      return { ...state, items };
    },
    addPromoCode: (state, action: PayloadAction<IPromoCode>) => {
      state.promoCode = action.payload;
      localStorage.setItem("shopCart", JSON.stringify(state));
      return state;
    },
    deletePromoCode: (state) => {
      state.promoCode = null;
      localStorage.setItem("shopCart", JSON.stringify(state));
      return state;
    },
    clearShopCart: (state) => {
      localStorage.removeItem("shopCart");
      state.items = [];
      state.promoCode = null;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShopItemFromDbAndAddToCart.fulfilled, (state, action) => {
        state.items.push(action.payload as never);
        state.loading = false;
        localStorage.setItem("shopCart", JSON.stringify(state));
      })
      .addCase(getShopItemFromDbAndAddToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getShopItemFromDbAndAddToCart.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  increaseItemAmount,
  decreaseItemAmount,
  deleteCartItem,
  addPromoCode,
  deletePromoCode,
  clearShopCart,
} = shopCartSlice.actions;

export const selectShopCart = (sate: RootState): IShopCart => {
  return sate.shopCart;
};

export default shopCartSlice.reducer;
