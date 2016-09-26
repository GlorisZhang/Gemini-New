<template>
    <div class="weui_tabbar">
        <a id="{{item.id}}" data-id="{{item.id}}" href="javascript: void (0);"
           :class="[defaultClass, item.active ? activeClass : '']" v-for="item in list"
           @click="activeTab(item.id)">
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
            responseData: {
                type: Array,
                required: true,
                default: []
            }
        },
        data () {
            return {
                list: [],
                defaultClass: 'weui_tabbar_item',
                activeClass: 'weui_bar_item_on'
            }
        },
        created () {
            if (this.responseData.length > 0) {
                this.list = this._processTabBarData(this.responseData);
            }
        },
        methods: {
            activeTab (currentId) {
                for (var i = 0; i < this.list.length; i++) {
                    if (this.list[i]['id'] === currentId) {
                        this.list[i].active = true;
                        this.list.$set(i, this._deepClone(this.list[i]));
                    } else {
                        this.list[i].active = false;
                        this.list.$set(i, this._deepClone(this.list[i]));
                    }
                }
                this.$dispatch('child-msg', this.list);
            },
            _processTabBarData (array) {
                for (var i = 0; i < array.length; i++) {
                    var arrayObj = array[i];
                    if (i === 0) {
                        arrayObj['active'] = true;
                    } else {
                        arrayObj['active'] = false;
                    }
                }
                return array;
            },
            _deepClone (obj) {
                var o = obj instanceof Array ? [] : {};
                for (var i in obj) {
                    o[i] = typeof obj[i] === Object ? this._deepClone(obj[i]) : obj[i];
                }
                return o;
            }
        }
    }
</script>
