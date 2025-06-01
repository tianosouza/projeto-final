const AuthenticateUserUseCase = require('./AuthenticateUserUseCase');

describe('AuthenticateUserUseCase', () => {
  it('deve autenticar usuário com email e senha corretos', async () => {
    const user = { id: 1, email: 'teste@teste.com', password: 'hash' };
    const userRepository = {
      findByEmail: jest.fn().mockResolvedValue(user),
      comparePassword: jest.fn().mockResolvedValue(true),
    };

    const useCase = new AuthenticateUserUseCase(userRepository);
    const result = await useCase.execute({ email: 'teste@teste.com', password: 'senha' });

    expect(result).toBe(user);
    expect(userRepository.findByEmail).toHaveBeenCalledWith('teste@teste.com');
    expect(userRepository.comparePassword).toHaveBeenCalledWith('senha', 'hash');
  });

  it('deve lançar erro se usuário não existir', async () => {
    const userRepository = {
      findByEmail: jest.fn().mockResolvedValue(null),
      comparePassword: jest.fn(),
    };
    const useCase = new AuthenticateUserUseCase(userRepository);

    await expect(
      useCase.execute({ email: 'naoexiste@teste.com', password: 'senha' })
    ).rejects.toThrow('User not found');
  });
});