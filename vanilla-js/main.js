import { Home, Detail } from './pages/index';
import Router from './router/index';
import './style.css';
import { $, createElem } from './utils/query-selectors';

class App {
  constructor() {
    this.$app = $('#app');
    this.router = new Router({
      pages: [
        new Home(
          this.$app,
          createElem('section', 'index-page', null),
          {},
          {
            name: 'Home',
            pathname: '/',
            meta: {},
          }
        ),
        new Detail(
          this.$app,
          createElem('section', 'detail-page', null),
          {},
          {
            name: 'Detail',
            pathname: '/detail/:id',
            meta: {},
          }
        ),
      ],
    });

    this.render();
  }

  render() {
    this.$app.innerHTML = '';

    async function route() {
      const page = await this.router.routePage({
        from: null,
        to: window.location.pathname,
      });

      page.render(true);
    }

    route.apply(this);
  }
}

new App();
