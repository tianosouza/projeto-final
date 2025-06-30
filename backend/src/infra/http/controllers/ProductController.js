class ProductController {
  constructor({ listProductsUseCase, createProductUseCase, updateProductUseCase, deleteProductUseCase }) {
    this.listProductsUseCase = listProductsUseCase;
    this.createProductUseCase = createProductUseCase;
    this.updateProductUseCase = updateProductUseCase;
    this.deleteProductUseCase = deleteProductUseCase;
  }

  async list(req, res) {
    try {
      const products = await this.listProductsUseCase.execute();
      res.status(200).json(products);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async create(req, res) {
    const { name, description, price } = req.body;
    try {
      const product = await this.createProductUseCase.execute({ name, description, price });
      res.status(201).json({
        message: 'Produto criado com sucesso!',
        product
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const product = await this.updateProductUseCase.execute(id, data);
      res.status(200).json({
        message: 'Produto atualizado com sucesso!',
        product
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.deleteProductUseCase.execute(id);
      res.status(204).json({ message: 'Produto deletado com sucesso!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = ProductController;