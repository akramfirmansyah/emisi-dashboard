var map = L.map("map").setView([-5.1356687, 119.4901275], 16);

L.tileLayer(
  "https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=sfHNL4IHHmzOiJZf4jtd",
  {
    maxZoom: 18,
    attribution: "",
  }
).addTo(map);

var markers = [
  {
    coordinates: [-5.13307, 119.488603],
    popupText: `<div class="container__node">
          <h5 class="">Rectorate</h5>
          <div class="container__sensor">
            <div class="card__sensor">
              <p>CO2</p>
              <span id="rectorateCo2">0</span>
            </div>
            <div class="card__sensor">
              <p>Noise</p>
              <span id="rectorateNoise">0</span>
            </div>
            <div class="card__sensor">
              <p>Temperature</p>
              <span id="rectorateTemp">0</span>
            </div>
            <div class="card__sensor">
              <p>Humidity</p>
              <span id="rectorateHum">0</span>
            </div>
          </div>
        </div>`,
  },
  {
    coordinates: [-5.140262, 119.488634],
    popupText: `<div class="container__node">
          <h5 class="">Gate 1</h5>
          <div class="container__sensor">
            <div class="card__sensor">
              <p>CO2</p>
              <span id="gate1Co2">0</span>
            </div>
            <div class="card__sensor">
              <p>Noise</p>
              <span id="gate1Noise">0</span>
            </div>
            <div class="card__sensor">
              <p>Temperature</p>
              <span id="gate1Temp">0</span>
            </div>
            <div class="card__sensor">
              <p>Humidity</p>
              <span id="gate1Hum">0</span>
            </div>
          </div>
        </div>`,
  },
  {
    coordinates: [-5.135506, 119.496015],
    popupText: `<div class="container__node">
          <h5 class="">Gate 2</h5>
          <div class="container__sensor">
            <div class="card__sensor">
              <p>CO2</p>
              <span id="gate2Co2">0</span>
            </div>
            <div class="card__sensor">
              <p>Noise</p>
              <span id="gate2Noise">0</span>
            </div>
            <div class="card__sensor">
              <p>Temperature</p>
              <span id="gate2Temp">0</span>
            </div>
            <div class="card__sensor">
              <p>Humidity</p>
              <span id="gate2Hum">0</span>
            </div>
          </div>
        </div>`,
  },
];

markers.forEach((marker) => {
  L.marker(marker.coordinates)
    .addTo(map)
    .bindPopup(marker.popupText, {
      closeOnClick: false,
      autoClose: false,
    })
    .openPopup();
});
