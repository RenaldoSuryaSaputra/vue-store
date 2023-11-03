<template>
   <div>
      <div id="page-wrap">
         <div class="grid-wrap">
            <ProductItem
               v-for="(product, index) in products"
               :key="index"
               :product="product"
            />
         </div>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid-wrap {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin-top: 16px;
}
</style>
