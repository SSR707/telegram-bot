import { keyboard } from "../keyboard/keyboard.js";
import { ElnSave } from "../utils/eln.utils.js";
import { JobLog, ShogirtLog, TeacherLog, TeamLog } from "../utils/log.utils.js";
export const sendOn = async (ctx) => {
  const category = ctx.message.text.split(' ')[1] + ' ' + ctx.message.text.split(' ')[2]
  if (category === "ISH KERAK" && !process.meyData.category) {
    process.meyData.category  = "ISH KERAK";
    process.meyData.name = true;
  }
  if (category === "USTOZ KERAK" && !process.meyData.category) {
    process.meyData.category = "USTOZ KERAK";
    process.meyData.name = true;
  }
  if (category === "SHOGIRD KERAK" && !process.meyData.category) {
    process.meyData.category = "SHOGIRD KERAK";
    process.meyData.name = true;
  }
  if (category === "SHERIK KERAK" && !process.meyData.category) {
    process.meyData.category = "SHERIK KERAK";
    process.meyData.name = true;
  }
  if (!process.meyData.category) {
    return;
  }
  console.log();
  if (process.meyData.name) {
    process.meyData.category = "ISH KERAK";
    await ctx.reply(`👨‍💼 Ism, familiyangizni kiriting:`, {
      reply_markup: keyboard,
    });
    process.meyData.name = false;
  } else if (!process.meyData.fullname) {
    process.meyData.user_id = ctx.update.message.from.id;
    process.meyData.tg_link = "@" + ctx.update.message.from.username;
    process.meyData.fullname = ctx.message.text;
    await ctx.reply(`🕑  Yoshingizni  kiriting:`, {
      reply_markup: keyboard,
    });
  } else if (!process.meyData.age) {
    process.meyData.age = ctx.message.text;
    await ctx.reply(`📚 Qanday texnologiyalarni bilasiz:`, {
      reply_markup: keyboard,
    });
  } else if (!process.meyData.technology) {
    process.meyData.technology = ctx.message.text;
    await ctx.reply(`📞 Telifon raqamingizni kiriting:`, {
      reply_markup: keyboard,
    });
  } else if (!process.meyData.phone) {
    process.meyData.phone = ctx.message.text;
    await ctx.reply(`🌐 Ishlash hududingizni kiriting :`, {
      reply_markup: keyboard,
    });
  } else if (!process.meyData.region) {
    process.meyData.region = ctx.message.text;
    await ctx.reply(`💰 Siz ishlamoqchi bolgan narxni kiriting :`, {
      reply_markup: keyboard,
    });
  } else if (!process.meyData.price) {
    process.meyData.price = ctx.message.text;
    await ctx.reply(`👨🏻‍💻kasbingizni kirting kiriting :`, {
      reply_markup: keyboard,
    });
  } else if (
    !process.meyData.work_place &&
    process.meyData.category === "ISH KERAK"
  ) {
    process.meyData.work_place = ctx.message.text;
    await ctx.reply(`🕰 murojat qilish vaqtini kiriting :`, {
      reply_markup: keyboard,
    });
  } else if (!process.meyData.call_time) {
    process.meyData.call_time = ctx.message.text;
    await ctx.reply(`🔎 Maqsadingizni kiriting kiriting :`, {
      reply_markup: keyboard,
    });
  } else if (!process.meyData.info) {
    process.meyData.info = ctx.message.text;
    if (process.meyData.category === "ISH KERAK") {
      delete process.meyData.name;
      const log = JobLog(process.meyData);
      await ctx.reply(log, {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Tasdiqlash ✅", callback_data: "SendOk" }],
            [{ text: "Bekor qilish ❌", callback_data: "SendNo" }],
          ],
        },
      });
    } else if (process.meyData.category === "USTOZ KERAK") {
      delete process.meyData.name;
      const log = TeacherLog(process.meyData);
      await ctx.reply(log, {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Tasdiqlash ✅", callback_data: "SendOk" }],
            [{ text: "Bekor qilish ❌", callback_data: "SendNo" }],
          ],
        },
      });
    } else if (process.meyData.category === "SHOGIRD KERAK") {
      delete process.meyData.name;
      const log = ShogirtLog(process.meyData);
      await ctx.reply(log, {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Tasdiqlash ✅", callback_data: "SendOk" }],
            [{ text: "Bekor qilish ❌", callback_data: "SendNo" }],
          ],
        },
      });
    } else if (process.meyData.category === "SHERIK KERAK") {
      delete process.meyData.name;
      const log = TeamLog(process.meyData);
      await ctx.reply(log, {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Tasdiqlash ✅", callback_data: "SendOk" }],
            [{ text: "Bekor qilish ❌", callback_data: "SendNo" }],
          ],
        },
      });
    }
  }
};

export const callback_query = async (ctx) => {
  let callbackData = ctx.callbackQuery.data;
  if (callbackData === "SendOk") {
    await ctx.reply(`Ma'lumot muvaffaqiyatli kanalga joylandi`, {
      parse_mode: "HTML",
      reply_markup: keyboard,
    });
    await ElnSave(process.meyData)
    process.meyData = {};
  } else if (callbackData === "SendNo") {
    await ctx.deleteMessage();
    await ctx.reply(`Malumot Bekor Qilindi`, {
      parse_mode: "HTML",
      reply_markup: keyboard,
    });
    process.meyData = {};
  }
};
