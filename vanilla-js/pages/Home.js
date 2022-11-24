import Component from '../components/common/Component';

class HomePage extends Component {
  constructor($parent, $root, props, route) {
    super($parent, $root, props);
    this.routeHistory = route;
  }
}

export default HomePage;
