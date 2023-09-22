const { Router } = require("express");
const TamlanRoutes = require("./tamlan/tamlan.routes");

const route = Router();

route.use("/tamalanrea", TamlanRoutes);

module.exports = route;
