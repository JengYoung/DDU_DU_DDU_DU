class Router {
  #ROUTE_BACK_EVENT = 'update:route-go';
  #ROUTE_REPLACE_EVENT = 'update:route-replace';
  #ROUTE_PUSH_EVENT = 'udpate:route-push';

  constructor(props) {
    this.state = {
      ...props,
      pathname: window.location.pathname,
    };
  }

  setState(nextState) {
    this.state = {
      ...this.state,
      ...nextState,
    };
  }

  routePage({ from, to }) {
    /**
     * page들의 조건에 맞게 작성한다.
     *
     * @todo
     * [ ] 여러 페이지들의 path를 기본적으로 받는 state가 있어야 할 것이다.
     * [ ] 이를 정규표현식을 통해 걸러낼 수 있어야 한다.
     */
    const page = this.state.pages.find((page) => {
      const pathnameArr = page.routeHistory.pathname.split('/');
      const toArr = to.split('/');

      return toArr.every((path, idx) => new RegExp('(^:)|' + `^${path}$`).test(pathnameArr[idx]));
    });

    return page;
  }

  back() {
    window.history.go(-1);
    this.#dispatchRouteEvent(this.#ROUTE_BACK_EVENT, pathname);
  }

  go(n) {
    window.history.go(n);
    this.#dispatchRouteEvent(this.#ROUTE_BACK_EVENT, pathname);
  }

  replace(pathname) {
    window.replaceState(null, '', pathname);
    this.#dispatchRouteEvent(this.#ROUTE_REPLACE_EVENT, pathname);
  }

  push(pathname) {
    window.history.pushState(null, '', pathname);
    this.#dispatchRouteEvent(this.#ROUTE_PUSH_EVENT, pathname);
  }

  #dispatchRouteEvent(type, nextUrl) {
    /**
     * @todo
     * 추후 메타 정보를 페이지에서 받아올 수 있게 한다.
     */

    const event = new CustomEvent(type, {
      from: this.state.pathname,
      to: nextUrl,
      meta: {},
    });

    this.setState({ pathname: nextUrl });
    dispatchEvent(event);

    this.routePage({
      from: this.state.pathname,
      to: nextUrl,
    });
  }

  /* Page에 맞춰서 맞는 페이지 컴포넌트로 전달해주는 역할을 한다. */
  async route() {
    this.state.pages.filter((page) => page.pathname.match());
  }
}

export default Router;
