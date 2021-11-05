abstract class AbstarctPerson {
  protected _name: string = 'Chan';

  abstract setName(name: string): void;
}

// new AbstarctPerson();

class Person11 extends AbstarctPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person11();
p.setName();