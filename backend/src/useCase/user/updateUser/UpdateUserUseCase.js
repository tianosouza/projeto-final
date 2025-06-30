class UpdateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id, data) {
    if (!id) throw new Error('ID é obrigatório');
    if (!data || Object.keys(data).length === 0) {
      throw new Error('Dados do usuário são obrigatórios');
    }
    return this.userRepository.update(id, data);
  }
}

module.exports = UpdateUserUseCase;