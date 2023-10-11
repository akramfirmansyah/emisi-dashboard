const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const http = require("http");
const mqtt = require("mqtt");
const socketIo = require("socket.io");

require("dotenv").config();

// Inisialisasi koneksi MQTT ke broker MQTT
const mqttClient = mqtt.connect("mqtt://broker.emqx.io:1883");

// Atur koneksi MQTT
mqttClient.on("connect", () => {
  console.log("Terhubung ke broker MQTT");
  mqttClient.subscribe("emisiUNHAS");
});

// Tangani pesan MQTT yang diterima
mqttClient.on("message", (topic, message) => {
  if (topic === "emisiUNHAS") {
    io.emit("mqtt-emisiUNHAS", message.toString());
  }
});

const routes = require("./routes");
const notFound = require("./middleware/notFound");
const serverError = require("./middleware/serverError");
const connect = require("./db");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// middleware
app.use(compression());
app.use(helmet());
app.use(cors());

connect();

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-inline' https://www.google-analytics.com https://cdn.jsdelivr.net https://unpkg.com/;"
  );
  next();
});

// Set Views root folder
app.set("views", "./views");

// Set EJS as Views Engine
app.set("view engine", "ejs");

// Set Public folder
app.use("/emisi/public", express.static("public"));

app.use("/emisi/node_modules", express.static(__dirname + "/node_modules"));

app.get("/emisi", (req, res, next) => {
  res.render("index");
});

app.use("/", routes);

app.use(notFound);
app.use(serverError);

io.on("connection", (socket) => {
  console.log("Client Connected on Socket ", socket);
});

const port = process.env.PORT ?? 3000;
const host = process.env.WEB_HOST ?? "http://localhost";

server.listen(port, () => {
  console.log(`Listen on ${host}:${server.address().port}`);
});
