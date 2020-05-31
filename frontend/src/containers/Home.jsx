import React, { Component } from 'react';
import Categories from '../components/Categories';
import { client } from '../client';

/** @typedef {import('../../types').Article} Article */

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /** @type {Readonly<Article[]>} */
      articles: [],
      /** @type {'idle'|'started'|'pending'|'resolved'|'error'} */
      fetchState: 'idle',
    };

    this.getAllArticles();
  }

  getAllArticles() {
    this.setState({ fetchState: 'started' });
    client
      .getAllArticles()
      .then((articles) => {
        this.setState({ fetchState: 'resolved', articles });
      })
      .catch((error) => {
        console.error({ error });
        this.setState({ fetchState: 'error' });
      });
  }

  render() {
    const { articles, fetchState } = this.state;
    /** @type {{[category: string]: Article[]}} */
    const articlesByCategory = articles.reduce((categories, article) => {
      const { category } = article;
      if (categories[category]) {
        categories[category].push(article);
      } else {
        // eslint-disable-next-line no-param-reassign
        categories[category] = [article];
      }
      return categories;
    }, {});
    switch (fetchState) {
      case 'idle':
        return <div>Pendiente de solicitar artículos</div>;

      case 'pending':
        return <div>Cargando...</div>;
      case 'started':
        return <div>Petición iniciada, no deverías de ver esto</div>;
      case 'error':
        return <div>Petición con error</div>;
      case 'resolved':
        return (
          <div className='Home'>
            {Object.keys(articlesByCategory).map((category) => (
              <Categories
                category={category}
                articles={articlesByCategory[category]}
              />
            ))}
          </div>
        );
      default:
        return <div>Estado incosistente, que pasó aquí?</div>;
    }
  }
}

export default Home;
