import { DataTypes } from "sequelize";


const starbucksAtributes = {
    STORE_NUMBER: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
    },

    STORE_NAME: {
        type: DataTypes.TEXT
    },

    STREET_ADDRESS: {
        type: DataTypes.TEXT
    },

    CITY: {
        type: DataTypes.TEXT
    },

    PROVINCE: {
        type: DataTypes.TEXT
    },

    COUNTRY: {
        type: DataTypes.TEXT
    },

    POSTCODE: {
        type: DataTypes.TEXT
    },

    LONGITUDE: {
            type: DataTypes.REAL
        },

    LATITUDE: {
        type: DataTypes.REAL
    },
};

const starbucksMethods = {
    tableName: "STARBUCKS_DIRECTORY",
    timestamps: false
};

const STARBUCKS_DIRECTORYModels = {
    starbucksAtributes,
    starbucksMethods
};

export {STARBUCKS_DIRECTORYModels};