import { Router } from express;
import "dotenv/config"

const recoveryRouter = { Router }

recoveryRouter.get("/", function(req, res) {
    console.log("servidor corriendo en el 3000")                         
})

export default recoveryRouter;