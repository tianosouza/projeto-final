const request = require('supertest');
const express = require('express');

const mockListExecute = jest.fn(async () => [
  { id: 1, name: 'Produto 1', description: 'Desc 1', price: 10 },
  { id: 2, name: 'Produto 2', description: 'Desc 2', price: 20 }
]);
const mockCreateExecute = jest.fn(async ({ name, description, price }) => ({
  id: 3,
  name,
  description,
  price
}));
const mockUpdateExecute = jest.fn(async (id, data) => ({
  id,
  ...data
}));
const mockDeleteExecute = jest.fn(async (id) => undefined);

jest.mock('../../../useCase/product/listProducts/ListProductsUseCase', () => {
  return jest.fn().mockImplementation(() => ({
    execute: mockListExecute
  }));
});
jest.mock('../../../useCase/product/createProduct/CreateProductUseCase', () => {
  return jest.fn().mockImplementation(() => ({
    execute: mockCreateExecute
  }));
});
jest.mock('../../../useCase/product/updateProduct/UpdateProductUseCase', () => {
  return jest.fn().mockImplementation(() => ({
    execute: mockUpdateExecute
  }));
});
jest.mock('../../../useCase/product/deleteProduct/DeleteProductUseCase', () => {
  return jest.fn().mockImplementation(() => ({
    execute: mockDeleteExecute
  }));
});

jest.mock('../midddlewares/authMiddleware', () => (req, res, next) => next());

const productRoutes = require('./productRoutes');

const app = express();
app.use(express.json());
app.use('/products', productRoutes);

describe('Rotas de produto', () => {
  beforeEach(() => {
    mockListExecute.mockClear();
    mockCreateExecute.mockClear();
    mockUpdateExecute.mockClear();
    mockDeleteExecute.mockClear();
  });

  it('GET /products deve retornar lista de produtos', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
    expect(mockListExecute).toHaveBeenCalled();
  });

  it('POST /products deve criar um produto', async () => {
    const res = await request(app)
      .post('/products')
      .send({ name: 'Produto Teste', description: 'Desc Teste', price: 99.99 });

    expect(res.statusCode).toBe(201);
    expect(res.body.product).toHaveProperty('id');
    expect(res.body.product).toHaveProperty('name', 'Produto Teste');
    expect(mockCreateExecute).toHaveBeenCalledWith({
      name: 'Produto Teste',
      description: 'Desc Teste',
      price: 99.99
    });
  });

  it('PUT /products/:id deve atualizar um produto', async () => {
    const res = await request(app)
      .put('/products/1')
      .send({ name: 'Produto Atualizado', price: 150 });

    expect(res.statusCode).toBe(200);
    expect(res.body.product).toHaveProperty('id', '1');
    expect(res.body.product).toHaveProperty('name', 'Produto Atualizado');
    expect(mockUpdateExecute).toHaveBeenCalledWith('1', { name: 'Produto Atualizado', price: 150 });
  });

  it('DELETE /products/:id deve deletar um produto', async () => {
    const res = await request(app).delete('/products/1');
    expect(res.statusCode).toBe(204);
    expect(mockDeleteExecute).toHaveBeenCalledWith('1');
  });
});