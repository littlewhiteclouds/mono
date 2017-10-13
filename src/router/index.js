import VueRouter from 'vue-router';


import home from '../components/home';
import mine from '../components/mine';
import community from '../components/community';
import discovery from '../components/discovery';
import recommend from '../components/recommend';

let routes = [{
    name: "home",
    path: '/',
    redirect: '/home'
  },
  {
    name: "recommend",
    path: '/recommend',
    component:recommend
  },{
    name: "discovery",
    path: '/discovery',
    component:discovery
  },
  {
    name: "community",
    path: '/community',
    component:community
  },
  {
    name: "mine",
    path: '/mine',
    component:mine
  }
];

let router = new VueRouter({
  routes
});

router.afterEach($route => {
  document.title = $route.meta.title;
});

export default router;
