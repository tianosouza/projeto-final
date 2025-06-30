const ListUsersUseCase = require('./ListUsersUseCase');

describe('ListUsersUseCase', () => {
  it('deve retornar uma lista de usuários', async () => {
    const usersMock = [
      { id: 1, name: 'Usuário 1', email: 'user1@email.com' },
      { id: 2, name: 'Usuário 2', email: 'user2@email.com' }
    ];

    const userRepository = {
      findAll: jest.fn().mockResolvedValue(usersMock)
    };

    const useCase = new ListUsersUseCase(userRepository);

    const users = await useCase.execute();

    expect(userRepository.findAll).toHaveBeenCalled();
    expect(users).toEqual(usersMock);
  });

  it('deve retornar uma lista vazia se não houver usuários', async () => {
    const userRepository = {
      findAll: jest.fn().mockResolvedValue([])
    };

    const useCase = new ListUsersUseCase(userRepository);

    const users = await useCase.execute();

    expect(userRepository.findAll).toHaveBeenCalled();
    expect(users).toEqual([]);
  });
});