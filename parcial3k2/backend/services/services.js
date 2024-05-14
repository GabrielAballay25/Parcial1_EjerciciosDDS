import sequelize from "../data/db.js";



const getAll = async() => {
    const locales = await sequelize.models.STARBUCKS_DIRECTORY.findAll()
    return locales.map(tienda => tienda.dataValues)
}
const getByFilter = async() => {

    const usersFiltrados = await sequelize.models.STARBUCKS_DIRECTORY.findAll({
        where: { COUNTRY: "AR" }
    })
    return usersFiltrados.map(tienda => tienda.dataValues)
}

const userservices= {
    getByFilter,
    getAll
}

export {userservices}