<template>
  <loading-item v-if="!show"/>
 <template v-else>
  <header-item @toggleModal="toggleModal" @handleLoad="handleLoadLang" />
  <router-view @toggleModal="toggleModal" />
  <footer-item />
  <VaModal v-model="toggle" hide-default-actions overlay-opacity="0.2" blur  size="large">
    <modal-item @toggleModal="toggleModal"/>
  </VaModal>
 </template>
</template>

<script>
import FooterItem from './components/layout/FooterItem.vue';
import HeaderItem from "./components/layout/HeaderItem.vue";
import LoadingItem from './components/LoadingItem.vue';
import ModalItem from "./components/ModalItem.vue";
export default {
  components: {
    HeaderItem,
    ModalItem,
    LoadingItem,
    FooterItem,
  },
  data() {
    return {
      toggle: false,
      show: false,
    };
  },
  methods: {
    toggleModal() {
      this.toggle = !this.toggle
    },
    handleLoadLang(){
        this.show = !this.show
        this.handleLoad()
    },
    handleLoad(){
      setTimeout(() => {
        this.show = !this.show
      }, 1000)
    }
  },
  
  mounted(){
    this.handleLoad()
  }
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
