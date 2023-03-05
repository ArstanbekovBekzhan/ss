<script>
import { mapStores } from 'pinia'
import { useOpenCloseStore } from '@/store/closeOpenmeniu'
import Slider from "../components/Slider.vue";
import MainPage from '../components/MainPage.vue';
import AboutMe from "../components/AboutMe.vue";
import onLst from "../components/onLst.vue";
import BackFigura from "../components/MainPageComponents/BackFigura.vue";
export default {
  components: {
    Slider,
    MainPage,
    AboutMe,
    onLst,
    BackFigura
  },
  computed: {
        ...mapStores(useOpenCloseStore)
    },

}; 
</script>

<template>
    <div class="back_color" :class="{activScrolnon: this.openCloseStore.status}">
    <Layout>
      <div class="main">
        <div class="container">
          <BackFigura />
          <MainPage />
          <AboutMe />
          <Slider />
          <!-- <onLst/> -->
        </div>
      </div>
    </Layout>
  </div>
</template>
