export default {


  getData(token) {
    return env.API.get('/user/data', token ? {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    } : undefined);
  }
}
