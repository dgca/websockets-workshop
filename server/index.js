const express = require('express');
const EventEmitter = require('events');
const cors = require('cors');
const app = express();
require('express-ws')(app);
app.use(cors());

/**
 * When any client sends us a new chirp, we want to notify all clients.
 * We'll do this using events and a list of callbacks.
 */
const clientCallbacks = new Set();

/**
 * Create event emitter to notify subscribers.
 */
const emitter = new EventEmitter();
const chirpEvent = 'chirpEvent';
emitter.on(chirpEvent, (chirp) => {
  console.log(clientCallbacks.size);
  clientCallbacks.forEach((cb) => cb(JSON.stringify(chirp)));
});

const port = 3001;

const chirps = [{
  name: 'dan_abramov',
  message: `Started from the <Button />, now we're here`
}];

app.ws('/feed-socket', (ws) => {
  console.log('Socket connection requested');

  /**
   * First, we create a event listener callback for this client.
   */
  const cb = (data) => ws.send(data);
  clientCallbacks.add(cb);

  /**
   * Then, we add an event listener so that when the client
   * sends us a message, we can do the following:
   * 1. Add it to the chirps array
   * 2. Emit an event so that subscribers may be notified
   */
  ws.on('message', (msg) => {
    const parsed = JSON.parse(msg);
    chirps.unshift(parsed);
    emitter.emit(chirpEvent, parsed);
  });

  /**
   * When the client closes the connection, we remove it's callback.
   */
  ws.on('close', () => {
    console.log('Socket connection closed');
    clientCallbacks.add(cb);
  });
});

app.get('/feed', (req, res) => {
  res.send(JSON.stringify(chirps));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
