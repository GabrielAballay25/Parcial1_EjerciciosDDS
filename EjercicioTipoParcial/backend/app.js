import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbInit from "./data/db-init.js";
import sequelize from "./data/db.js";
import { DataTypes } from "sequelize";

dotenv.config();

const app = express();

app.use(cors());

const DirectorioStarbuck = sequelize.define('DirectorioStarbuck',{
    store_number:{
        type: DataTypes.TEXT,
        primaryKey: true
    },
    store_name:DataTypes.TEXT,
    street:DataTypes.TEXT,
    city:DataTypes.TEXT,
    province:DataTypes.TEXT,
    postcode:DataTypes.TEXT,
    longitude:DataTypes.REAL,
    latitude:DataTypes.REAL
}, { timestamps: false });


/* CREATE TABLE "STARBUCKS_DIRECTORY" (
	"STORE_NUMBER"	TEXT NOT NULL,
	"STORE_NAME"	TEXT,
	"STREET_ADDRESS"	TEXT,
	"CITY"	TEXT,
	"PROVINCE"	TEXT,
	"COUNTRY"	TEXT,
	"POSTCODE"	TEXT,
	"LONGITUDE"	REAL,
	"LATITUDE"	REAL,
	CONSTRAINT "STARBUCKS_DIRECTORY_pk" PRIMARY KEY("STORE_NUMBER")
); */

app.get("/status", (req, res) => {
    res.json({ respuesta: "API iniciada y escuchando..." });
});

(async function start() {
    const PORT = process.env.PORT || 3000;

    // Inicializar la conexión a la base de datos
    await dbInit();

    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
    });
}());
