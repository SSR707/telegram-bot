import { Ads } from "../model/eln.model.js"

export const ElnSave = async (data) => {
    const elnData = new Ads()
    await elnData.save()

}