const PrismaUserRepository = require('../infra/prisma/PrismaUserRepository');
const CreateUserUseCase = require('../useCase/user/createUser/CreateUserCase');

async function main() {
  const userRepository = new PrismaUserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);

  const email = 'admin@admin.com';
  const password = 'admin';
  const name = 'Administrador';

  const existingUser = await userRepository.findByEmail(email);

  if (!existingUser) {
    await createUserUseCase.execute({ name, email, password });
    console.log('Usuário padrão criado!');
  } else {
    console.log('Usuário padrão já existe.');
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  });