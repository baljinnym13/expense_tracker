const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { logger } = require("./middlewares/logger");

const userRoutes = require("./routes/user-route");
const categoryRoutes = require("./routes/category-route");
const authRoutes = require("./routes/auth-route");
const recordsRoutes = require("./routes/records-route");
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/records", recordsRoutes);
app.use("/users", userRoutes); // localhost:8008/users/profile;
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа.`);
});
