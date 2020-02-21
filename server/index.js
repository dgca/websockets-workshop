const express = require('express');
const EventEmitter = require('events');
const cors = require('cors');
const app = express();
require('express-ws')(app);
app.use(cors());

const port = 3001;

/**
 * @todo:
 * 1. Create endpoint to fetch initial list of chirps
 * 2. Create a WebSocket endpoint so clients can subscribe to chirps
 * 3. Notify all subscribed clients when a client sends a chirp
 */

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
