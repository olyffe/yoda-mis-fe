<template>
    <div class="header">
        <img class="logo" src="data:image/jpeg;base64,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"/>
        <div class="linkWrapper">
            <router-link :to="'/home'" class="item">首页</router-link>
            <router-link :to="'/interface'" class="item">接口管理</router-link>
            <router-link :to="'/demand'" class="item">需求管理</router-link>
            <router-link :to="'/authority'" class="item">权限管理</router-link>
        </div>
        <slot name="testinput"></slot>
        <input v-model="username" v-if="cond" @change="setUser" >
        <ul class="user">
            <li><span>欢迎</span></li>
            <li><a href="javascript:void(0)">退出</a></li>
        </ul>
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                username: ''
            };
        },
        props: ['cond'],
        methods: {
            setUser: function () {
                // body...
                this.$emit('transferUser', this.username);
            }
        }
    };
</script>

<style lang="less" scoped>
    @import '../common/style/header';
    .router-link-active {
        background: #118bfb;
        color: white;
    }
</style>
