<template>
    <nav class="navLinks">
        <router-link to="#" class="aboutMe">Обо мне</router-link>
        <router-link to="#">Методичка</router-link>
        <router-link to="#">Видеоуроки</router-link>
        <router-link to="#">Отзывы</router-link>
        <router-link to="#">Контакты</router-link>
    </nav>
</template>

<style lang="scss" scoped>
.navLinks {
    width: 500px;
    display: flex;


    .aboutMe {
        font-size: 18px;
     
       color: #ffffff;
        font-weight: 400;
     
    }

    a {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
       color: #ffffff;
        transition-duration: 400ms;
        text-decoration: none;
        margin: 0px 10px;

        &:hover {
            color: #408448;
            font-weight: 900;
        }
    }

}

</style>