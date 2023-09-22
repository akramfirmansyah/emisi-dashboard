const { Router } = require("express");
const SensorNode1 = require("../../models/sensorNode1.models");
const SensorNode2 = require("../../models/sensorNode2.models");
const SensorNode3 = require("../../models/sensorNode3.models");

const route = Router();

route.get("/", async (req, res, next) => {
  const promises = [
    SensorNode1.findOne({}, {}, { sort: { _id: 1 } }),
    SensorNode2.findOne({}, {}, { sort: { _id: 1 } }),
    SensorNode3.findOne({}, {}, { sort: { _id: 1 } }),
  ];

  const data = await Promise.all(promises);

  let sumAirTemperature = 0;
  let sumCo2 = 0;
  let sumHumidity = 0;
  let sumNoise = 0;

  const nodeCount = Object.keys(data).length;

  for (const nodeKey in data) {
    const node = data[nodeKey];
    sumAirTemperature += node.airTemperature;
    sumCo2 += node.co2;
    sumHumidity += node.humadity;
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
    avgNoise
  };

  const details = {
    rectorate: data[0],
    gate1: data[1],
    gate2: data[2],
    avarage
  };

  res.render('tamanlanrea', { details })
});

module.exports = route;
