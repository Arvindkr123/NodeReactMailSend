import { Router } from "express";
import { sendMailToUserController } from "../controllers/user.controllers.js";
const router = Router();

router.post("/", sendMailToUserController);

export default router;
