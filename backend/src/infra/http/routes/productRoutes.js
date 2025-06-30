const express = require('express');
const router = express.Router();
const authMiddleware = require('../midddlewares/authMiddleware');
const PrismaProductRepository = require('../../prisma/PrismaProductRepository');
const ListProductsUseCase = require('../../../useCase/product/listProducts/ListProductsUseCase');
const CreateProductUseCase = require('../../../useCase/product/createProduct/CreateProductUseCase');
const UpdateProductUseCase = require('../../../useCase/product/updateProduct/UpdateProductUseCase');
const DeleteProductUseCase = require('../../../useCase/product/deleteProduct/DeleteProductUseCase');
const ProductController = require('../controllers/ProductController');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gerenciamento de produtos
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *             examples:
 *               exemplo:
 *                 value:
 *                   - id: "1"
 *                     name: "Produto 1"
 *                     description: "Descrição do produto 1"
 *                     price: 99.99
 *                   - id: "2"
 *                     name: "Produto 2"
 *                     description: "Descrição do produto 2"
 *                     price: 49.90
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 product:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *                     price:
 *                       type: number
 *             examples:
 *               exemplo:
 *                 value:
 *                   message: Produto criado com sucesso!
 *                   product:
 *                     id: "1"
 *                     name: "Produto 1"
 *                     description: "Descrição do produto 1"
 *                     price: 99.99
 *       400:
 *         description: Erro de validação
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               erro:
 *                 value:
 *                   error: "Nome e preço são obrigatórios"
 */

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Atualiza um produto
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 product:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *                     price:
 *                       type: number
 *             examples:
 *               exemplo:
 *                 value:
 *                   message: Produto atualizado com sucesso!
 *                   product:
 *                     id: "1"
 *                     name: "Produto Atualizado"
 *                     description: "Nova descrição"
 *                     price: 120.00
 *       400:
 *         description: Erro de validação
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               erro:
 *                 value:
 *                   error: "Dados inválidos"
 *       404:
 *         description: Produto não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               erro:
 *                 value:
 *                   error: "Produto não encontrado"
 *   delete:
 *     summary: Deleta um produto
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               erro:
 *                 value:
 *                   error: "Produto não encontrado"
 */

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