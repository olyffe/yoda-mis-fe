<template>
    <div>
<!--         <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition> -->
        <div>
            <router-view></router-view>
        </div>        
    </div>
</template>

<script>
import headTop from './components/header';
export default {
    data() {
        return {

        };
    },
    created() {
        this.$store.dispatch('initUserInfo');
    },
    components: {
        headTop
    }
};

</script>

<style lang="less">
    @import './common/style/global';
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }    
 </style>
