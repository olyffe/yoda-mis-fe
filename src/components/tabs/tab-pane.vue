<template>
    <div class="tab-pane" :class="{ _rc_tab__active: showTabPane }">
        <slot v-if="!$slots.content"></slot>
        <slot v-if="$slots.content" name="content"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 选项卡的序号
            index: null
        }
    },
    props: {
        // 选项卡标题
        label: String,
        // 选项卡的标识符
        name: String
    },
    computed: {
        // 计算是否显示当前TabPane
        showTabPane() {
            return this.$parent.currentName === (this.name || this.index)
        }
    },
    created() {
        this.$parent.addTabPane(this)
    }
}
</script>
