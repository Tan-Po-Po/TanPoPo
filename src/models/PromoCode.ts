import mongoose from "mongoose";

export interface IPromoCode {
  _id?: string;
  label?: string;
  date?: string;
  code: string;
  perCent: number;
  oneTimeUse: boolean;
}

export type IPromoCodeDocument = IPromoCode & Document;

const PromoCodeSchema = new mongoose.Schema<IPromoCodeDocument>(
  {
    label: String,
    date: String,
    code: { type: String, required: true },
    perCent: { type: Number, required: true },
    oneTimeUse: { type: Boolean, required: true },
  },
  { collection: "promo-codes" }
);

export default mongoose.models.PromoCode ||
  mongoose.model<IPromoCodeDocument>("PromoCode", PromoCodeSchema);
