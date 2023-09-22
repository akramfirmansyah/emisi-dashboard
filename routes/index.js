const { Router } = require("express");
const TamlanRoutes = require("./tamlan/tamlan.routes");
const EngineeringRoutes = require("./engineering/engineering.routes");

const route = Router();

route.use("/tamalanrea", TamlanRoutes);
route.use("/engineering", EngineeringRoutes);

module.exports = route;
