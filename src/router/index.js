import VueRouter from 'vue-router';
import Axios from 'axios'

import brunch from '../components/home/brunch';
import home from '../components/home/home';
import photo from '../components/home/photo';
import recommend from '../components/home/recommend';
import myFeeds from '../components/home/myFeeds';
import music from '../components/home/music';
//底部按钮功能模块
import mine from '../components/bottom/mine';
import community from '../components/bottom/community';
import discovery from '../components/bottom/discovery';
//早午茶详情
import brunchDetail from '../components/home/brunchDetail';
let routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    children: [{
        path: '',
        redirect: 'brunch'
      },
      {
        path: 'brunch',
        component: brunch,
        meta: {
          title: '推荐'
        }
      },
      {
        path: 'music',
        component: music
      },
      {
        path: 'recommend',
        component: recommend
      },
      {
        path: 'photo',
        component: photo
      },
      {
        path: 'myFeeds',
        component: myFeeds
      }
    ]
  },
  {
    name: 'brunchDetail',
    path: '/brunchDetail',
    component: brunchDetail,
    meta: {
      title: '早午茶'
    }
  }, {
    name: "discovery",
    path: '/discovery',
    component: discovery
  },
  {
    name: "community",
    path: '/community',
    component: community
  },
  {
    name: "mine",
    path: '/mine',
    component: mine
  }
];

let router = new VueRouter({
  routes
});

router.afterEach($route => {
  document.title = $route.meta.title;
});

export default router;
