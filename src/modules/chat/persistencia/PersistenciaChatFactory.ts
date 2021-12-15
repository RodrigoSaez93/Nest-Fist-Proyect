import PersistenciaChatMemoria from './PersistenciaChatMemoria';
import PersistenciaChatMongo from './PersistenciaChatMongo';
import PersistenciaChat from './PersistenciaChat';

export default class PersistenciaChatFactory {
  crearPersistencia(): PersistenciaChat {
    const persistencia = process.env.PERSISTENCIA;

    switch (persistencia) {
      case 'mongo':
        return PersistenciaChatMongo.getInstance();

      case 'memoria':
        return PersistenciaChatMemoria.getInstance();

      default:
        return PersistenciaChatMongo.getInstance();
    }
  }
}
