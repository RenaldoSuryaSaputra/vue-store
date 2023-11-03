<template>
   <div>
      <div id="page-wrap" v-if="product">
         <h4 v-if="notif" class="notif">item added successfully</h4>
         <div id="img-wrap">
            <img :src="`http://localhost:8000${product.imageUrl}`" alt="" />
         </div>
         <div id="product-details">
            <h1>{{ product.name }}</h1>
            <h3 id="price">Rp{{ product.price }}</h3>
            <p>Average rating: {{ product.averageRating }}</p>
            <button id="add-to-cart" @click="addToCart()">Add to Cart</button>
            <p>{{ product.description }}</p>
         </div>
      </div>

      <NotFound v-else />
   </div>
</template>

<script>
export default {};
</script>

<style scoped>
#page-wrap {
   margin-top: 16px;
   padding: 16px;
   max-width: 600px;
}

#img-wrap {
   text-align: center;
}

img {
   width: 400px;
}

#product-details {
   padding: 16px;
   position: relative;
}

#add-to-cart {
   width: 100%;
}

#price {
   position: absolute;
   top: 24px;
   right: 16px;
}
.notif {
   text-align: center;
   color: white;
   background-color: #41b883;
   padding: 3%;
   border-radius: 8px;
}
</style>
