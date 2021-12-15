import PersistenciaChat from './PersistenciaChat';
import chatModel from './chat';
let instance = null;

export default class PersistenciaChatMongo implements PersistenciaChat {
  async obtenerMensaje(): Promise<any> {
    return await chatModel.find();
  }
  async insertarMensaje(mensaje: any): Promise<any> {
    const chatNuevo = new chatModel(mensaje);

    return await chatNuevo.save();
  }

  static getInstance() {
    if (instance === null) {
      instance = new PersistenciaChatMongo();
    }
    return instance;
  }
}
