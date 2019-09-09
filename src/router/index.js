import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

import store from '@/store'
import api from '@/api'
import profile from './profile'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    profile,
  ]
})

router.beforeEach(async (to, from, next) => {
  if(!store.getters['user/isLoaded']) {
    if(store.getters['user/token']) {
      console.log(store.getters['user/token']);
      await api.user.getData(store.getters['user/token'])
        .then(res => {
          store.commit('user/auth', store.getters['user/token']);
          store.commit('user/saveData', res.data);
        })
        .catch(err => {
          console.error('Invalid auth token.');
        });
    }
    store.commit('user/load');
  }

  next();
});

export default router;
