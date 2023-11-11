<template>
   <div>
      <div id="page-wrap">
         <div class="grid-wrap">
            <!-- props dengan data product -->
            <ProductItem
               v-for="(product, index) in products.data"
               :key="index"
               :dataProduct="product"
            />
         </div>
      </div>
   </div>
</template>

<script>
// import { products } from "../../data-seed";
import axios from "axios";
import ProductItem from "../../components/ProductItem.vue";

export default {
   components: {
      ProductItem,
   },
   data() {
      return {
         products: [],
      };
   },
   async created() {
      const result = await axios.get(
         `${import.meta.env.VITE_APP_SERVER_URL}/products`
      );
       this.products = result.data
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
