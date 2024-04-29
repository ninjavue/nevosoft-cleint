<template>
  <div class="col-6" v-for="p in products" :key="p._id">
    <div class="product-box">
      <img :src="`${imgUrl}/${p?.image[0]}`" class="product-img" />
      <div class="d-flex justify-between align-center px-3 mt-4 mb-5">
        <div class="product-title">
          {{ p.title }}
        </div>
        <a target="_blank" :href="`https://${p.link}`" class="product-link">
          {{ p.link }}
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#333333" class="ml-2"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"></path></svg>
          </span>
        </a>
      </div>
      <div class="px-3 product-text mb-10">
        {{ p.description.substring(0,65) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    imgUrl() {
      return this.$store.getters.imgUrl;
    },
    products() {
      return this.$store.getters.product;
    },
  },
  mounted() {
    this.$store.dispatch("allProduct");
  },
};
</script>

<style lang="scss">
@import "../styles/components/product.scss";
</style>