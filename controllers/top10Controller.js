const TOP_10 = require('../models/top10');

// Método para buscar todos os registros
const getAllTOP10 = async (req, res) => {
  try {
    const tops = await TOP_10.findAll({
      attributes: { exclude: ['id'] },
    });
    return res.status(200).json(tops);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar informações', error });
  }
};

module.exports = {
  getAllTOP10,
};
