var map = L.map("map").setView([-5.23114, 119.502528], 17);

L.tileLayer(
  "https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=sfHNL4IHHmzOiJZf4jtd",
  {
    maxZoom: 18,
    attribution: "",
  }
).addTo(map);

var markers = [
  {
    coordinates: [-5.23114, 119.502528],
    popupText: `<div class="container__node">
          <h5 class="">Engineering</h5>
          <div class="container__sensor">
            <div class="card__sensor">
              <p>CO2</p>
              <span>Test Co2</span>
            </div>
            <div class="card__sensor">
              <p>Noise</p>
              <span>Test Noise</span>
            </div>
            <div class="card__sensor">
              <p>Temperature</p>
              <span>Test Temp</span>
            </div>
            <div class="card__sensor">
              <p>Humidity</p>
              <span>Test Hum</span>
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
