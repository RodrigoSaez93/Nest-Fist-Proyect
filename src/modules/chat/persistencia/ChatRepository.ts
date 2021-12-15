import chatModel from './chat';

export default class ChatRepository {
  insertar(chat) {
    const chatNuevo = new chatModel(chat);
    return chatNuevo.save();
  }

  listar() {
    return chatModel.find();
  }
}
