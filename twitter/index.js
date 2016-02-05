import express from 'express';
import bodyParser from 'body-parser';
import * as post from './actions/post';
import * as get from './actions/get';
import {mapUrl, middleware} from './utils/url.js';
var pe = require('pretty-error').start();
import http from 'http';
import SocketIo from 'socket.io';
import {Tweet} from './socket/tweet';
import {StoreSocket} from './socket/store';

///////////////////////////////////////////////////
var port = process.env.PORT_TWITTER || 3040;
var host = process.env.HOST || 'localhost';
const app = express();
const server = new http.Server(app);

const io = SocketIo(server);
const store = StoreSocket(io);
const stream = Tweet(io, store);
io.path('/twitter');
app.use(bodyParser.json());

app.get('/account', (req, res)=>{
  middleware(req, res, get);
});
app.post('/account', (req, res)=>{
  middleware(req, res, post);
});
app.get('/tweet/*', (req, res)=>{
  console.log('pero que pasa??===!');
  //const [nameAccount] = req.params;
  stream(req.params[0]);
  middleware(req, res, get);
});
const bufferSize = 100;
const messageBuffer = new Array(bufferSize);
let messageIndex = 0;

if (port)
{
  const runnable = app.listen(port, (err) => {
    if (err) {
      console.error(err);
    }
    //console.info('----\n==>::::TWITTER is running on port %s', port);
    console.info('==>:::TWITTER is running at http://%s:%s', host, port);
  });
  io.listen(runnable);
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
