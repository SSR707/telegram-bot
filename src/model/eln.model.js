import mongoose from "mongoose";

const adsSchema = new mongoose.Schema(
  {
    category: String,
    user_id: String,
    tg_link: String,
    fullname: String,
    age: String,
    phone: String,
    technology: String,
    work_place: String,
    price: String,
    region: String,
    call_time: String,
    info: String,
    post_id: { type: String,default:'dsagdf' }
  },
);

export const Ads = mongoose.model("advertisements", adsSchema);
