const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const toastRoutes = require("./routes/toastRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", toastRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Toast Server is running on http://localhost:${config.port}`);
});
