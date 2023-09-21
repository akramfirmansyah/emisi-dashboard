const express = require("express");
const port = 8080;
const app = express();

const routes = require("./routes");

// Set Views root folder
app.set("views", "./views");

// Set EJS as Views Engine
app.set("view engine", "ejs");

app.use("/", routes);
// app.get("/tamlan", (req, res) => {
//   return res.render("tamlan", {
//     title: "Dashboard Emisi",
//     message: "Adit",
//   });
// });

app.listen(port, () => {
  console.log(`Listen on http://localhost:${port}`);
});
