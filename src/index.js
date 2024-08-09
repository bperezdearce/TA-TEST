import 'dotenv/config'
import express from "express"
import indexRouter from "./routes/indexRouter"

const server = express();

server.use(express.json);
server.use(indexRouter)

server.get("/", function(req, res) {
    console.log("servidor corriendo en el 3000")
})

const port = process.env.PORT || 3000;

server.listen(port);



