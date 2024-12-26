import { Ads } from "../model/eln.model.js";

export const ElnSave = async (data) => {
  const elnData = new Ads(data)
  await elnData.save();
};
export const getEln = async (id) => {
    return Ads.find({user_id: id})
  };
  