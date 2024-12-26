import { Keyboard } from "grammy";
import { getEln } from "../utils/eln.utils.js";
import { JobLog, ShogirtLog, TeacherLog, TeamLog } from "../utils/log.utils.js";
import { keyboardMenu } from "../keyboard/keyboard.js";

export const addSend = async (ctx) => {
  process.meyData = {};
  const keyboard = new Keyboard()
    .text("👨🏻‍💻 ISH KERAK")
    .text("🎓 USTOZ KERAK")
    .row()
    .text("🎓 SHOGIRD KERAK")
    .text("👨🏼‍💼 SHERIK KERAK")
    .row()
    .text("🔙ASOSIY SAHIFAGA QAYTISH")
    .resized()
    .oneTime();

  await ctx.reply(`<b>Ozngizga kerek bolgan bolimni tanglang:</b>`, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
};

export const getAds = async (ctx) => {
  const AllData = await getEln(ctx.update.message.from.id);
  for (let value of AllData) {
    let log;
    if (value.category === "USTOZ KERAK") {
      log = TeacherLog(value);
    } else if (value.category === "ISH KERAK") {
      log = JobLog(value);
    } else if (value.category === "SHOGIRD KERAK") {
      log = ShogirtLog(value);
    } else if (value.category === "SHERIK KERAK") {
      log = TeamLog(value);
    }
    await ctx.reply(log, {
      reply_markup: {
        inline_keyboard: [[{ text: "Ochirish 🚮", callback_data: value._id }]],
      },
    });
  }
  await ctx.reply(
    `Malumotlarni kanaldan ochirmoqchi bolsangiz
Ochirish 🚮 ⬅️ tugmasini bosing
`,
    {
      reply_markup: keyboardMenu,
    }
  );
};
