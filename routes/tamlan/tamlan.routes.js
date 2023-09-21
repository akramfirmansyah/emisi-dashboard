const { Router } = require("express");

const route = Router();

route.get("/", (req, res, next) => {
  res.render("tamlan", {
    title: "Halaman tamlan",
    message: "datatatata",
  });
});

module.exports = route;
