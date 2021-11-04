class Person8 {
  private static CITY = "Seoul"
  public hello() {
    console.log('안녕하세요', Person8.CITY);
  }
  public change() {
    Person8.CITY = "LA";
  }
}

const p8 = new Person8();
p8.hello();

const p81 = new Person8();
p81.hello();
p8.change();
p81.hello();