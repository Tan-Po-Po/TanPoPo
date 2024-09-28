import mongoose from "mongoose";

export interface IOrder {
  _id: string;
  orderId: string;
  data: string; // form and order data in JSON
}

const OrdersSchema = new mongoose.Schema<IOrder>(
  {
    orderId: { type: String, required: true },
    data: { type: String, required: true },
  },
  { collection: "orders" }
);

export default mongoose.models.Orders || mongoose.model("Orders", OrdersSchema);
