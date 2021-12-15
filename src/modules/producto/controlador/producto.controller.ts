import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import PersistenciaProductoMongo from '../persistencia/PersistenciaProductoMongo';

@Controller('productos')
export class ProductosController {
  persistencia: PersistenciaProductoMongo;
  constructor() {
    this.persistencia = new PersistenciaProductoMongo();
  }

  @Get()
  async listar() {
    const productos = await this.persistencia.listar();
    if (productos.length === 0) {
      throw new Error('No hay productos cargados.');
    } else {
      return productos;
    }
  }

  @Get(':id')
  async listarPorId(id) {
    const producto = await this.persistencia.buscar(id);
    if (producto != null) {
      return producto;
    } else {
      throw new Error('No se encontró el producto.');
    }
  }

  @Post()
  async insertar(producto) {
    const id = await this.persistencia.insertar(producto);
    producto.id = id[0];
    const productos = await this.persistencia.listar();
    const data: any = {};
    data.hayProductos = productos.length > 0;
    data.productos = productos;
    data.type = 'products';
    // Ahora despues de insertar mando los datos al websocket usando la clase que creé
    //ProductsWebSocket.enviarDatos(data);
    return producto;
  }

  @Put()
  async actualizar(producto) {
    const productoEnLista = await this.persistencia.buscar(producto.id); // le pongo el 0 porque knex devuelve un array y yo necesito un solo objeto
    if (productoEnLista != null) {
      await this.persistencia.actualizar(producto);
      return producto;
    } else {
      throw new Error('No se encontró el producto');
    }
  }

  @Delete(':id')
  async eliminar(id) {
    const productoAEliminar = await this.persistencia.buscar(id);

    if (productoAEliminar != null) {
      await this.persistencia.eliminar(id);
      return { mensaje: 'Producto eliminado', producto: productoAEliminar };
    } else {
      throw new Error('No se encontró el producto');
    }
  }
}
