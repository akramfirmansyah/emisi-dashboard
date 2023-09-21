const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
require('dotenv').config();

const routes = require("./routes");
require("./db");

const app = express();

// middleware
app.use(compression());
app.use(helmet());
app.use(cors())

// Set Views root folder
app.set("views", "./views");

// Set EJS as Views Engine
app.set("view engine", "ejs");

app.use("/", routes);

const port = process.env.PORT ?? 3000;
const host = process.env.WEB_HOST ?? 'http://localhost';

app.listen(port, () => {
  console.log(`Listen on ${host}:${port}`);
});
