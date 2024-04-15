import { createTransport } from "nodemailer";
import { USER_EMAIL, USER_PASSWORD } from "../config/index.js";
export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: USER_EMAIL,
    pass: USER_PASSWORD,
  },
});
