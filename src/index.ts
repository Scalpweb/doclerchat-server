import * as express from 'express';
import * as http from 'http';
import SocketServer from './socket';

const port = process.env.PORT || 3003;

const server = express();
const router = express.Router();

router.get('/', (_, res) => {
  res.send('<h1>Docler Chat</h1>');
});

server.use(router);

const gate = http.createServer(server);
gate.listen(port, () => {
  console.log('listening on', port);
});

const socket = new SocketServer(gate);
socket.start();
