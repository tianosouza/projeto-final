const DeleteUserUseCase = require('./DeleteUserUseCase');

describe('DeleteUserUseCase', () => {
  it('deve deletar um usuário existente', async () => {
    const userRepository = {
      findById: jest.fn().mockResolvedValue({ id: 1, name: 'Teste', email: 'teste@teste.com' }),
      delete: jest.fn().mockResolvedValue(),
    };

    const useCase = new DeleteUserUseCase(userRepository);

    await useCase.execute(1);

    expect(userRepository.findById).toHaveBeenCalledWith(1);
    expect(userRepository.delete).toHaveBeenCalledWith(1);
  });

  it('deve lançar erro se o ID não for informado', async () => {
    const userRepository = {
      findById: jest.fn(),
      delete: jest.fn(),
    };

    const useCase = new DeleteUserUseCase(userRepository);

    await expect(useCase.execute()).rejects.toThrow('ID é obrigatório');
  });

  it('deve lançar erro se o usuário não existir', async () => {
    const userRepository = {
      findById: jest.fn().mockResolvedValue(null),
      delete: jest.fn(),
    };

    const useCase = new DeleteUserUseCase(userRepository);

    await expect(useCase.execute(2)).rejects.toThrow('Usuário não encontrado');
    expect(userRepository.findById).toHaveBeenCalledWith(2);
    expect(userRepository.delete).not.toHaveBeenCalled();
  });
});