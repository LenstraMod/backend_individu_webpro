import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { FilterProductDto } from './dto/filter-product.dto.js';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma : PrismaService){}

  create(dto: CreateProductDto) {
    return this.prisma.product.create({data: dto});
  }

  async createMany(dtos: CreateProductDto[]){
    return this.prisma.product.createMany({
      data:dtos
    })
  }

  findAll(filter : FilterProductDto) {
    const {search, minPrice, maxPrice} = filter;

    const where: Prisma.ProductWhereInput = {
      ...(search && {
        productName: {contains: search, mode: 'insensitive'},
      }),
      ...(minPrice !== undefined || maxPrice !== undefined) && {
        productPrice: {gte: minPrice, lte: maxPrice}
      }
    };

    return this.prisma.product.findMany({
      where, orderBy: {productName: 'asc'}
    })
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({where: {id: id}});
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.findOne(id);
    return this.prisma.product.update({where : {id: id}, data: dto});
  }

  remove(id: string) {
    return this.prisma.product.delete({where: {id: id}});
  }
}
