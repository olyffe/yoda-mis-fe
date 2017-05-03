<template>
    <div>
        <head-top></head-top>
        <Tabs type="border">
            <TabPane label="事件管理"></TabPane>
            <TabPane label="参数管理"></TabPane>
        </Tabs>
    </div>
</template>

<script>
    import headTop from './header.vue';
    import Tabs from './tabs/tabs.vue';
    import TabPane from './tabs/tab-pane.vue';
    export default {
        data() {
            return {
            };
        },
        components: {
            headTop,
            Tabs,
            TabPane
        }
    };
</script>
