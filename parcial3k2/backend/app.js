import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { userservices } from "./services/services.js";
import dbInit from "./data/db-init.js";


dotenv.config();

const app = express();

app.use(cors());

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


app.get("/locales", async (req, res) => {
    try {
        const response = await userservices.getByFilter()
        return res.json(response)
    } catch (error) {
        return res.status(500).send({ error: "Ha habido un error imprevisto" })
    }
})

app.get("/locales/interior", async (req, res) => {
    try {
        const response = await userservices.getByFilter()
        const localesInt = response.filter(local => local.PROVINCE !== 'B' && local.PROVINCE !== 'C');
        return res.json(localesInt)
    } catch (error) {
        return res.status(500).send({ error: "Ha habido un error imprevisto" })
    }

})



