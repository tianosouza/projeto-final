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

  async delete(id) {
    return prisma.user.delete({ where: { id } });
  }

  async findAll() {
    return prisma.user.findMany();
  }

  async findById(id) {
    return prisma.user.findUnique({ where: { id } });
  }

  async update(id, data) {
    return prisma.user.update({ where: { id }, data });
  }
}

module.exports = PrismaUserRepository;
