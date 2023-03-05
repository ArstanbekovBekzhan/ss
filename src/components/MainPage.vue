<template>
    <ContentPhoneNav />
    <div class="mainWraper" :class="{ mobile280: this.AppWith < 376}">
        <div class="mainConteiner">
            <div class="contConeiner">
                <div class="Header">
                    <h1 :class="{ mobileHeader: this.AppWith < 332}">Почувствуй себя на дороге уверенно!</h1>
                </div>
                <div class="paragraf">
                    <p>Права категории В и восстановление навыков вождения</p>
                </div>
                <div class="buttonWrapper">
                    <NavButton>Записаться</NavButton>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ContentPhoneNav from '../components/navComponents/navBarPhone/ContentPhoneNav.vue'
import NavButton from './navComponents/NavButton.vue';
export default {
    components: {
        NavButton,
        ContentPhoneNav
    },
    data() {
        return {
            AppWith: 0
        }
    },
    
    methods: {
       mobileWith() {
        this.AppWith = window.innerWidth
       }
    },
    mounted() {
        window.addEventListener('resize',this.mobileWith)
    },
  

}
</script>
<style lang="scss" scoped>
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}


.mainWraper {

    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 0 100px 0;
    padding-top: 30px;
    height: 580px;

    .mainConteiner {

        width: 100%;
        background: url('../imagesHeader/bacraundMain.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        box-shadow: 2px 2px 20px 5px rgba(0, 0, 0, 0.25);

        .contConeiner {
            width: 95%;
            height: 95%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .Header {
                width: 45%;

                h1 {
                    font-family: 'Montserrat' sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 60px;
                    line-height: 78px;
                    display: flex;
                    align-items: flex-end;
                    color: #FFFFFF;
                }
            }

            .paragraf {
                width: 60%;

                p {
                    font-family: 'Raleway' sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 26px;
                    line-height: 33px;
                    color: #FFFFFF;
                }
            }
        }

    }
}
.mobile280{
 width: 100%;
 padding: 0;
 height: 630px;
 margin-bottom: 60px;

h1{
   line-height:normal !important;
   font-size: 50px !important;
}
 .mainConteiner{
    height: 100% ;
    border-radius: 0px;
    margin: 0;
    padding: 0; 
 }

}
</style>