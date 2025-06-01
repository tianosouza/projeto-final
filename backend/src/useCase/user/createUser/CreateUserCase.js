const bcrypt = require('bcrypt');

class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) throw new Error('User already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.userRepository.create({ name, email, password: hashedPassword });
  }
}

module.exports = CreateUserUseCase;
