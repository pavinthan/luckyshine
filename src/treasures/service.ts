// import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

export class TreasureService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async create(values: any) {
    try {
      // TODO Prisma.sql
      return await this.prisma.$queryRawUnsafe(
        `INSERT INTO treasures (id,name,coordinate,updated_at) VALUES ('${values.id}', '${values.name}', ST_GeomFromText('${values.coordinate}'), now())`
      );
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

  public async getAll() {
    try {
      return await this.prisma.treasure.findMany();
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async updateById(id: number, values: any) {
    try {
      // TODO Prisma.sql
      return await this.prisma.$queryRawUnsafe(
        `UPDATE treasures SET name = '${values.name}', coordinate = ST_GeomFromText('${values.coordinate}'), updated_at = now() WHERE id = '${id}'`
      );
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }

  public async updateOrCreate(id: number, values: any) {
    try {
      const treasure = await this.findById(id);
      if (treasure) {
        return await this.updateById(id, values);
      } else {
        return await this.create(values);
      }
    } catch (error) {
      console.log(error);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
