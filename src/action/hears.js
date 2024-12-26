import { Keyboard } from "grammy";

export const addSend = async (ctx) => {
  process.meyData = {};
  const keyboard = new Keyboard()
    .text("ISH KERAK")
    .text("USTOZ KERAK")
    .row()
    .text("SHOGIRD KERAK")
    .text("SHERIK KERAK")
    .row()
    .text("ASOSIY SAHIFAGA QAYTISH")
    .resized()
    .oneTime();

  await ctx.reply(`<b>Ozngizga kerek bolgan bolimni tanglang:</b>`, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
};
