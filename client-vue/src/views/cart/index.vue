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
         <h3 id="total-price">Total: Rp{{ totalPrice }}</h3>
         <button id="checkout-button">Checkout</button>
      </div>
   </div>
</template>

<script>
export default {};
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
