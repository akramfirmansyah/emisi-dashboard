const { Schema, model } = require('mongoose');
const schemaSensor = require("../schemas/sensorNode.schema");

const schemaSensorNode = new Schema(schemaSensor, {
  timestamps: true,
  collection: "node3"
});

const SensorNode3 = model('SensorNode3', schemaSensorNode);

module.exports = SensorNode3;