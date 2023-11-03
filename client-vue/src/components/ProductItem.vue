<template lang="">
   <div class="product-item">
      <!-- <img :src="`http://localhost:8000${product.imageUrl}`" alt="" /> -->
      <img :src="dataProduct.imageUrl" alt="" />
      <h3 class="product-name">{{ dataProduct.name }}</h3>
      <p class="product-price">Rp{{ dataProduct.price }}</p>
      <router-link
         :to="{ name: 'product-detail', params: { id: dataProduct.id } }"
      >
         <button>Detail</button>
      </router-link>
   </div>
</template>
<script>
export default {
   props: ["dataProduct"],

};
</script>
<style scoped>
.product-item {
   align-items: center;
   border-radius: 8px;
   box-shadow: 0px 2px 5px #888;
   display: flex;
   flex-direction: column;
   margin-bottom: 2%;
   padding: 20px;
   position: relative;
   width: 32%;
}

.product-name {
   margin-bottom: 0;
}

img {
   height: 200px;
   width: 200px;
   border-radius: 5%;
}

a {
   width: 100%;
}

button {
   width: 100%;
}
</style>
