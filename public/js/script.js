var map = L.map("map", {
  center: [-5.1334425, 119.4877655],
  zoom: 13,
});

L.marker([-5.1334425, 119.4877655])
  .addTo(map)
  .bindPopup("<p>A pretty CSS popup.<br> Easily customizable.</p>")
  .openPopup();
