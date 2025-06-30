const DeleteProductUseCase = require('./DeleteProductUseCase');

describe('DeleteProductUseCase', () => {
  it('deve deletar um produto existente', async () => {
    const productRepository = {
      delete: jest.fn().mockResolvedValue(),
    };

    const useCase = new DeleteProductUseCase(productRepository);

    await useCase.execute(1);

    expect(productRepository.delete).toHaveBeenCalledWith(1);
  });

  it('deve lançar erro se o ID não for informado', async () => {
    const productRepository = {
      delete: jest.fn(),
    };

    const useCase = new DeleteProductUseCase(productRepository);

    await expect(useCase.execute()).rejects.toThrow('ID é obrigatório');
    expect(productRepository.delete).not.toHaveBeenCalled();
  });
});