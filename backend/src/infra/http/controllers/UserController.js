const jwt = require('jsonwebtoken');

class UserController {
  constructor({ 
    createUserUseCase, 
    authenticateUserUseCase,
    deleteUserUseCase
  }) {
    this.createUserUseCase = createUserUseCase;
    this.authenticateUserUseCase = authenticateUserUseCase;
    this.deleteUserUseCase = deleteUserUseCase;
  }

  async list(req, res) {
    res.send('List of users');
  }

  async create(req, res) {
    const { name, email, password } = req.body;
    try {
      const user = await this.createUserUseCase.execute({ name, email, password });
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.createUserUseCase.delete(id);
      res.status(204).send();
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

      res.status(200).json({ user, token });
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  }
}

module.exports = UserController;