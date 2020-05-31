import 'whatwg-fetch';

/** @typedef {import('../types').Article} Article */

/**
 * Clase de cliente paara simplificar peticiones a la api REST
 */
class Client {
  constructor({ apiUrl } = {}) {
    if (!apiUrl) {
      throw new Error('Missing apiUrl parameter for client');
    }
    /** @type {string} */
    this.apiUrl = apiUrl;
  }

  /**
   * Solicita con fetch a la api una ruta arbitraria
   * @param {string} path La ruta a solicitar
   */
  get(path) {
    const url = new URL(`/api${path}`, this.apiUrl).toString();
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error(
          `Error procesando la petición ${url}`,
          error,
        );
        throw error;
      });
  }

  /**
   * Obtiene listado de articulos opcionalmente por categoría
   * @param {{category?: string}} [parametros]
   * @returns {Promise<Article[]>}
   */
  getArticles({ category } = {}) {
    let path = '/articles';
    if (category) {
      path += `?q=${category}`;
    }
    return this.get(path);
  }

  /**
   * Obtiene listado de articulos ordenados por categorías en un array bidimencional
   * @returns {Promise<{[category: string]: Article[]}>} Los articulos organizados por categoría
   */
  getArticlesByCategory() {
    return this.getArticles().then((articles) => {
      /** @type {{[category: string]: Article[]}} */
      const articlesByCategory = articles.reduce((acomulator, article) => {
        const { category } = article;
        if (acomulator[category]) {
          acomulator[category].push(article);
        } else {
          // eslint-disable-next-line no-param-reassign
          acomulator[category] = [article];
        }
        return acomulator;
      }, []);
      return articlesByCategory;
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export const client = new Client({ apiUrl: process.env.API_ENDPOINT });
