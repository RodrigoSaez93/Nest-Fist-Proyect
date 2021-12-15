import PersistenciaChat from './PersistenciaChat';
let instance = null;
const mensajes = [];

export default class PersistenciaChatMemoria implements PersistenciaChat {
  async obtenerMensaje(): Promise<any> {
    return mensajes;
  }
  insertarMensaje(mensaje): Promise<any> {
    mensajes.push(mensaje);
    return Promise.resolve(mensaje);
  }

  static getInstance() {
    if (instance === null) {
      instance = new PersistenciaChatMemoria();
    }
    return instance;
  }
}
