import mongoose, { Schema } from "mongoose";

const erqresearchQAnsSchema = new Schema(
  {
    category: String,
    number: String,
    fbtool: String,
    questionAnswer: String,
  },

  {
    timestamps: true,
  }
);

const ErqresearchQAns = mongoose.models.ErqresearchQAns || mongoose.model("ErqresearchQAns", erqresearchQAnsSchema);

export default ErqresearchQAns;
