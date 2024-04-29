<template>
  <div class="home d-flex justify-center align-center direction-column">
    <div class="container">
      <div class="home-screen">
        <div>
          <div class="home-title text-white roboto-bold">
            {{ $t("home-title") }}
          </div>
          <div class="home-text text-white">{{ $t("home-text") }}</div>
          <button
            @click="toggleModal"
            class="bg-white home-btn hover:bg-slate-200"
          >
            {{ $t("getoffreecan") }}
          </button>
        </div>
        <img src="../assets/a.gif" alt="" />
      </div>
      <div class="company-about" id="about" for="about">
        <div class="va-h3">Nevosoft - Information Technologies Company</div>
        <div class="d-flex">
          <div class="col-7 pr-5">
            <div class="company-about-title">
              {{ $t("about-title") }}
            </div>
            <p class="company-about-text">
              {{ $t("about-txt") }}
            </p>
          </div>
          <div class="col-5">
            <div class="d-flex ml-16 justify-between">
              <div>
                <div class="company-about-right">1 +</div>
                <div class="company-about-text">{{ $t("year-exprenc") }}</div>
              </div>
              <div>
                <div class="company-about-right">{{ employees.length + 5 }} +</div>
                <div class="company-about-text">{{ $t("colegn") }}</div>
              </div>
              <div>
                <div class="company-about-right">20 +</div>
                <div class="company-about-text">{{ $t("projects") }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex ml-5 h-36 mt-8">
          <div
            class="employees-avatar"
            v-for="employe in employees"
            :key="employe._id"
          >
            <img
              class="employees-avatar-img"
              :src="`${imgUrl}/${employe?.img[0]}`"
              alt=""
            />
          </div>
          <div
            class="employees-avatar d-flex justify-center align-center bg-gray-400"
          >
            <span class="va-h2 text-white"> + 5 </span>
          </div>
        </div>
      </div>
      
      <div class="products" id="products" for="products">
        <h1 class="va-h1 ml-4 mb-10">{{$t('product-title')}}</h1>
        <div class="row">
          <product-item/>
        </div>
      </div>
      <div class="question" id="question" for="question">
        <h1 class="va-h1 ml-5 mb-10">{{$t('question-title')}}</h1>
        <div class="row">
          <div class="question-left">
            <div class="question-box" @click="handleId(1)">
              <div class="d-flex justify-between align-center">
                <div class="question-box-title">
                  <template v-if="id != 1">
                    {{ $t('question1') }}
                    <!-- <span v-if="ques.title.length > 58">...</span> -->
                  </template>
                  <template v-else>
                    {{ $t('question1') }}
                  </template>
                </div>
                <span :class="`question-box-arrow ${id == 1?'active':''}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    class="text-gray-600"
                  >
                    <path
                      d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="question-box-text" v-if="id == 1">
                {{ $t('answer1') }}
              </div>
            </div>
            <div class="question-box" @click="handleId(2)">
              <div class="d-flex justify-between align-center">
                <div class="question-box-title">
                  <template v-if="id != 2">
                    {{ $t('question2').substring(0,58) }}
                    <span>...</span>
                  </template>
                  <template v-else>
                    {{ $t('question2') }}
                  </template>
                </div>
                <span :class="`question-box-arrow ${id == 2?'active':''}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    class="text-gray-600"
                  >
                    <path
                      d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="question-box-text" v-if="id == 2">
                {{ $t('answer2') }}
              </div>
            </div>
            <div class="question-box" @click="handleId(3)">
              <div class="d-flex justify-between align-center">
                <div class="question-box-title">
                  <template v-if="id != 3">
                    {{ $t('question3') }}
                  </template>
                  <template v-else>
                    {{ $t('question3') }}
                  </template>
                </div>
                <span :class="`question-box-arrow ${id == 3?'active':''}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    class="text-gray-600"
                  >
                    <path
                      d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="question-box-text" v-if="id == 3">
                {{ $t('answer3') }}
              </div>
            </div>
            <div class="question-box" @click="handleId(4)">
              <div class="d-flex justify-between align-center">
                <div class="question-box-title">
                  <template v-if="id != 4">
                    {{ $t('question4') }}
                  </template>
                  <template v-else>
                    {{ $t('question4') }}
                  </template>
                </div>
                <span :class="`question-box-arrow ${id == 4?'active':''}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    class="text-gray-600"
                  >
                    <path
                      d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="question-box-text" v-if="id == 4">
                {{ $t('answer4') }}
              </div>
            </div>
          </div>
          <div class="question-right">
            <div class="question-box" @click="handleId(5)">
              <div class="d-flex justify-between align-center">
                <div class="question-box-title">
                  <template v-if="id != 5">
                    {{ $t('question5') }}
                    <!-- <span v-if="ques.title.length > 58">...</span> -->
                  </template>
                  <template v-else>
                    {{ $t('question5') }}
                  </template>
                </div>
                <span :class="`question-box-arrow ${id == 5?'active':''}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    class="text-gray-600"
                  >
                    <path
                      d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="question-box-text" v-if="id == 5">
                {{ $t('answer5') }}
              </div>
            </div>
            <div class="question-box" @click="handleId(6)">
              <div class="d-flex justify-between align-center">
                <div class="question-box-title">
                  <template v-if="id != 6">
                    {{ $t('question6') }}
                  </template>
                  <template v-else>
                    {{ $t('question6') }}
                  </template>
                </div>
                <span :class="`question-box-arrow ${id == 6?'active':''}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    class="text-gray-600"
                  >
                    <path
                      d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="question-box-text" v-if="id == 6">
                {{ $t('answer6') }}
              </div>
            </div>
            <div class="question-box" @click="handleId(7)">
              <div class="d-flex justify-between align-center">
                <div class="question-box-title">
                  <template v-if="id != 7">
                    {{ $t('question7') }}
                  </template>
                  <template v-else>
                    {{ $t('question7') }}
                  </template>
                </div>
                <span :class="`question-box-arrow ${id == 7?'active':''}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    class="text-gray-600"
                  >
                    <path
                      d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="question-box-text" v-if="id == 7">
                {{ $t('answer7') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
export default {
  name: "HomeView",
  components:{
    ProductItem
  },
  data() {
    return {
      id: "",
      show: false,
    };
  },
  computed: {
    employees() {
      return this.$store.getters.employees;
    },
    question() {
      return this.$store.getters.question;
    },
    imgUrl() {
      return this.$store.getters.imgUrl;
    },
  },
  methods: {
    handleId(_id) {
      if (_id === this.id) {
        this.id = "";
      } else {
        this.id = _id;
      }
    },
    toggleModal() {
      this.$emit("toggleModal");
    },
  },
  mounted() {
    this.$store.dispatch("allEmployees");
    this.$store.dispatch("allQuestion");
  },
};
</script>

<style lang="scss">
@import "../styles/pages/home.scss";
</style>
