<template>
  <div class="relative">
    <button @click="toggleModal" class="modal-close-btn absolute">
      <VaIcon class="text-gray-500 hover:text-blue-900" name="close" />
    </button>

    <div class="modal-content d-flex">
      <div class="col-3 mt-10">
        <h1 class="va-h1">{{$t('Submitanapplication')}}</h1>
        <p>
          {{ $t('submitdesc')}}
        </p>
      </div>
      <div class="col-9">
        <div class="mt-5 ml-5">
          <form @submit.prevent="handleSubmit">
            <div class="flex justify-center gap-3">
              <input
                class="modal-input"
                type="text"
                v-mask="'+998 ## ### ## ##'"
                placeholder="+998 00 000 00 00"
                v-model="newOrder.phone"
                required
              />
              <input
                class="modal-input"
                type="text"
                :placeholder="$t('name')"
                v-model="newOrder.name"
                required
              />
            </div>
            <input
              class="modal-input w-full mt-3"
              type="text"
              :placeholder="$t('desc')"
              v-model="newOrder.description"
              required
            />

            <p class="mb-3 mt-5">{{ $t('webType') }}</p>
            <button
              type="button"
              :class="`modal-btn ${isToggle == order._id ? 'active' : ''}`"
              v-for="order of orders"
              :key="order._id"
              @click="isToggle = order._id"
            >
              <template v-if="isLang == 'Uzbek'">
                {{ order?.name?.uz }}
              </template>
              <template v-else-if="isLang == 'English'">
                {{ order?.name?.en }}
              </template>
              <template v-else>
                {{ order?.name?.ru }}
              </template>
            </button>
            <div class="d-flex justify-between align-middle gap-3 w-full mt-5">
              <div></div>
              <VaButton size="large" round type="submit"
                >{{ $t('getoffreecan') }}</VaButton
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggle: "",
      newOrder:{
        name:'',
        phone:'',
        description:'',
        typeId:''
      },
      isLang:'Uzbek'
    };
  },
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
  },
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    },
    handleSubmit() {
      if(this.newOrder.name && this.newOrder.description && this.newOrder.phone){
        this.newOrder.typeId = this.isToggle
        this.$store.dispatch('postOrder', this.newOrder).then(res => {
          if(res.status == 200){
            this.$vaToast.init({
                message: "Ma'lumot yuborildi tez orada Menegerimiz sizga aloqaga chiqadi.",
                color: "success",
                position: "top-right",
              });
              this.newOrder = {}
              this.toggleModal()
          }else{
            this.$vaToast.init({
                message: "Serverda tuzatish ishlari olib borilmoqda birozdan keyin urinib ko'ring.",
                color: "danger",
                position: "top-right",
              });
          }
        }).catch(err => {
          console.log(err)
          this.$vaToast.init({
                message: "Serverda tuzatish ishlari olib borilmoqda birozdan keyin urinib ko'ring.",
                color: "danger",
                position: "top-right",
              });
        })
      }
    },
    handleLang(){
      this.$store.dispatch("allOrder");
      const lang = localStorage.getItem('language')
      if(lang){
        this.isLang = lang
      }
    }
  },
  mounted() {
    this.handleLang()
  },
  watch: {
    orders: {
      handler(newVal) {
        if (newVal.length > 0) {
          this.isToggle = newVal[0]._id;
        }
      },
      immediate: true,
    },
  },
  unmounted() {
    this.handleLang()
  },
};
</script>
<style lang="scss">
@import "../styles/layouts/modal.scss";
</style>