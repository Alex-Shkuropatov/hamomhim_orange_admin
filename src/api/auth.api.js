export default {


  login(data) {
    return env.API.post('/auth/login', data);
  },


  reg(data) {
    return env.API.post('/auth/reg', data);
  },
}
