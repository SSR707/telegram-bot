import { Keyboard } from "grammy";

export const keyboard = new Keyboard()
.text("🔙 Orqaga Qaytish")
.resized()
.oneTime();

export const keyboardMenu = new Keyboard()
.text("🔙ASOSIY SAHIFAGA QAYTISH")
.resized()
.oneTime();