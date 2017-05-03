<template>
    <div>
        <head-top @transferUser="getUser" :cond="isok">
            <slot name="testinput"></slot>
        </head-top>
        <div style="border:2px solid blue">{{user}}</div>
        <h1>滴，权限页</h1>
    </div>
</template>

<script>
    import headTop from './header.vue';
    export default {
        data() {
            return {
                user: '',
                isok: true
            };
        },
        components: {
            headTop
        },
        methods: {
            getUser(msg) {
                this.user = msg;
            }
        }
    };
</script>
