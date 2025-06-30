const UpdateUserUseCase = require('./UpdateUserUseCase');

describe('UpdateUserUseCase', () => {
  it('deve atualizar um usuário existente', async () => {
    const userRepository = {
      update: jest.fn().mockResolvedValue({
        id: 1,
        name: 'Novo Nome',
        email: 'novo@email.com'
      })
    };

    const useCase = new UpdateUserUseCase(userRepository);

    const updatedUser = await useCase.execute(1, { name: 'Novo Nome', email: 'novo@email.com' });

    expect(userRepository.update).toHaveBeenCalledWith(1, { name: 'Novo Nome', email: 'novo@email.com' });
    expect(updatedUser).toHaveProperty('id', 1);
    expect(updatedUser).toHaveProperty('name', 'Novo Nome');
  });

  it('deve lançar erro se o ID não for informado', async () => {
    const userRepository = {
      update: jest.fn()
    };

    const useCase = new UpdateUserUseCase(userRepository);

    await expect(useCase.execute(undefined, { name: 'Teste' }))
      .rejects.toThrow('ID é obrigatório');
    expect(userRepository.update).not.toHaveBeenCalled();
  });

  it('deve lançar erro se os dados do usuário forem inválidos', async () => {
    const userRepository = {
      update: jest.fn()
    };

    const useCase = new UpdateUserUseCase(userRepository);

    await expect(useCase.execute(1, {}))
      .rejects.toThrow('Dados do usuário são obrigatórios');
    expect(userRepository.update).not.toHaveBeenCalled();
  });
});