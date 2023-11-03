<template>
   <div>
      <div id="page-wrap" v-if="selected_product">
         <h4 v-if="notif" class="notif">item added successfully</h4>
         <div id="img-wrap">
            <!-- <img :src="`http://localhost:8000${selected_product.imageUrl}`" alt="" /> -->
            <img :src="selected_product.imageUrl" alt="" />
         </div>
         <div id="selected_product-details">
            <h1>{{ selected_product.name }}</h1>
            <h3 id="price">Rp{{ selected_product.price }}</h3>
            <p>Average rating: {{ selected_product.averageRating }}</p>
            <button id="add-to-cart" @click="addToCart()">Add to Cart</button>
            <p>{{ selected_product.description }}</p>
         </div>
      </div>

      <NotFound v-else />
   </div>
</template>

<script>
import {products} from '../../data-seed'
import NotFound from '../../views/error/404.vue'

export default {
   components: {
      NotFound
   },
   data() {
      return {
         products
      }
   },
   computed: {
      selected_product() {
         return this.products.find((item) => { // find selected product
            return item.id === this.$route.params.id // get route params with name :id
         })
      }
   },
   mounted() { // lifecycle pada saat komponen dibuka
      console.log(this.selected_product)
   }
};
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
