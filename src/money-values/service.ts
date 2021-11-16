import { PrismaClient } from '@prisma/client';

export class MoneyValuesService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async create(values: any) {
    try {
      return await this.prisma.user.create({
        data: values,
      });
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async findById(id: number) {
    try {
      return await this.prisma.user.findFirst({
        where: { id },
      });
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async getAll() {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async updateById(id: number, values: any) {
    try {
      return await this.prisma.user.update({
        data: values,
        where: { id },
      });
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async updateOrCreate(id: number, values: any) {
    try {
      const update = {
        age: values.age,
        name: values.name,
        email: values.email,
        password: values.password,
      };

      return await this.prisma.user.upsert({
        update,
        create: values,
        where: { id },
      });
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
