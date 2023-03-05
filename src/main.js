import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Layout from "./layout/BaseLayOut.vue";
import "./assets/main.scss";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("Layout", Layout);
app.use(createPinia());
app.use(vuetify);
app.component("swiper", Swiper);
app.component("swiper-slide", SwiperSlide);
