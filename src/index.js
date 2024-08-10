import 'dotenv/config'
import express from "express"
import indexRouter from "./routes/recoveryRouter"

const server = express();

server.use(express.json);
server.use(indexRouter)

const port = process.env.PORT || 5147;

server.listen(port);