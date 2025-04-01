import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Sakamote Store",
};