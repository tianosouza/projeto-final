const CreateUserUseCase = require('./CreateUserCase');

describe('CreateUserUseCase', () => {
  it('deve criar um novo usuário se o email não existir', async () => {
    const userRepository = {
      findByEmail: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue({ id: 1, name: 'Teste', email: 'teste@teste.com' }),
    };

    const useCase = new CreateUserUseCase(userRepository);

    const user = await useCase.execute({ name: 'Teste', email: 'teste@teste.com', password: '123456' });

    expect(userRepository.findByEmail).toHaveBeenCalledWith('teste@teste.com');
    expect(userRepository.create).toHaveBeenCalled();
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('email', 'teste@teste.com');
  });

  it('deve lançar erro se o usuário já existir', async () => {
    const userRepository = {
      findByEmail: jest.fn().mockResolvedValue({ id: 1, email: 'teste@teste.com' }),
      create: jest.fn(),
    };

    const useCase = new CreateUserUseCase(userRepository);

    await expect(
      useCase.execute({ name: 'Teste', email: 'teste@teste.com', password: '123456' })
    ).rejects.toThrow('User already exists');
  });
});