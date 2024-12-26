import express from "express";
import { bot } from "./bot/index.js";
import { connectMongodb } from "./config/index.js";

const app = express();
const PORT = process.env.PORT || 3000;
const DOMAIN = process.env.DOMAIN;

// MongoDB ulanishini chaqiring
connectMongodb();

app.use(express.json());
app.use(`/${process.env.BOT_TOKEN}`, bot.webhookCallback());

app.get("/", (req, res) => {
  res.send("Telegram bot ishlayapti!");
});

app.listen(PORT, () => {
  console.log(`Server ishlayapti: ${DOMAIN || "http://localhost"}:${PORT}`);
});
