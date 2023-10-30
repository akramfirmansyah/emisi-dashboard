const { Router } = require("express");
const SensorNode4 = require("../../models/sensorNode4.models");

const route = Router();

route.get("/", async (req, res, next) => {
  try {
    const data = await Promise.all([
      SensorNode4.findOne({}, {}, { sort: { _id: 1 } }),
    ]);

    // Random
    function getRandomValue(min, max, previousValue) {
      const range = max - min;
      const randomChange = (Math.random() - 0.5) * (range * 0.1); // Menggunakan perubahan maksimum 10% dari rentang
      const newValue = previousValue + randomChange;
    
      // Memastikan nilai tetap dalam rentang yang diizinkan
      if (newValue < min) {
        return min;
      } else if (newValue > max) {
        return max;
      }
    
      return newValue;
    }

    function generateRandomData(previousData) {
      const data = {
        airTemperature: getRandomValue(32, 37, previousData.airTemperature),
        noise: getRandomValue(60, 92, previousData.noise),
        co2: getRandomValue(400, 800, previousData.co2),
        humidity: getRandomValue(67, 89, previousData.humidity),
      };
    
      return data;
    }

    let initialData = {
      airTemperature: 32 + (Math.random() * 5), // Mulai dari antara 32-37
      noise: 60 + (Math.random() * 32), // Mulai dari antara 60-92
      co2: 400 + (Math.random() * 400), // Mulai dari antara 400-800
      humidity: 67 + (Math.random() * 22), // Mulai dari antara 67-89
    };
    const dataPoints = [];
    for (let i = 0; i < 3; i++) {
      initialData = generateRandomData(initialData);
      dataPoints.push(initialData);
    }

    let sumAirTemperature = 0;
    let sumCo2 = 0;
    let sumHumidity = 0;
    let sumNoise = 0;

    const nodeCount = Object.keys(dataPoints).length;

    for (const nodeKey in dataPoints) {
      const node = dataPoints[nodeKey];
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
      engineering: dataPoints[0],
      avarage,
    };

    res.render("engineering", { details });
    return;
  } catch (error) {
    next(error);
  }
});

module.exports = route;
