<template >
    <div class="boxtop">
        <header :class="{ scrollNAv: this.heightSCroll > 90 }">
            <div class="phoneConteiner">
              <BurgerMeniu/>  
            </div>
            <div class="nonBloke">
                <div class="Mainconteiner">
                    <NavLogo />
                    <NavNavigation />
                    <div class="box">
                        <language />
                        <Button-v> <router-link class="testingPush" to="/testing/1"> Пройти тестирование</router-link></Button-v>
                    </div>
                </div>
            </div>
        </header>
</div>
</template>
<script>
import NavNavigation from '../components/navComponents/NavNavigations.vue'
import NavButton from '@/components/navComponents/NavButton.vue';
import NavLogo from './navComponents/NavLogo.vue';
import BurgerMeniu from './navComponents/navBarPhone/BurgerMeniuComponents/BurgerMeniu.vue';
import language from './navComponents/NavlanguageDown.vue';

export default {
    components: {
        'Button-v': NavButton,
        NavLogo,
        NavNavigation,
        BurgerMeniu,
        language
    },
    data() {
        return {
            heightSCroll: 0
        }
    },
    methods: {
        navScrol() {
            window.addEventListener('scroll', () => {
                this.heightSCroll = window.scrollY
            })
        }
    },
    mounted() {
        this.navScrol()
    }

}
</script>
<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.phoneConteiner{
    width: 100%;
    height: 100px;
    background-color:#408448;
    display: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 10px 0px;
}

.boxtop {
    height: 90px;
}

.scrollNAv {
    background-color: #306358;
    border-radius: 150px;
    margin-top: 10px;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.25);
}

header {
    position: relative;
    z-index: 2;
    padding: 0 104px;
    position: fixed;
    width: 100%;
    transition: all 700ms;

    .Mainconteiner {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90px;

        .box {
            display: flex;
        }
    }
}

@media (max-width: 1158px) {
    header {
        padding: 0px 20px;
    }
}

@media (max-width: 1026px) {
    .scrollNAv {
        border-radius: 0;
        margin-top: 0%;
    }

    header {
        padding: 0px 10px;
    }
}

@media (max-width: 994px) {
    .nonBloke {
        display: none;
    }
    .phoneConteiner{
      display: block;
    }
    header{
        padding: 0;
    }
}
.testingPush{
    color: white;
    text-decoration: none;
}
</style>