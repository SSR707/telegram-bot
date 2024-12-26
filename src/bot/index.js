import { Bot } from "grammy";
import { start } from "../command/command.js";
import { addSend, getAds } from "../action/hears.js";
import { callback_query, sendOn } from "../action/on.js";
process.meyData = {};

export const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", start);
bot.hears("🔙ASOSIY SAHIFAGA QAYTISH", start);
bot.hears("Elon berish 📝", addSend);
bot.hears("Elonlarimni Korish 📑", getAds);
bot.hears("🔙 Orqaga Qaytish", addSend);
bot.on("message:text", sendOn);
bot.on("callback_query", callback_query);
