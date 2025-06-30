class UpdateProductUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(id, data) {
    if (!id) throw new Error('ID é obrigatório');
    return this.productRepository.update(id, data);
  }
}

module.exports = UpdateProductUseCase;