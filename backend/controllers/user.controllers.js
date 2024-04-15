import { USER_EMAIL } from "../config/index.js";
import { transporter } from "../gmail/index.js";
export const sendMailToUserController = async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: USER_EMAIL, // sender address
      to: "thakurarvindkr10@gmail.com, thakurarvindk10@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>This is a test mail I am sending to you arvind Kumar</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send(info.messageId);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" || error.message });
  }
};
