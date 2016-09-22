<template>
    <div class="weui_tabbar">
        <a data-id="{{item.id}}" href="javascript: void (0);" :class="['weui_tabbar_item', item.active ? 'weui_bar_item_on' : '']" v-for="item in list" @click.stop="activeTab(item.id)">
            <div class="weui_tabbar_icon">
                <img src="{{item.url}}" alt="{{item.name}}">
            </div>
            <p class="weui_tabbar_label">{{item.name}}</p>
        </a>
    </div>
</template>
<script>
    export default{
        name: 'Tabbar',
        props: {
            responsedata: {
                type: Array,
                required: true,
                default: []
            }
        },
        data () {
            return {
                list: []
            }
        },
        created () {
            if (this.responsedata.length > 0) {
                this.list = this._processTabBarData(this.responsedata);
            }
        },
        methods: {
            activeTab (currentId) {
                for (var i = 0; i < this.list.length; i++) {
                    if (this.list[i]['id'] === currentId) {
                        this.list[i]['active'] = true;
                    }else{
                        this.list[i]['active'] = false;
                    }
                }
                console.log(JSON.stringify(this.list));
            },
            _processTabBarData (array) {
                for (var i = 0; i < array.length; i++) {
                    var arrayObj = array[i];
                    if (i === 0) {
                        arrayObj['active'] = true;
                    }else{
                        arrayObj['active'] = false;
                    }
                }
                return array;
            }
        }
    }
</script>
