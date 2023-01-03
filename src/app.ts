//Libs  
import express, {json} from "express";
import cors from "cors";
import "dotenv/config";
import "express-async-errors";

//Main Route
import router from "./routers/index";

//Error Handler
import { errorHandler } from "./middlewares/errorHandlerMiddleware";

//Configs
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(errorHandler);

export default app;