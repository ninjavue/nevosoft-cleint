<template>
  <div class="ns-header">
    <div class="ns-content container">
      <router-link to="/" class="ns-header-logo roboto-bold">
        Nevosoft
      </router-link>
      <div class="ns-header-right">
        <VaDropdown trigger="hover">
          <template #anchor>
            <div class="gap-1 d-flex justify-center align-center">
              <svg
                width="23"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.333 12C23.333 5.92487 18.4081 1 12.333 1C6.25788 1 1.33301 5.92487 1.33301 12C1.33301 18.0751 6.25788 23 12.333 23C18.4081 23 23.333 18.0751 23.333 12ZM3.97533 8.65452C4.8887 6.37479 6.7078 4.5557 8.98753 3.64232C8.45265 4.67487 8.03307 5.96224 7.75027 7.41726C6.29524 7.70006 5.00788 8.11964 3.97533 8.65452ZM15.6785 3.64232C16.2134 4.67487 16.633 5.96224 16.9157 7.41726C18.3708 7.70006 19.6581 8.11964 20.6907 8.65452C19.7773 6.37479 17.9582 4.5557 15.6785 3.64232ZM3.33301 12C3.33301 11.1008 4.96169 10.125 7.44749 9.53819C7.37206 10.3308 7.33301 11.155 7.33301 12C7.33301 12.845 7.37206 13.6692 7.44749 14.4618C4.96169 13.875 3.33301 12.8992 3.33301 12ZM17.333 12C17.333 12.845 17.294 13.6692 17.2185 14.4618C19.7043 13.875 21.333 12.8992 21.333 12C21.333 11.1008 19.7043 10.125 17.2185 9.53819C17.294 10.3308 17.333 11.155 17.333 12ZM3.97533 15.3455C5.00788 15.8804 6.29524 16.2999 7.75027 16.5827C8.03307 18.0378 8.45265 19.3251 8.98753 20.3577C6.7078 19.4443 4.8887 17.6252 3.97533 15.3455ZM16.9157 16.5827C16.633 18.0378 16.2134 19.3251 15.6785 20.3577C17.9582 19.4443 19.7773 17.6252 20.6907 15.3455C19.6581 15.8804 18.3708 16.2999 16.9157 16.5827ZM9.33301 12C9.33301 11.0097 9.39511 10.0597 9.50563 9.17262C10.3927 9.06211 11.3428 9 12.333 9C13.3233 9 14.2733 9.06211 15.1604 9.17262C15.2709 10.0597 15.333 11.0097 15.333 12C15.333 12.9903 15.2709 13.9403 15.1604 14.8274C14.2733 14.9379 13.3233 15 12.333 15C11.3428 15 10.3927 14.9379 9.50563 14.8274C9.39511 13.9403 9.33301 12.9903 9.33301 12ZM9.8712 16.8855C10.458 19.3713 11.4338 21 12.333 21C13.2323 21 14.208 19.3713 14.7948 16.8855C14.0022 16.961 13.178 17 12.333 17C11.488 17 10.6638 16.961 9.8712 16.8855ZM12.333 3C11.4338 3 10.458 4.62868 9.8712 7.11448C10.6638 7.03905 11.488 7 12.333 7C13.178 7 14.0022 7.03905 14.7948 7.11448C14.208 4.62868 13.2323 3 12.333 3Z"
                  fill="#06048c"
                ></path>
              </svg>
              <span class="text-gray-600 roboto-medium">
                {{ $i18n.locale }}
              </span>
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
            </div>
          </template>
          <VaDropdownContent class="p-0 w-40 mt-3" style="z-index: 1010;">
            <div
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              class="roboto-regular text-gray-500 block py-3 px-5 hover:bg-gray-200 hover:text-black cursor-pointer"
              @click="handleLanguage(locale)"
              :value="locale"
            >
              {{ locale }}
            </div>
          </VaDropdownContent>
        </VaDropdown>
        
        <a class="ns-header-link" href="#services">{{$t('services')}}</a>
        <a class="ns-header-link" href="#technology">{{$t('technology')}}</a>
        <a class="ns-header-link" href="#about">{{$t('company')}}</a>
        <a class="ns-header-link" href="#products">{{$t('works')}}</a>
        <VaButton @click="toggleModal">
            {{ $t('getquote') }}
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#ffffff" class="ml-2"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg>
        </VaButton>
      </div>
      <VaButton class="mobile-btn" @click="isMobile = !isMobile" round icon="menu" />
    </div>
  </div>

  <div :class="`ns-mobile ${isMobile?'active':''}`">
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ullam reprehenderit soluta eius, animi illum dolorem reiciendis, nesciunt totam natus, accusamus aspernatur! Veritatis a eum eligendi voluptatum voluptas provident deserunt?</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langauges: [
        {
          title: "Uzbek",
          link: "/uz",
        },
        {
          title: "Russia",
          link: "/ru",
        },
        {
          title: "English",
          link: "/en",
        },
      ],
      isMobile: false
    };
  },

  methods: {
    handleLanguage(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem('language', locale)
      this.handleLoad()
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    toggleModal(){
      this.$emit('toggleModal');
    },
    handleLoad(){
      this.$emit('handleLoad');
    }
  },
  mounted() {
    const language = localStorage.getItem('language')
    if(language){
      this.changeLanguage(language);
    }
  },
};
</script>

<style lang="scss">
@import "../../styles/layouts/header.scss";
</style>