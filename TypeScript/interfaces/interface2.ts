interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({ name: 'Chan', age: '24' });
hello2({ name: 'Seock' });