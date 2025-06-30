class DeleteProductUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(id) {
    if (!id) throw new Error('ID é obrigatório');
    return this.productRepository.delete(id);
  }
}

module.exports = DeleteProductUseCase;