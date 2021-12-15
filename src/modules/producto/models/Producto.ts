import joi from 'joi';

export default class Producto {
  title = '';
  price = 0;
  thumbnail = '';
  constructor(title, price, thumbnail) {
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  static validar(producto) {
    const ProductoSchema = joi.object({
      title: joi.string().required(),
      price: joi.number().required(),
      thumbnail: joi.string().required(),
    });
    const { error } = ProductoSchema.validate(producto);
    if (error) {
      throw error;
    }
  }
}
