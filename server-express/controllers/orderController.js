import Order from "../models/orderModel.js";

const findCart = (req, res) => {
   const id = Number(req.params.id);

   // join order dengan product
   Order.aggregate([
      {
         $match: {
            user_id: id,
         },
      },
      {
         $lookup: {
            // cari data
            from: "products", // collection
            localField: "cart_items", // data mana milik orders / PK
            foreignField: "code", // data pada products / FK
            as: "products", // masukan dalam field products pada collection Order. akan buat field baru
         },
      },
   ])
      .then((result) => {
         res.status(202).send({
            message: "Success GET Data",
            data: result,
         });
      })
      .catch((err) => {
         res.status(500).send({
            message: err.message || "Some error while retrieving products.",
         });
      });
};

const addToCart = (req, res) => {
   const id = Number(req.params.id);
   const productCode = String(req.body.product); // req body { product: "123"}

   Order.updateOne(
      {
         user_id: id,
      },
      {
         $addToSet: {
            // menambahkan data dengan tipe SET biar gak ada duplikat
            cart_items: productCode,
         },
      }
   )
      .then((result) => {
         res.status(202).send({
            message: "Success add product",
            result: result,
         });
      })
      .catch((err) => {
         res.status(409).send({
            message: err.message || "Some error while add to cart.",
         });
      });
};

const removeFromCart = (req, res) => {
   const id = Number(req.params.id);
   const productCode = String(req.params.code);

   Order.updateOne(
      {
         user_id: id,
      },
      {
         $pull: {
            // mengambil data di chart
            cart_items: productCode,
         },
      }
   )
      .then((result) => {
         res.status(200).send({ result });
      })
      .catch((err) => {
         res.status(409).send({
            message: err.message || "Some error while add to cart.",
         });
      });
};

export { findCart, addToCart, removeFromCart };
