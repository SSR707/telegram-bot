import { Ads } from "../model/eln.model.js";

export const ElnSave = async (data) => {
  const elnData = new Ads(data)
  await elnData.save();
};
export const getEln = async (id) => {
    return Ads.find({user_id: id})
  };
  
export const deleteEln = async (id) => {
    await Ads.findByIdAndDelete(id)
}

export const getElnId = async (id) => {
    return Ads.findOne({_id: id})
  };
  