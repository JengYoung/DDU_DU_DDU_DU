class Router {
  #ROUTE_BACK_EVENT = 'update:route-go'
  #ROUTE_REPLACE_EVENT = 'update:route-replace';
  #ROUTE_PUSH_EVENT = 'udpate:route-push';
  
  constructor(pages) {
    this.state = {
      pathname: window.location.pathname,
      pages
    }
  }

  setState(nextState) {
    this.state = {
      ...this.state,
      ...nextState
    }
  }

  routePage() {
    /**
     * page들의 조건에 맞게 작성한다.
     * 
     * @todo
     * [ ] 여러 페이지들의 path를 기본적으로 받는 state가 있어야 할 것이다.
     * [ ] 이를 정규표현식을 통해 걸러낼 수 있어야 한다.
     */
  }

  back() {
    window.history.go(-1)
    this.#dispatchRouteEvent(this.#ROUTE_BACK_EVENT, pathname); 
  }

  go(n) {
    window.history.go(n)
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
      next: nextUrl, 
      meta: {} 
    }); 

    this.setState({ pathname: nextUrl })
    dispatchEvent(event);
  }
}

export default Router;