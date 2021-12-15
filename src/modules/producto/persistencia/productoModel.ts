import mongoose from 'mongoose';

const productoCollection = 'productos';

const ProductoSchema = new mongoose.Schema({
  title: { type: String, require: true, max: 100 },
  price: { type: Number, require: true, max: 100 },
  thumbnail: { type: String, require: true, max: 1000 },
});

export default mongoose.model(productoCollection, ProductoSchema);
