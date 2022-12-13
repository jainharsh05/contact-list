class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubsccribe(func) {
    this.observers = this.observers.filter((f) => {
      return f !== func;
    });
  }

  notify(value) {
    this.observers.forEach((observe) => {
      observe(value);
    });
  }
}

export default new Observer();
