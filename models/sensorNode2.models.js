const { Schema, model } = require('mongoose');
const schemaSensor = require("../schemas/sensorNode.schema");

const schemaSensorNode = new Schema(schemaSensor, {
  timestamps: true,
  collection: "node2"
});

const SensorNode2 = model('SensorNode2', schemaSensorNode);

module.exports = SensorNode2;