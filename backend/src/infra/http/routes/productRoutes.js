const express = require('express');
const router = express.Router();
const authMiddleware = require('../midddlewares/authMiddleware');
const PrismaProductRepository = require('../../prisma/PrismaProductRepository');
const ListProductsUseCase = require('../../../useCase/product/listProducts/ListProductsUseCase');
const CreateProductUseCase = require('../../../useCase/product/createProduct/CreateProductUseCase');
const UpdateProductUseCase = require('../../../useCase/product/updateProduct/UpdateProductUseCase');
const DeleteProductUseCase = require('../../../useCase/product/deleteProduct/DeleteProductUseCase');
const ProductController = require('../controllers/ProductController');

const productRepository = new PrismaProductRepository();
const listProductsUseCase = new ListProductsUseCase(productRepository);
const createProductUseCase = new CreateProductUseCase(productRepository);
const updateProductUseCase = new UpdateProductUseCase(productRepository);
const deleteProductUseCase = new DeleteProductUseCase(productRepository);

const productController = new ProductController({
  listProductsUseCase,
  createProductUseCase,
  updateProductUseCase,
  deleteProductUseCase
});

router.get('/', productController.list.bind(productController));
router.post('/', authMiddleware, productController.create.bind(productController));
router.put('/:id', authMiddleware, productController.update.bind(productController));
router.delete('/:id', authMiddleware, productController.delete.bind(productController));

module.exports = router;