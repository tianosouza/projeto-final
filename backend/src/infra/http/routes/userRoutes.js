const express = require('express');
const router = express.Router();
const authMiddleware = require('../midddlewares/authMiddleware');
const CreateUserUseCase = require('../../../useCase/user/createUser/CreateUserCase');
const UserRepository = require('../../prisma/PrismaUserRepository'); // Caminho corrigido

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

router.get('/', authMiddleware, (req, res) => {
  res.send('List of users');
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await createUserUseCase.execute({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;