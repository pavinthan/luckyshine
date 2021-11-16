import { PrismaClient } from '@prisma/client';

export class MoneyValuesService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async create(values: any) {
    try {
      return await this.prisma.moneyValue.create({
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
      return await this.prisma.moneyValue.findFirst({
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
      return await this.prisma.moneyValue.findMany();
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async updateById(id: number, values: any) {
    try {
      return await this.prisma.moneyValue.update({
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
      return await this.prisma.moneyValue.upsert({
        create: values,
        where: { id },
        update: {
          amount: values.amount,
          treasure_id: values.treasure_id,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
