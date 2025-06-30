const express = require('express');
const router = express.Router();
const authMiddleware = require('../midddlewares/authMiddleware');
const CreateUserUseCase = require('../../../useCase/user/createUser/CreateUserCase');
const AuthenticateUserUseCase = require('../../../useCase/user/authenticateUser/AuthenticateUserUseCase');
const DeleteUserUseCase = require('../../../useCase/user/deleteUser/DeleteUserUseCase');
const ListUsersUseCase = require('../../../useCase/user/listUsers/ListUsersUseCase');
const UpdateUserUseCase = require('../../../useCase/user/updateUser/UpdateUserUseCase');
const UserRepository = require('../../prisma/PrismaUserRepository');
const UserController = require('../controllers/UserController');

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);
const listUsersUseCase = new ListUsersUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const userController = new UserController({
  createUserUseCase,
  authenticateUserUseCase,
  deleteUserUseCase,
  listUsersUseCase,
  updateUserUseCase
});

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Realiza login do usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deleta um usuário
 *     tags: [Users]
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
 *         description: Usuário deletado com sucesso
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Users]
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 */

router.get('/', authMiddleware, userController.list.bind(userController));
router.post('/', userController.create.bind(userController));
router.post('/login', userController.login.bind(userController));
router.delete('/:id', authMiddleware, userController.delete.bind(userController));
router.put('/:id', authMiddleware, userController.update.bind(userController));

module.exports = router;