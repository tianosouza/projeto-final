class CreateProductUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute({ name, description, price }) {
    if (!name || !price) throw new Error('Nome e preço são obrigatórios');
    return this.productRepository.create({ name, description, price });
  }
}

module.exports = CreateProductUseCase;