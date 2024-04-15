import express from "express";
import { PORT } from "./backend/config/index.js";
import userRoutes from "./backend/routes/user.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
