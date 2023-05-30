const cluster = require('cluster');
const { ioc } = require('@toxo/ioc');
const { PrimaryMemory } = require('./primary-memory');
const { WorkerMemory } = require('./worker-memory');

function getSharedMemory() {
  let sharedMemory = ioc.get('sharedMemory');
  if (!sharedMemory) {
    sharedMemory = cluster.isPrimary ? new PrimaryMemory() : new WorkerMemory();
    ioc.register('sharedMemory', sharedMemory);
  }
  return sharedMemory;
}

module.exports = {
  getSharedMemory,
};
