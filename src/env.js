import axios from 'axios'

const env = {

}

if(/test/.test(window.location)) {
  env.API_URL = 'http://hamomhim-orange.test';
} else {
  env.API_URL = 'http://hamomhim-orange.coelix.online';
}

env.API = axios.create({
  baseURL: env.API_URL + '/api',
});

// env.API.interceptors.request.use(conf => {
//   return conf;
// })

export default env;
