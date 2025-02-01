import { model, Schema } from "mongoose";

const companySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Users" },
  name: { type: String, required: true },
  count: { type: Number, required: true },
});

export const COMPANY = model("company", companySchema);
