<template>
   <div>
      <div id="page-wrap">
         <h1>Shopping Cart</h1>
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
import { cartItems } from "../../data-seed";
import ItemCart from "../../components/ItemCart.vue";

export default {
   components: {
      ItemCart,
   },
   data() {
      return {
         cartItems,
      };
   },
   computed: {
      // untuk GET
      totalPrice() {
         // reduce callback masing-masing array pada cartItems karena cartItems berisi array
         return this.cartItems.reduce((sum, item) => (
            sum + Number(item.price)), 0); // 0params2 dari reduce currentValue
      },
   },
   mounted() {
      console.log(this.totalPrice)
   }
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
