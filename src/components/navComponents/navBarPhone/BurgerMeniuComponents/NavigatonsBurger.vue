
<template>
    <div class="navLinks">
        <router-link to="#">Обо мне</router-link>
        <router-link to="#">Методичка</router-link>
        <router-link to="#">Видеоуроки</router-link>
        <router-link to="#">Отзывы</router-link>
        <router-link to="#">Контакты</router-link>
    </div>
</template>

<style lang="scss" scoped>
.navLinks {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;





    a {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        padding: 20px;
        color: rgba(48, 99, 88, 0.966);
        transition-duration: 500ms;
        text-decoration: none;
        border-top: 1px solid  rgba(48, 99, 88, 0.966); ;


        &:hover {
            color: #ffffff;
            font-weight: 900;
            background-color: rgba(48, 99, 88, 0.966);
        }
    }

}
</style>
