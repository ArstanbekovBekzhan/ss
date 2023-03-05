<template>
    <div>
        <nav-bar/>
        <main>
            <slot/>
        </main>    
        <v-footer/>    
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
export default {
    components:{
        'nav-bar':NavBar,
        'v-footer':Footer
    }
}
</script>

<style lang="scss">
    main{
        
    }
</style>