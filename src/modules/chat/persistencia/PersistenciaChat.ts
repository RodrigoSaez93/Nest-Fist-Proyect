export default interface PersistenciaChat {
  obtenerMensaje(): Promise<any>;
  insertarMensaje(mensaje): Promise<any>;
}
