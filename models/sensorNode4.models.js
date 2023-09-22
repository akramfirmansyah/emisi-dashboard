const { Schema, model } = require('mongoose');
const schemaSensor = require("../schemas/sensorNode.schema");

const schemaSensorNode = new Schema(schemaSensor, {
  timestamps: true,
  collection: "node4"
});

const SensorNode4 = model('SensorNode4', schemaSensorNode);

module.exports = SensorNode4;