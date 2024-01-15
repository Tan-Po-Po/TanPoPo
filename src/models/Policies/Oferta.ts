import mongoose from "mongoose";
import { IPolicy } from "./interface";

const OfertaSchema = new mongoose.Schema<IPolicy>(
  {
    content: [
      {
        title: String,
        text: { type: String, required: true },
      },
    ],
  },
  { collection: "ofertas" }
);

export default mongoose.models.Oferta || mongoose.model("Oferta", OfertaSchema);
