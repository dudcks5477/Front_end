class Person5 {
  public constructor(private _name: string, private age: number) {}

  get name() {
    return this._name + " Kim";
  }

  // set name(n: string) {
  //   this._name = n;
  // }
}

const p6: Person5 = new Person5("Chan", 24);
console.log(p6.name); // get을 하는 함수 getter
p6.name = "Seockkim"; // set을 하는 함수 setter
console.log(p6.name);