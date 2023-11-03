import mongoose from "mongoose";

const productSchema = mongoose.Schema({
   code: String,
   name: String,
   price: Number,
   description: String,
   imageUrl: String,
   averageRating: Number,
});

//   mengubah schema bawaan mongodb _id jadi id
productSchema.method("toJSON", function () {
   const { __v, _id, ...object } = this.toObject();
   object.id = _id;
   return object;
});

const Product = mongoose.model("products", schema);

export default Product
