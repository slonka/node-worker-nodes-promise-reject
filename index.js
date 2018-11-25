const WorkerNodes = require('worker-nodes');
const path = require('path');
const worker = new WorkerNodes(path.resolve(__dirname, 'mod.js'));

worker.call.with().then(msg => console.log(msg)).catch(e => console.error('failed with error'));
worker.call.without().then(msg => console.log(msg)).catch(e => console.error('failed without'));

worker.terminate().then(() => console.log('terminated'));
