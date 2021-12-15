export default interface PersistenciaProducto {
  insertar(producto): Promise<any>;
  buscar(id): Promise<any>;
  listar(): Promise<any>;
  actualizar(producto): Promise<any>;
  eliminar(id): Promise<any>;
}
