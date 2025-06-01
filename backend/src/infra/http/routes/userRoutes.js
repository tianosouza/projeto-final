const express = require('express');
const router = express.Router();
const authMiddleware = require('../midddlewares/authMiddleware');
const CreateUserUseCase = require('../../../useCase/user/createUser/CreateUserCase');
const AuthenticateUserUseCase = require('../../../useCase/user/authenticateUser/AuthenticateUserUseCase');
const UserRepository = require('../../prisma/PrismaUserRepository');
const UserController = require('../controllers/UserController');

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const userController = new UserController({ createUserUseCase, authenticateUserUseCase });

router.get('/', authMiddleware, userController.list.bind(userController));
router.post('/', userController.create.bind(userController));
router.post('/login', userController.login.bind(userController));

module.exports = router;