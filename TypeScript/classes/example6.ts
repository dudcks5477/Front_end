class Person6 {
  public readonly name: string = 'Chan';
  public readonly country: string;

  public constructor(private _name: string, private age: number) {
    this.country = 'Korea';
  }

  hello() {
    this.country = 'China';
  }
}

const p7: Person6 = new Person6("Chan", 24);
console.log(p7.name); // get을 하는 함수 getter
p7.name = "Seock"; // set을 하는 함수 setter
console.log(p7.name);