// db.js
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import { STARBUCKS_DIRECTORYModels } from "../models/STARBUCKS_DIRECTORY.js";

dotenv.config();

const logHabilitado = process.env.LOG;

const sequelize = new Sequelize({
    dialect: "sqlite",
    logging: (logHabilitado === "true") ? console.log : false,
    storage: "./data/bd.sqlite"
});

sequelize.define("STARBUCKS_DIRECTORY", STARBUCKS_DIRECTORYModels.starbucksAtributes, STARBUCKS_DIRECTORYModels.starbucksMethods)


export default sequelize;
