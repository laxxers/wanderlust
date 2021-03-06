export default {
  request(method, url, data, successCb = null, errorCb = null) {
      return Vue.http[method](url, data).then(successCb, errorCb);
  },

  get(url, data = {}, successCb = null, errorCb = null) {
    return this.request('get', url, data, successCb, errorCb);
  },

  post(url, data, successCb = null, errorCb = null) {
    return this.request('post', url, data, successCb, errorCb);
  },

  put(url, data, successCb = null, errorCb = null) {
    return this.request('put', url, data, successCb, errorCb);
  },

  delete(url, data = {}, successCb = null, errorCb = null) {
    return this.request('delete', url, data, successCb, errorCb);
  }
}
