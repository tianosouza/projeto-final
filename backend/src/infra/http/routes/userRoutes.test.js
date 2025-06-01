const request = require('supertest');
const express = require('express');

const mockExecute = jest.fn(async ({ name, email, password }) => ({
  id: 1,
  name,
  email
}));
jest.mock('../../../useCase/user/createUser/CreateUserCase', () => {
  return jest.fn().mockImplementation(() => ({
    execute: mockExecute
  }));
});

jest.mock('../midddlewares/authMiddleware', () => (req, res, next) => next());

const userRoutes = require('./userRoutes');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

describe('Rotas de usuário', () => {
  beforeEach(() => {
    mockExecute.mockClear();
  });

  it('POST /users deve criar um usuário', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Teste', email: 'teste@teste.com', password: '123456' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('email', 'teste@teste.com');
    expect(mockExecute).toHaveBeenCalledWith({
      name: 'Teste',
      email: 'teste@teste.com',
      password: '123456'
    });
  });

  it('GET /users deve retornar lista de usuários (mock)', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('List of users');
  });
});