class Person<T, K> {
  private _name: T;
  private _age: K

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person('Chan', 24);
// new Person<string>(39);
new Person<string, number>('Chan', 'age')