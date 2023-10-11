const socket = io();

socket.on("mqttRectorateCo2", (data) => {
  document.getElementById("rectorateCo2").innerText = data;
});
