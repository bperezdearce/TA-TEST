import 'dotenv/config'
import express from "express"
import indexRouter from "./routes/recoveryRouter"

const server = express();

server.use(express.json);
server.use(indexRouter)

const port = process.env.PORT || 3000;

server.listen(port);