const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const getEmails = async () => {
  const emails = await User.findAll({
    attributes: ['email'],
    raw: true,
  });

  return emails.map((email) => email.email);
};

const generateToken = (email) => {
  const payload = { data: { email } };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const create = async (user) => {
  const result = await User.create(user);

  return result;
};

const getCredentialsWhereEmail = async (email) => {
  const credentials = await User.findOne({
    where: {
      email,
    },
    attributes: ['email', 'password'],
    raw: true,
  });

  return credentials;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
    raw: true,
  });

  return users;
};

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
    raw: true,
  });

  return user;
};

const getId = async () => {
  const ids = await User.findAll({
    attributes: ['id'],
    raw: true,
  });

  return ids.map((id) => id.id);
};

const destroy = async (email) => {
  await User.destroy({
    where: {
      email,
    },
  });
};

module.exports = {
  getEmails,
  generateToken,
  create,
  getAll,
  getById,
  getId,
  destroy,
  getCredentialsWhereEmail,
};