import Component from "../components/common/Component";

class DetailPage extends Component {
  constructor($parent, $root, props, route) {
    super($parent, $root, props);
    this.routeHistory = route;
  }
}

export default DetailPage