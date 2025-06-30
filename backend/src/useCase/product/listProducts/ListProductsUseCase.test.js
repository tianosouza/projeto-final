const ListProductsUseCase = require('./ListProductsUseCase');

describe('ListProductsUseCase', () => {
  it('deve retornar uma lista de produtos', async () => {
    const productsMock = [
      { id: 1, name: 'Produto 1', description: 'Desc 1', price: 10 },
      { id: 2, name: 'Produto 2', description: 'Desc 2', price: 20 }
    ];

    const productRepository = {
      findAll: jest.fn().mockResolvedValue(productsMock)
    };

    const useCase = new ListProductsUseCase(productRepository);

    const products = await useCase.execute();

    expect(productRepository.findAll).toHaveBeenCalled();
    expect(products).toEqual(productsMock);
  });

  it('deve retornar uma lista vazia se não houver produtos', async () => {
    const productRepository = {
      findAll: jest.fn().mockResolvedValue([])
    };

    const useCase = new ListProductsUseCase(productRepository);

    const products = await useCase.execute();

    expect(productRepository.findAll).toHaveBeenCalled();
    expect(products).toEqual([]);
  });
});