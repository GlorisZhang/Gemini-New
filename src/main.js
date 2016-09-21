/**
 * Created by Greg Zhang on 2016/9/19.
 */

import Vue from 'vue';
import Router from 'vue-router';
import App from './business/App.vue';
import NewsIndex from './business/news-index.vue';
import './assets/css/weui.css';
import './assets/css/app.css';
// install router
Vue.use(Router);

// routing
var router = new Router();

router.map({
    '/news': {
        component: NewsIndex
    }
});

router.redirect({
    '*': '/news'
});

router.start(App, '#app');
