const prisma = require('./client');

class PrismaProductRepository {
  async create({ name, description, price }) {
    return prisma.product.create({
      data: { name, description, price }
    });
  }

  async findAll() {
    return prisma.product.findMany();
  }

  async findById(id) {
    return prisma.product.findUnique({ where: { id } });
  }

  async update(id, data) {
    return prisma.product.update({ where: { id }, data });
  }

  async delete(id) {
    return prisma.product.delete({ where: { id } });
  }
}

module.exports = PrismaProductRepository;