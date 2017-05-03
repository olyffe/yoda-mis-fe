<template>
    <div>
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
 </style>
