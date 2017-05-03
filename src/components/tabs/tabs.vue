<script type="text/babel">
export default {
    props: {
        value: String,
        type: {
            type: String,
            default: 'card'
        },
        noBodyPadding: Boolean
    },
    data() {
        return {
            panes: [],
            currentName: this.value
        }
    },
    methods: {
        addTabPane(pane) {
            this.panes.push(pane)
        },
        changeActiveTab(value) {
            this.setCurrentName(value)
            this.$emit('input', this.currentName)
            this.$emit('active-change', this.currentName)
        },
        setCurrentName(value) {
            this.currentName = value
        }
    },
    render(h) {
        const { changeActiveTab, type, noBodyPadding } = this;
        const navHtml = this._l(this.panes, (pane, index) => {
            index = index + 1;
            const tabName = pane.name || pane.index || index;
            const labelContent = pane.$slots.label || pane.label;
            pane.index = `${index}`;
            return (
                <li on-click={ev => { changeActiveTab(tabName, ev) }} class={{
                    '_rc_tab__active': pane.showTabPane,
                    'tabItem': true
                }}>
                    <a class={{ '_rc_tab__active': pane.showTabPane }} href="javascript:;">
                        {labelContent}
                    </a>
                </li>
            );
        });

        return (
            <div class='_rc_tab__tab _rc_common__clearfix'>
                <ul class={{
                    _rc_tab__lineNav: true,
                    _rc_tab__nav: true,
                    _rc_common__clearfix: true
                }}>
                    {navHtml}
                </ul>
                <div class={{
                    'tab-content': true,
                    'no-padding': noBodyPadding
                }}>
                    {this.$slots.default}
                </div>
            </div>
        )
    },
    mounted() {
        if (!this.currentName) {
            // 设置选项卡的默认值，默认选中第一项
            this.setCurrentName(this.panes[0].name || '1')
        }
    },
    watch: {
        value(value) {
            this.setCurrentName(value)
        }
    }
}
</script>

<style lang="less">

</style>
