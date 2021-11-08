function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들...

function hello(message: any): any {
  return message;
}

console.log(hello('Chan').length);
console.log(hello(24).length);

function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric('Chan').length);
console.log(helloGeneric(24));
console.log(helloGeneric(true));