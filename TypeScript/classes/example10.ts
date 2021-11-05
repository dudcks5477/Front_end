class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }

  protected printName(): void {
    console.log(this._name, this._age);
  }
}

// const p = new Parent('Chan', 24);
// p.print();

class Child extends Parent {
  public gender = 'male';

  constructor(age: number) {
    super('Chan Jr.',age)
    
    this.printName();
  }
}

const e = new Child(0);

e.print();