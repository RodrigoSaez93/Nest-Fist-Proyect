import { Module } from '@nestjs/common';
import { ProductosController } from './controlador/producto.controller';
@Module({
  controllers: [ProductosController],
})
export default class ProductoModule {}
