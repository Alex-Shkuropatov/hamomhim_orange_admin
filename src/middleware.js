import store from '@/store';

export default {


  isLogged(to, from, next) {
    if(store.getters['user/isLogged']) {
      next();
    } else {
      next('/login');
    }
  },
};
