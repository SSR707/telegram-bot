import express from "express";
import { bot } from "./src/bot/index.js";
import { connectMongodb } from "./src/config/index.js";

const app = express();
const PORT = process.env.PORT || 3003;
const DOMAIN = process.env.DOMAIN;

connectMongodb();

app.use(express.json());
app.use(`/${process.env.BOT_TOKEN}`, bot.webhookCallback());

app.get("/", (req, res) => {
  res.send("Telegram bot ishlayapti!");
});

app.listen(PORT, () => {
  console.log(`Server ishlayapti: ${DOMAIN || "http://localhost"}:${PORT}`);
});
