const { Schema, model } = require('mongoose');
const schemaSensor = require("../schemas/sensorNode.schema");

const schemaSensorNode = new Schema(schemaSensor, {
  timestamps: true,
  collection: "node1"
});

const SensorNode1 = model('SensorNode1', schemaSensorNode);

module.exports = SensorNode1;