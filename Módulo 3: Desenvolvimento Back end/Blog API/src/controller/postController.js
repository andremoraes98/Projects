const PostService = require('../services/postService');

const create = async (req, res) => {
  try {
    const blogPost = req.body;
    const { authorization: token } = req.headers;

    const { id: userId } = await PostService.getUserFromToken(token);
  
    const result = await PostService.create({ ...blogPost, userId });
  
    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getAll = async (_req, res) => {
  const result = await PostService.getAll();

  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const post = await PostService.getById(id);

  res.status(200).json(post);
};

const update = async (req, res) => {
  const { id } = req.params;
  const blogPost = req.body;

  const post = await PostService.update(id, blogPost);

  res.status(200).json(post);
};

const destroy = async (req, res) => {
  const { id } = req.params;

  await PostService.destroy(id);

  res.status(204).end();
};

const getLike = async (req, res) => {
  const { q } = req.query;

  const result = await PostService.getLike(q);

  res.status(200).json(result);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
  getLike,
};