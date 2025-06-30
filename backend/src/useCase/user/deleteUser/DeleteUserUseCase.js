class DeleteUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    if (!id) throw new Error('ID é obrigatório');
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error('Usuário não encontrado');
    await this.userRepository.delete(id);
  }
}

module.exports = DeleteUserUseCase;