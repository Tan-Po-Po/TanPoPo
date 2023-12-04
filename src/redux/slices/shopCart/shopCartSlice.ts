import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export type ICartItem = {
  _id: string;
  name: string;
  label: string;
  amount: number;
  price: { original: number; sale: number | undefined };
  images: string[];
};

export interface IShopCart {
  items: ICartItem[] | [];
  loading: boolean;
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
    };

export const getShopItemFromDbAndAddToCart = createAsyncThunk(
  "shopItem/fetchByIdAndValue",

  async ({ id, value }: { id: string; value: string }, thunkAPI) => {
    const response = await fetch(`/api/shopItem?id=${id}&value=${value}`);
    console.log("add to cart res", response);

    return response.json();
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

export const { increaseItemAmount, decreaseItemAmount } = shopCartSlice.actions;

export const selectShopCart = (sate: RootState): IShopCart => {
  return sate.shopCart;
};

export default shopCartSlice.reducer;
