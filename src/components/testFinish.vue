<template>
    <div class="main_wrapper">
        <div class="result_wrapper">
            <h1>Вы выйграли</h1>
            <h3>Вы набрали {{ valueStore.ANSWERS }} </h3>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useValueStore } from '../store/getValue';
export default {
    data() {
        return {

        }
    },
    methods: {
        
    },
    updated() {
        // this.returnnn()
    },
    mounted() {
    },
    computed:{
        ...mapStores(useValueStore)
    }
}
</script>
<style lang="scss">
@media screen and (max-width: 350px) {
    .result_wrapper{
        background: white;
        width: 200px;
        padding: 50px 30px;
        border-radius: 10px;      
    }
    .naaaaa{
    font-weight: 500;
    }
}
// @media screen and (max-width: 350px) {
//     .result_wrapper{
//         background: white;
//         width: 300px;
//         padding: 50px 30px;
//         border-radius: 10px;      
//     }
//     .naaaaa{
//     font-weight: 500;
//     }
// }
.result_wrapper{
  background: white;
  width: 500px;
  padding: 50px 30px;
  border-radius: 10px;
  h1{
    text-align: center;
    color: rgba(48, 99, 88, 1);
  }
}
.main_wrapper{
    height: 100vh ;
    background: rgba(48, 99, 88, 1);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>