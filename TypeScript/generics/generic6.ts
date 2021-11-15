class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('Chan');
new PersonExtends(24);
new PersonExtends(true);
