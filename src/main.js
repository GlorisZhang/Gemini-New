/**
 * Created by Greg Zhang on 2016/9/19.
 */

import Vue from 'vue';
import Router from 'vue-router';
import startActivity from './business/start-activity.vue';
import newsIndexActivity from './business/news-index-activity.vue';
import './assets/css/weui.css';
import './assets/css/app.css';
// install router
Vue.use(Router);

// routing
var router = new Router();

router.map({
    '/news': {
        component: newsIndexActivity
    }
});

router.redirect({
    '*': '/news'
});

router.start(startActivity, '#app');
