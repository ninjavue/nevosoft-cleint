<template>
  <div @click="toggleModal" class="mt-20 mb-20">
    hello
  </div>
</template>

<script>
export default {
 methods:{
    toggleModal(){
      this.$emit('toggleModal');
    }
 }
}
</script>

<style>

</style>