const CreateProductUseCase = require('./CreateProductUseCase');

describe('CreateProductUseCase', () => {
  it('deve criar um novo produto com dados válidos', async () => {
    const productRepository = {
      create: jest.fn().mockResolvedValue({
        id: 1,
        name: 'Produto Teste',
        description: 'Descrição Teste',
        price: 99.99
      })
    };

    const useCase = new CreateProductUseCase(productRepository);

    const product = await useCase.execute({
      name: 'Produto Teste',
      description: 'Descrição Teste',
      price: 99.99
    });

    expect(productRepository.create).toHaveBeenCalledWith({
      name: 'Produto Teste',
      description: 'Descrição Teste',
      price: 99.99
    });
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name', 'Produto Teste');
  });

  it('deve lançar erro se nome não for informado', async () => {
    const productRepository = {
      create: jest.fn()
    };

    const useCase = new CreateProductUseCase(productRepository);

    await expect(
      useCase.execute({ description: 'Desc', price: 10 })
    ).rejects.toThrow('Nome e preço são obrigatórios');
  });

  it('deve lançar erro se preço não for informado', async () => {
    const productRepository = {
      create: jest.fn()
    };

    const useCase = new CreateProductUseCase(productRepository);

    await expect(
      useCase.execute({ name: 'Produto', description: 'Desc' })
    ).rejects.toThrow('Nome e preço são obrigatórios');
  });
});