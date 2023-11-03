<template>
   <div>
      <div id="page-wrap">
         <div class="grid-wrap">
            <!-- props dengan data product -->
            <ProductItem
               v-for="(product, index) in products"
               :key="index"
               :dataProduct="product"
            />
         </div>
      </div>
   </div>
</template>

<script>
import { products } from "../../data-seed";
import ProductItem from "../../components/ProductItem.vue";

export default {
   components: {
      ProductItem,
   },
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
