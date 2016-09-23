<template>
    <div class="tabbar">
        <div class="weui_tab">
            <div class="weui_tab_bd">
                <div class="navbar">
                    <div class="bd">
                        <div class="weui_tab">
                            <div class="weui_navbar">
                                <div class="weui_navbar_item weui_bar_item_on">
                                    选项一
                                </div>
                                <div class="weui_navbar_item">
                                    选项二
                                </div>
                                <div class="weui_navbar_item">
                                    选项三
                                </div>
                                <div class="weui_navbar_item">
                                    选项四
                                </div>
                                <div class="weui_navbar_item">
                                    选项五
                                </div>
                                <div class="weui_navbar_item">
                                    选项六
                                </div>
                            </div>
                            <div class="weui_tab_bd">

                            </div>
                        </div>
                    </div>
                </div>
                <!-- todo news-list -->
                {{msg}}
            </div>
            <tabbar :responsedata="responseData"></tabbar>
        </div>
    </div>
</template>
<script>
    import Tabbar from '../components/tabbar.vue';

    export default{
        name: 'NewsIndexView',
        components: {
            Tabbar
        },
        data () {
            return {
                responseData: [
                    {id: "1", name: "新闻", url: "http://localhost:8080/src/assets/images/icon_nav_article.png"},
                    {id: "2", name: "推荐", url: "http://localhost:8080/src/assets/images/icon_nav_msg.png"},
                    {id: "3", name: "直播", url: "http://localhost:8080/src/assets/images/icon_nav_button.png"},
                    {id: "4", name: "我", url: "http://localhost:8080/src/assets/images/icon_nav_cell.png"}
                ]
            }
        },
        route: {
            data ({ to }) {
//                console.log(to);
//                this.responseData = ;
//                return this.responseData;
            }
        }
    }
</script>
