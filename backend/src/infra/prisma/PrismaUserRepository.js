const prisma = require('./client');

class PrismaUserRepository {
  async findByEmail(email) {
    return prisma.user.findUnique({ where: { email } });
  }

  async create({ name, email, password }) {
    return prisma.user.create({
      data: { name, email, password }
    });
  }
}

module.exports = PrismaUserRepository;
