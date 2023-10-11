const socket = io();

socket.on("mqtt-emisiUNHAS", (datas) => {
  const jsondata = JSON.parse(datas);

  // data Rectorate
  document.getElementById("rectorateCo2").innerHTML = jsondata.rectorate.co2;
  document.getElementById("rectorateNoise").innerHTML =
    jsondata.rectorate.noise;
  document.getElementById("rectorateTemp").innerHTML =
    jsondata.rectorate.temperature;
  document.getElementById("rectorateHum").innerHTML =
    jsondata.rectorate.humidity;

  // data Gate 1
  document.getElementById("gate1Co2").innerHTML = jsondata.gate1.co2;
  document.getElementById("gate1Noise").innerHTML = jsondata.gate1.noise;
  document.getElementById("gate1Temp").innerHTML = jsondata.gate1.temperature;
  document.getElementById("gate1Hum").innerHTML = jsondata.gate1.humidity;

  // data Gate 2
  document.getElementById("gate2Co2").innerHTML = jsondata.gate2.co2;
  document.getElementById("gate2Noise").innerHTML = jsondata.gate2.noise;
  document.getElementById("gate2Temp").innerHTML = jsondata.gate2.temperature;
  document.getElementById("gate2Hum").innerHTML = jsondata.gate2.humidity;

  // data Average
  document.getElementById("averageCo2").innerHTML =
    getAverageCo2(jsondata).toFixed(1);
  document.getElementById("averageNoise").innerHTML =
    getAverageNoise(jsondata).toFixed(1);
  document.getElementById("averageTemp").innerHTML =
    getAverageTemp(jsondata).toFixed(1);
  document.getElementById("averageHum").innerHTML =
    getAverageHum(jsondata).toFixed(2);
});

function getAverageCo2(data) {
  let sumCo2 = 0;
  let count = 0;

  for (const loc in data) {
    sumCo2 += data[loc].co2;
    count++;
  }

  const resultCo2 = sumCo2 / count;

  return resultCo2;
}

function getAverageNoise(data) {
  let sumNoise = 0;
  let count = 0;

  for (const loc in data) {
    sumNoise += data[loc].noise;

    count++;
  }

  const resultNoise = sumNoise / count;

  return resultNoise;
}

function getAverageTemp(data) {
  let sumTemp = 0;
  let count = 0;

  for (const loc in data) {
    sumTemp += data[loc].temperature;

    count++;
  }

  const resultTemp = sumTemp / count;

  return resultTemp;
}

function getAverageHum(data) {
  let sumHum = 0;
  let count = 0;

  for (const loc in data) {
    sumHum += data[loc].humidity;

    count++;
  }

  const resultHum = sumHum / count;

  return resultHum;
}
