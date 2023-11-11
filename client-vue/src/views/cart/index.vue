<template>
   <div>
      <div id="page-wrap">
         <h1>Shopping Cart</h1>
         <!-- event emit untuk melemparkan function kedalam child -->
         <ItemCart
            v-for="item in cartItems"
            :key="item.id"
            :item="item"
            v-on:remove-item="removeFromCart($event)" 
         />
         <h3 id="total-price">Total: Rp {{ totalPrice }}</h3>
         <button id="checkout-button">Checkout</button>
      </div>
   </div>
</template>

<script>
// import { cartItems } from "../../data-seed";
import axios from 'axios'
import ItemCart from "../../components/ItemCart.vue";

export default {
   components: {
      ItemCart,
   },
   data() {
      return {
         cartItems: [],
      };
   },
   computed: {
      // untuk GET
      totalPrice() {
         // reduce callback masing-masing array pada cartItems karena cartItems berisi array
         return this.cartItems.reduce(
            (sum, item) => sum + Number(item.price),
            0
         ); // 0params2 dari reduce currentValue
      },
   },
   methods: {
      async removeFromCart(product) {
         await axios.delete(
            `${import.meta.env.VITE_APP_SERVER_URL}/orders/delete/user/1/product/${product}`
         );

         // hapus data di FE
         let cart = this.cartItems
            .map(function (item) { // maping ulang dan ambil mapping yang index.code sama dengan product
               return item.code;
            })
            .indexOf(product);
         this.cartItems.splice(cart, 1); // hapus cart item yang index = product
      },
   },
   async created() {
      const result = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/orders/user/1`);
      let data = Object.assign( // buat object baru
         {},
         ...result.data.data.map((result) => ({
            user_id: result.user_id,
            cart_items: result.products,
         }))
      );
      this.cartItems = data.cart_items;
      console.log(data)
   },
   mounted() {
      console.log(this.totalPrice);
   },
};
</script>

<style scoped>
h1 {
   border-bottom: 1px solid #41b883;
   margin: 0;
   margin-top: 16px;
   padding: 16px;
}
#total-price {
   padding: 16px;
   text-align: right;
}
#checkout-button {
   width: 100%;
}
</style>
