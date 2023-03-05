<template>
    <swiper
        :scrollbar="{ hide: false }"
        :modules="modules"
        class="mySwiper"
        slides-per-view="3"
        :autoplay="true"
        :center-insufficient-slides="true"
        :space-between="20"
    >
        <swiper-slide v-for="comment in comments" :key="comment.id">
            <div class="comment-card">
                <h2>{{ comment.title }}</h2>
                <p>{{ comment.body }}</p>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar, Autoplay } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Scrollbar, Autoplay],
            comments: [],
        };
    },
    methods: {
        async getComments() {
            const URL = "http://localhost:3000/comments";
            const res = await fetch(URL);
            const data = await res.json();
            this.comments = await data;
        },
    },
    mounted() {
        this.getComments();
    },
};
</script>
<style lang="scss">
.comment-card {
    background-color: #d9d9d9;
    border-radius: 12px;
    height: 333px;
    padding: 25px;
    overflow: hidden;

    h2 {
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 700;
        line-height: 33px;
        color: #000000;
        margin-bottom: 3px;
    }

    p {
        font-family: Raleway;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        margin: 0;
        overflow: scroll;
        max-height: 333px;

        &::-webkit-scrollbar {
            display: none;
        }
    }
}

.swiper {
    height: 405px;
    margin-top: 100px;
}

.swiper-horizontal > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
    left: calc(50% - 250px) !important;
    max-width: 500px !important;
}
</style>
