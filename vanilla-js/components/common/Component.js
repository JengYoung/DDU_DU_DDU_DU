export default class Component {

  constructor($target, props) {
    this.isMounted = false;
    this.target = target;

    this.$container = document.createElement('div');
    this.props = props;

    this.render(true);
  }

  shouldUpdate() {
    this.$container.innerHTML = '';
  }

  setState(newState) {}

  render(shouldUpdate) {
    if (shouldUpdate) {
      this.shouldUpdate()
    }
  }
}