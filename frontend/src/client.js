import axios from 'axios';

class Client {
  constructor({ apiUrl = 'http://localhost:8000/api' } = {}) {
    this.apiUrl = apiUrl;
    this.axios = axios.create({
      baseURL: this.apiUrl,
    });
  }

  /**
   * Obtiene el listado de articulos
   * @returns {Promise<import('../types').Article[]>}
   */
  getAllArticles() {
    return this.axios.get('/articles').then(({ data }) => data);
  }
}

// eslint-disable-next-line import/prefer-default-export
export const client = new Client();
