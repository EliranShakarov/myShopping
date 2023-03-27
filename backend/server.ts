// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import controller from "./Routes/controller"
import config from "./Utils/config";
import building_DB_Tables from "./Utils/init_mysql"


const server = express();
const currentPort = config.port;
building_DB_Tables();

server.use(cors());
server.use(express.json());
server.use("/", controller)
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )