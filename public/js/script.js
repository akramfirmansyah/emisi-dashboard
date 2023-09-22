var map = L.map("map").setView([-5.136848, 119.491301], 16);

L.tileLayer(
  "https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=sfHNL4IHHmzOiJZf4jtd",
  {
    maxZoom: 18,
  }
).addTo(map);

L.marker([-5.13307, 119.488603])
  .addTo(map)
  .bindPopup("<h1>Rektorat</h1>")
  .openPopup();
