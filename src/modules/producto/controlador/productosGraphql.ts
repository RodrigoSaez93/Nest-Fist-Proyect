import { buildSchema } from 'graphql';

import productoModel from '../persistencia/productoModel';

const schema = buildSchema(`

   type Query {

    producto: Product,
    productos: [Product]
   }     

   type Mutation {

    insertarProducto(title:String,price:Float!,thumbnail:String):Product

   }
   type Product {
       title:String,
       price:Float,
       thumbnail:String
   }
  `);

const getProducto = function (args) {
  const id = args.id;
  return productoModel.findById(id).exec();
};

const getProductos = function () {
  return productoModel.find().exec();
};

const crearProducto = function ({ title, price, thumbnail }) {
  const nuevo = new productoModel({ title, price, thumbnail });
  nuevo.save();
  return nuevo;
};

const root = {
  producto: getProducto,
  productos: getProductos,
  insertarProducto: crearProducto,
};

export { schema, root };
