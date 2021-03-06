import mongoose from 'mongoose';

const chatCollection = 'mensajes';

const AuthorSchema = new mongoose.Schema({
  email: String,
  nombre: String,
  apellido: String,
  edad: Number,
  alias: String,
  avatar: String,
});

const ChatSchema = new mongoose.Schema({
  date: { type: String, require: true, max: 100 },
  author: AuthorSchema,
  text: String,
});

export default mongoose.model(chatCollection, ChatSchema);
