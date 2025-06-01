class UserRepository {
  async findByEmail(email) {
    // Exemplo: buscar usuário no banco de dados
    return null; // Retorne null se não encontrar
  }

  async create({ name, email, password }) {
    // Exemplo: salvar usuário no banco de dados
    return { id: 1, name, email }; // Retorne o usuário criado
  }
}

module.exports = UserRepository;