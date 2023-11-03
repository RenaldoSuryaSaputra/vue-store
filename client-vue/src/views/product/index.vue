<template>
   <div>
      <div id="page-wrap">
         <div class="grid-wrap">
            <div
               v-for="(product, index) in products"
               :key="index"
               :product="product"
            >
               <img :src="product.imageUrl" alt="" />
               <h3>{{ product.name }}</h3>
               <h3>Rp {{ product.price }}</h3>
               <router-link
                  :to="{ name: 'product-detail', params: { id: product.id } }"
                  >Details</router-link
               >
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { products } from "../../data-seed";

console.log(products);
export default {
   data() {
      return {
         products,
      };
   },
};
</script>

<style scoped>
.grid-wrap {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin-top: 16px;
}
</style>
