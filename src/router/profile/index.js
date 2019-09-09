import multiguard from 'vue-router-multiguard';
import middleware from '@/middleware';

import Index from '@/views/Index';

export default {
  path: '/profile',
  component: Index,
  name: 'profile-test',
  beforeEnter: multiguard([ middleware.isLogged ]),
  children: []
};
