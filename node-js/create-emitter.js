const events = require("events");

function createEmitter(onOpen, onClose) {    
  const eventEmitter = new events.EventEmitter();
  eventEmitter.once('open', onOpen);
  eventEmitter.once('close', onClose);
  return eventEmitter;
}

function opened(emitter) {
  emitter.emit('open');
}
function closed(emitter) {
  emitter.emit('close');
}

let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;