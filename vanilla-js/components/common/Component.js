import { createElem } from "../../utils/query-selectors";

export default class Component {

  constructor($parent, $root, props) {
    this.$parent = $parent;
    this.$root = $root;
    this.isMounted = false;
    
    this.state = { ...props };
  }

  shouldUpdate() {
    this.$root.innerHTML = '';
    this.isMounted = false;
  }

  setState(nextState, shouldUpdate = false) {
    this.state = {
      ...this.state,
      ...nextState
    }

    this.render(shouldUpdate);
  }

  render(shouldUpdate) {
    if (shouldUpdate) {
      this.shouldUpdate()
    }

    if (!this.isMounted) {
      this.$parent.appendChild(this.$root);
      this.isMounted = true;
    }
  }
}