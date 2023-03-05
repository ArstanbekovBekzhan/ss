<template>
     <section class="footer">
        <div class="footer__container">

         <div class="footer__inner">
            <h2>Информация о тесте</h2>
        </div>
        
        <div class="footer__text">
            <p>Какой нибудь текст про тест</p>
        </div>

        <button class="btn">Пройти тестирование</button>

        </div> <!-- /footer__container -->

        <div class="footer__img">
        <img src="../assets/images/pexels-yan-krukau-8199761 1.png" alt="">
        </div>
        <div class="footer__icon">
            <img src="../assets/images/Group 27.png" alt="">
        </div>

    </section> <!-- /footer -->

 <section class="wrappppper">
    <div class="footer__block-2">

        <div class="footer__title">
        <h2>Как связаться со мной?</h2>
    </div>

    <div class="footer__text_2">
        <p>Если остались вопросы, можете связаться со мной удобным вам способом</p>
    </div>
    
    <button class="btn-2">Связаться</button>
    </div>
 </section>
</template>

<script>
export default {

}
</script>

<style>
/* ------------------- footer block-1 --------------- */

.footer{
    display: flex;
    justify-content: space-around;
    margin-bottom: 140px;
}

.footer__container{
    height: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.footer__inner{
    font-size: 30px;
    color: #032660;
    font-weight: 600;
    padding: 0;
}

.footer__text{
    font-weight: 400;
    font-size: 22px;
    padding: 0;
}

.btn{
    width: 300px;
    background: #032660;
    border-radius: 8px;
    padding: 12px;
    font-weight: 500;
    font-size: 18px;
    color: #fff;
} 

.footer__icon{
    position: relative;
    padding-top: 300px;
}
.footer__icon img{
    position: absolute;
}

/* ------------------  footer block-2 --------------- */


.footer__block-2{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1238px;
    background: url(../assets/images/Rectangle.png) center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: 6%;
    
}

.wrappppper{
    display: flex;
    justify-content: center;
    height: 400px;
}

.footer__title{
    color: #FFFFFF;
    font-weight: 600;
    font-size: 26px;
}

.footer__text_2{
    color: #FFFFFF;
    font-weight: 400;
    font-size: 19px;
    min-width: 27%;
    max-width: 23%;
}

.btn-2{
    color: #ffffff;
    border: 3px solid #032660;
    border-radius: 8px;
    width: 126px;
    min-height: 40px;
    position: relative;
    left: 0.1%;
    transform: translate(-1%, 0);
}
</style>