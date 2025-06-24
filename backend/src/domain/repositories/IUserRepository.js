class UserRepository {
  async findByEmail(email) {
    return null;
  }

  async create({ name, email, password }) {
    return { id: 1, name, email };
  }
}

module.exports = UserRepository;