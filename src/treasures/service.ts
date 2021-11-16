import { PrismaClient, Prisma, Treasure } from '@prisma/client';

export class TreasureService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async create({ prize_value: prizeValue, ...values }: any) {
    try {
      let treasure = await this.prisma.treasure.findFirst({
        where: {
          name: values.name,
          latitude: values.latitude,
          longitude: values.longitude,
        },
      });

      if (treasure) {
        await this.updateById(treasure.id, values);
      } else {
        treasure = await this.prisma.treasure.create({
          data: values,
        });
      }

      const moneyValue = await this.prisma.moneyValue.findFirst({
        where: {
          treasure_id: treasure.id,
          amount: prizeValue,
        },
      });

      if (!moneyValue) {
        await this.prisma.moneyValue.create({
          data: {
            treasure_id: treasure.id,
            amount: prizeValue,
          },
        });
      }

      return treasure;
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

  public async getAll(params: any = {}) {
    try {
      const prizeValue = params.prize_value || 10;

      return await this.prisma.$queryRaw<Treasure[]>(
        Prisma.sql`SELECT *, (6371 * acos(cos(radians(${params.latitude}))*cos(radians(latitude)) * cos(radians(longitude) - radians(${params.longitude})) + sin(radians(${params.latitude})) * sin(radians(latitude)))) AS distance FROM treasures AS t WHERE EXISTS (SELECT amount, treasure_id FROM money_values AS m WHERE m.treasure_id = t.id AND m.amount >= ${prizeValue}) HAVING distance < ${params.distance}`
      );
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
