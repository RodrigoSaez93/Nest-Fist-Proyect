import PersistenciaProductoMongo from './PersistenciaProductoMongo';
import PersistenciaProductoMemoria from './PersistenciaProductoMemoria';

export default class PersistenciaProductoFactory {
  crearPersistencia() {
    const persistencia = process.env.PERSISTENCIA;

    switch (persistencia) {
      case 'mongo':
        return PersistenciaProductoMongo.getInstance();

      case 'memoria':
        return PersistenciaProductoMemoria.getInstance();

      default:
        return PersistenciaProductoMongo.getInstance();
    }
  }
}
