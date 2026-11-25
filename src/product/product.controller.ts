import { Controller, Get, Post, Body, Patch, Param, Delete, ParseArrayPipe, Query } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { FilterProductDto } from './dto/filter-product.dto.js';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Post('bulk')
  createMany(@Body(new ParseArrayPipe({items: CreateProductDto})) dtos: CreateProductDto[]){
    return this.productService.createMany(dtos);
  }

  @Get()
  findAll(@Query() filter : FilterProductDto) {
    return this.productService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
