abstract class Scenario {
  public callback: () => void;

  constructor(callback: Given['callback']) {
    this.callback = callback;
  };

  run() {}
}

export class Given implements Scenario {
  public callback: () => void;

  constructor(callback: Given['callback']) {
    this.callback = callback;
  }

  run() {
    this.callback();
  }
}

export class When implements Scenario {
  public callback: () => void;

  constructor(callback: Given['callback']) {
    this.callback = callback;
  }

  run() {
    this.callback();
  }
}


export class Then implements Scenario {
  public callback: () => void;

  constructor(callback: Given['callback']) {
    this.callback = callback;
  }

  run() {
    this.callback();
  }
}
