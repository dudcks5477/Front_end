class Person2 {
  name: string = "Chan";
  age!: number;

  constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  async init() {
    
  }

// constructor(age: number) {
//   this.age = age;
// }
}

const p2: Person2 = new Person2(24);
await p2.init();
const p3: Person2 = new Person2();
console.log(p2);
console.log(p2.age);