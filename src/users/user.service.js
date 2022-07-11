const User = require("./User");

const findByNomePersonagemUserService = async(NomePersonagem) =>
  await User.findOne({ NomePersonagem: NomePersonagem });

const createUserService = async (body) => await User.create(body);

module.exports = { findByNomePersonagemUserService, createUserService };
