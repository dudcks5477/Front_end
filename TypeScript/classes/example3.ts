class Person3 {
  public name: string = "Chan";
  private _age!: number;

  public constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  public async init() {}
}

const p4: Person3 = new Person3(24);
console.log(p4);