const userService = require("./user.service");

const createUserController = async (req, res) => {
  const { NomePersonagem, ImagemPersonagem } = req.body;

  if (!NomePersonagem || !ImagemPersonagem) {
    return res.status(400).send({ message: "Preencha todos os campos" });
  }
  const foundUser = await userService.findByNomePersonagemUserService(
    NomePersonagem
  );

  if (foundUser) {
    return res.status(400).send({ message: "Personagem já existe" });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({ message: "Erro ao criar o personagem" });
  }
  res.status(201).send(user);
};


const findAllUserControler = async (req, res) => {
  res.send({ message: "Rota Ok" });
};
const findAllByidUserControler = async (req, res) => {
  res.send({ message: "Rota Ok" });
};
const updateController = async (req, res) => {
  res.send({ message: "Rota Ok" });
};
const deleteController = async (req, res) => {
  res.send({ message: "Rota Ok" });
};

module.exports = {
  createUserController,
  findAllUserControler,
  findAllByidUserControler,
  updateController,
  deleteController
}; 
