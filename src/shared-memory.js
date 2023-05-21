const cluster = require('cluster');
const { PrimaryMemory } = require('./primary-memory');
const { WorkerMemory } = require('./worker-memory');

module.exports = {
  sharedMemory: cluster.isPrimary ? new PrimaryMemory() : new WorkerMemory(),
};
