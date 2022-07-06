const ServicesProducts = require('../services/servicesProducts');

const getAll = async (_req, res) => {
  const products = await ServicesProducts.getAll();

  return res.status(200).json(products);  
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await ServicesProducts.getById(id);

  if (!product) {
    return res
      .status(404)
      .json({ message: 'Product not found' });
  }
  
  return res.status(200).json(product);
};

const create = async (req, res) => {
  const { name } = req.body;
  const product = await ServicesProducts.create(name);

  return res.status(201).json(product);  
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const result = await ServicesProducts.update(name, id);

  return res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  await ServicesProducts.deleteById(id);

  res.status(204).end();
};

const searchByTerm = async (req, res) => {
  const { q } = req.query;

  const result = await ServicesProducts.searchByTerm(q);
  
  res.status(200).json(result);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  searchByTerm,
};