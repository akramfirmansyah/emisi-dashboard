const { Router } = require("express");

const route = Router();

route.get("/", async (req, res, next) => {
  try {
    res.render("engineering");
    return;
  } catch (error) {
    next(error);
  }
});

module.exports = route;
