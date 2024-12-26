import { Keyboard } from "grammy";
import { getById, UserSave } from "../utils/user.utils.js";

export const start = async (ctx) => {
  const keyboard = new Keyboard()
    .text("Elon berish 📝")
    .text("Elonlarimni Korish 📑")
    .row()
    .resized()
    .oneTime();
  const user = await getById(ctx.update.message.from.id);
  if (!user) {
    await UserSave(ctx);
    await ctx.reply(
      `<b>Assalom alaykum ${ctx.update.message.from.first_name}
DeveloperJobsUz kanalining rasmiy botiga xush kelibsiz!
  
/help yordam buyrugi orqali nimalarga qodir ekanligimni bilib oling!</b>`,
      { parse_mode: "HTML", reply_markup: keyboard }
    );
  } else {
    await ctx.reply(
      `<b>BOSH SAXIFA
  
/help yordam buyrugi orqali nimalarga qodir ekanligimni bilib oling!</b>`,
      { parse_mode: "HTML", reply_markup: keyboard }
    );
  }
};
