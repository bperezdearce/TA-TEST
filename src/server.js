import express from 'express';
import recoveryRouter from './routes/recoveryRouter.js';

const server = express();

server.use(express.json());
server.use(recoveryRouter);

export default server;