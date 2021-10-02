import axios from 'axios';

class Api {
  url;

  constructor(resource) {
    this.url = `${process.env.REACT_APP_API_URL}/${resource}`;
  }

  get = async (id, params) => {
    return this.buildQuery('get', params, id);
  };

  post = async (params, prefix) => {
    return this.buildQuery('post', params, prefix);
  };
  put = async (id, params) => {
    return this.buildQuery('put', params, id);
  };

  destroy = async (id) => {
    return this.buildQuery('delete', {}, id);
  };

  buildQuery = async (method, params, prefix) => {
    const token = `Bearer ${localStorage.token}`;
    return axios({
      url: this.getFullUrl(prefix),
      method,
      data: params.data,
      params: params.params,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
  };

  getFullUrl = (prefix) => {
    return `${this.url}${prefix ? `/${prefix}` : ''}`;
  };
}

export default Api;
