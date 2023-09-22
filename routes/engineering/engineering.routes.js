const { Router } = require("express");
const SensorNode4 = require("../../models/sensorNode4.models");

const route = Router();

route.get("/", async (req, res, next) => {
  try {
    const data = await Promise.all([
      SensorNode4wewe.findOne({}, {}, { sort: { _id: 1 } })
    ]);

    let sumAirTemperature = 0;
    let sumCo2 = 0;
    let sumHumidity = 0;
    let sumNoise = 0;

    const nodeCount = Object.keys(data).length;

    for (const nodeKey in data) {
      const node = data[nodeKey];
      sumAirTemperature += node.airTemperature;
      sumCo2 += node.co2;
      sumHumidity += node.humidity;
      sumNoise += node.noise;
    }

    const avgAirTemperature = sumAirTemperature / nodeCount;
    const avgCo2 = sumCo2 / nodeCount;
    const avgHumidity = sumHumidity / nodeCount;
    const avgNoise = sumNoise / nodeCount;

    const avarage = {
      avgAirTemperature,
      avgCo2,
      avgHumidity,
      avgNoise,
    };

    const details = {
      engineering: data[0],
      avarage,
    };

    res.render("tamalanrea", { details });
    return;
  } catch (error) {
    next(error);
  }
});

module.exports = route;
