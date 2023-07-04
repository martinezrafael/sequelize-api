const sequelize = require("../config/db.config");
const { DataTypes } = require('sequelize')

const TOP_10 = sequelize.define("TOP_10", {
  BRICK: {
    type: DataTypes.INTEGER,
    field: 'BRICK',
  },
  SETOR_NEC_ABERTO: {
    type: DataTypes.STRING(200),
    field: 'SETOR_NEC_ABERTO',
  },
  EAN: {
    type: DataTypes.STRING(15),
    field: 'EAN',
  },
  CEP_INICIAL: {
    type: DataTypes.INTEGER,
    field: 'CEP_INICIAL',
  },
  CEP_FINAL: {
    type: DataTypes.INTEGER,
    field: 'CEP_FINAL',
  },
  PRODUTO: {
    type: DataTypes.STRING(66),
    field: 'PRODUTO',
  },
  LABORATORIO: {
    type: DataTypes.STRING(50),
    field: 'LABORATORIO',
  },
  UNIDADES: {
    type: DataTypes.FLOAT,
    field: 'UNIDADES',
  },
  FCC: {
    type: DataTypes.INTEGER,
    field: 'FCC',
  },
  RANK: {
    type: DataTypes.INTEGER,
    field: 'RANK',
  },
}, {
  tableName: 'dbo.TOP_10',
  freezeTableName: true,
  timestamps: false,
});

module.exports = TOP_10;