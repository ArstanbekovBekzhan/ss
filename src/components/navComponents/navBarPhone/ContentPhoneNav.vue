<template>
    <div class="meniuDefult" :class="{ activeMeniu: this.openCloseStore.status , CCloseMeniu: this.openCloseStore.status === false}">
            <div @click="closeMeniu">
            <CloseBurButton />
        </div>
        <div class="conteiner conteiner1">
            <div @click="closeMeniu"> <NavLogo /></div>
            <NavBurger />
        </div>
        <div class="conteiner conteiner2">
            <NavButton>Пройти тестирование</NavButton>
        </div>
        </div>
</template>
<script>
import { mapStores } from 'pinia'
import { useOpenCloseStore } from '@/store/closeOpenmeniu'
import NavLogo from '../NavLogo.vue';
import NavBurger from '../navBarPhone/BurgerMeniuComponents/NavigatonsBurger.vue';
import NavButton from '@/components/navComponents/NavButton.vue'
import CloseBurButton from './BurgerMeniuComponents/CloseBurButton.vue'
export default {
    components: {
        
        NavLogo,
        NavBurger,
        NavButton,
        CloseBurButton
    },
    computed: {
        ...mapStores(useOpenCloseStore)
    },

    methods: {
        closeMeniu() {
            this.openCloseStore.close()
        }

    }


}


</script>
<style lang="scss" scoped>

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}
.CCloseMeniu{
  left: -100%;
  transition: all 600ms;
}
.meniuDefult {
    width: 100%;
    height: 100vh;
    background-color:rgb(48, 99, 88);
    position: fixed;

    top: 0;
    left: -100%;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 3;
  
    


    .conteiner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .conteiner1 {
        height: 70%;
        overflow: auto;
        overflow-x: hidden;
         background-color: rgba(176, 209, 194, 1);
         padding-top: 10px;

    }

    .conteiner2 {
        height: 20%;
        background-color: rgba(48, 99, 88, 0.966);
        display: flex;
        justify-content: center;
        -webkit-box-shadow: 0px -6px 5px -5px rgba(53, 56, 42, 0.6);
        -moz-box-shadow: 0px -6px 5px -5px rgba(53, 56, 42, 0.6);
        box-shadow: 0px -6px 5px -5px rgba(53, 56, 42, 0.6);
    }

}

.activeMeniu {
    left: 0;
    transition: all 600ms;
}

@media screen and (min-width: 1001px) {
    .activeMeniu {
        display: none;
    }

}
  
</style>