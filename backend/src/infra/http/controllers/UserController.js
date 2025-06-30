const jwt = require('jsonwebtoken');

class UserController {
  constructor({
    createUserUseCase,
    authenticateUserUseCase,
    deleteUserUseCase,
    listUsersUseCase
  }) {
    this.createUserUseCase = createUserUseCase;
    this.authenticateUserUseCase = authenticateUserUseCase;
    this.deleteUserUseCase = deleteUserUseCase;
    this.listUsersUseCase = listUsersUseCase;
  }

  async list(req, res) {
    try {
      const users = await this.listUsersUseCase.execute();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async create(req, res) {
    const { name, email, password } = req.body;
    try {
      const user = await this.createUserUseCase.execute({ name, email, password });
      res.status(201).json({
        message: 'Usuário criado com sucesso!',
        user
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.deleteUserUseCase.execute(id);
      res.status(204).json({ message: 'Usuário deletado com sucesso!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await this.authenticateUserUseCase.execute({ email, password });

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.status(200).json({
        message: 'Login realizado com sucesso!',
        user,
        token
      });
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  }
}

module.exports = UserController;