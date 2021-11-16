import { PrismaClient } from '@prisma/client';

export class TreasureService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async create(values: any) {
    try {
      return await this.prisma.treasure.create({
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
      return await this.prisma.treasure.findFirst({
        where: { id },
      });
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async getAll(query = {}) {
    try {
      console.log(query);
      return await this.prisma.treasure.findMany();
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async updateById(id: number, values: any) {
    try {
      return await this.prisma.treasure.update({
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
      return await this.prisma.treasure.upsert({
        create: values,
        where: { id },
        update: {
          name: values.name,
          latitude: values.latitude,
          longitude: values.longitude,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
