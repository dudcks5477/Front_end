# Basic Types
## TypeScript Types vs JavaScript Types
- Static Types (set during development) vs Dynamic Types (resolved at runtime)
```js
// JavaScript
function add(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Incorrect input!');
  }
  return n1 + n2;
}

const result = add(39, 28);

// TypeScript
function add(n1: number, n2: number) {
  return n1 + n2;
}

const result = add(39, 28);
```
- For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like.
  - structures : 구조들
- In TypeScript, we support the same types as you would expect in JavaScript, with an extra enumeration type thrown in to help things along.
  - enumeration : 열거
- TypeScript 에서 프로그램 작성을 위해 기본 제공하는 데이터 타입
- **사용자가 만든 타입은 결국은 이 기본 자료형들로 쪼개진다.**
- JavaScript 기본 자료형을 포함 (superset)
  - **ECMAScript 표준에 따른 기본 자료형은 6가지**
    - Boolean
    - Number
    - String
    - Null
    - Undefined
    - Symbol (ECMAScript 6에 추가)
    - Array : object 형
  - **프로그래밍을 도울 몇가지 타입이 더 제공된다.**
    - Any, Void, Never, Unknown
    - Enum
    - Tuple : object 형

----
## Primitive Types
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형이다.
- 프리미티브 형의 내장 함수를 사용 가능한것은 자바스크립트 처리 방식 덕분이다.
- (ES2015 기준) 6가지
  - boolean
  - number
  - string
  - symbol (ES2015)
  - null
  - undefined
```js
let name = 'chan';

name.toString();
```
- literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.
```js
true;
'hello';
3.14;
null;
undefined;
```
- 래퍼 객체로 만들 수 있다.
```js
new Boolean(false); // typeof new Boolean(false) : 'object'
new String('world'); // typeof new String('world') : 'object'
new Number(42); // typeof new Number(42) : 'object'
```
### Type Casing (참조 : TypeScript 문서)
- The core primitive types in TypeScript are all lowercase
- It can be tempting to think that the types Number, String, Boolean, Symbol, or Object are the same as the lowercase versions recommended above.
  - tempting : 구미가 당기는
- These types do not refer to the language primitives however, and almost never should be used as a type.
```js
function reverse(s: String): String {
  return s.split("").reverse().join("");
}

reverse("hello world");
```
- Instead, use the types number, string, boolean, object and symbol.
```js
function reverse(s: String): string) {
  return s.split("").reverse().join("");
}

reverse("hello world");
```

----
## [boolean](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/basic_types/ex1.ts)
```bash
$ npm init -y
$ npm i typescript -D
$ npx tsc --init # tsconfig.json 생성
$ npx tsc # 모든 파일을 compile
```

----
## [number](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/basic_types/ex2.ts)
- Decimal : 10진수
- Hex : 16진수
- Binary : 2진수
- Octal : 8진수
- JavaScript와 같이, TypeScript의 모든 숫자는 부동 소수점 값이다.
- TypeScript는 16진수 및 10진수 리터럴 외에도, ECMAScript 2015에 도입된 2진수 및 8진수를 지원한다.
- NaN
- 1_000_000 과 같은 표기 가능

----
## [string](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/basic_types/ex3.ts)
- 다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 'string'형식을 사용한다.
- JavaScript와 마찬가지로, TypeScript는 문자열 데이터를 둘러싸기 위해 큰 따옴표(")나, 작은 따옴표(')를 사용한다.
```js
let name: string = "chan";

name = 'seock';
```
### Template String
- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick (= backquote) 기호에 둘러쌓여 있다.
- 표함된 표현식은 `${expr}` 와 같은 형태로 사용한다.
```js
let fullName: string = `Kim Chan`;
let age: number = 24;

let sentecnce: string = `Hello, my name is ${fullname}. 

I'll be ${age + 1} years old next month.`;

// template string을 사용하지 않을 경우
let sentece: string = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + {age + 1} + " years old next month.";
```

----
## [Symbol](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/basic_types/ex4.ts)
- ECMAScript 2015의 Symbol이다.
- new Symbol로 사용할 수 없다.
- Symbol을 함수로 사용해서 symbol 타입을 만들어낼 수 있다.
```ts
console.log(Symbol('foo') === Symbol('foo'));
```
- tsconfig.json을 수정해 주어야 함
```js
// tsconfig.json
"lib": [
  "ES2015",
  "DOM"
]
```
- 프리미티브 타입의 값을 담아서 사용한다.
- 고유하고 수정불가능한 값으로 만들어준다.
- 주로 접근을 제어하는데 쓰는 경우가 많다.
```ts
let sym = Symbol();
let obj = {
  [sym]: "value"
};
console.log(obj[sym]); // "value"
```

----
## [null & undefined](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/basic_types/ex5.ts)
- In TypeScript, both undefined and null actually have their types named undefined and null respectively.
- Much like void, they're not extremely useful on their own:
  - extremely : 그다지
- 둘 다 소문자만 존재한다.
```ts
// 이 변수들에 할당할 수 있는 것들은 거의 없다.
let u: undefined = undefiend;
let n: null = null;
```
### undefiend & null are subtypes of all other types
- 설정을 하지 않으면 그렇다.
- number에 null 또는 undefiend를 할당할 수 있다는 의미이다.
- 컴파일 옵션에서 `--strictNullChecks`사용하면, null과 undefiend는 void나 자기 자신들에게만 할당할 수 있다.
  - null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 한다.
```ts
let name: string = null;
let age: number = undefined;

// strictNullChecks => true
// Type 'null' is not assignable to type 'string'.
let name: string = null; // (X)

// null => null || void, undefined => undefiend || void
// Type 'null' is not assignable to type 'undefiend'.
let u: undefined = null; // (X)

let v: void = undefined; // (O)

let union: string | null | undefiend = 'str';
```
- tsconfig.json 안에 있는 "strict": true를 주석처리 해야한다(꺼야한다).
```ts
// tsconfig.json
// "strict": true
```
### null in JavaScript
- null이라는 값으로 할당된 것을 null이라고 한다.
- 무언가가 있는데, 사용할 준비가 덜 된 상태
- null이라는 타입은 null이라는 값만 가질 수 있다.
- **런타임에서 typeof 연산자를 이용해서 알아내면, object이다.**
```ts
let n: null = null;

console.log(n); // null
console.log(typeof n); // object
```

### undefiend in JavaScript
- 값을 할당하지 않은 변수는 undefiend라는 값을 가진다.
- 무언가가 아예 준비가 안된 상태
- object의 property가 없을 때도 undefined이다.
- **런타임에서 typeof 연산자를 이용해서 알아내면, undefiend이다.**
```ts
let u: undefined = undefined;

console.log(u); // undefined
cosnole.log(typeof u); // undefined
```

----
## [object](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/basic_types/ex6.ts)
```ts
// create by object literal
const person1 = {name: 'CHAN', age: 24};

// person1 is not "object" type.
// person1 is "{name: string, age: number}" type

// create by Object.create
const person2 = Object.create({name: 'CHAN', age: 24});
```
- A type that represents the **non-primitive type**
  - represents : 나타내다
### non-primitive type
- **not** number, string, boolean, bigint, symbol, null, or undefined.
```ts
let obj: object = {};
obj = {name: 'CHAN'};
obj = [{name: 'CHAN'}];
obj = 24; // Error
obj = 'CHAN'; // Error
obj = true; // Error
obj = 100n; // Error (bigint)
obj = Symbol(); // Error
obj = null; // Error
obj = undefined; // Error

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

// Object.create
Object.create(0); // Error
```

----
## [Array](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/basic_types/ex7.ts)
- 원래 자바스크립트에서 array는 객체이다.
- 사용방법
  - Array<타입>
  - 타입[]
```ts
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

----
## [Tuple](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/basic_types/ex8.ts)

----
## [any](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/basic_types/ex9.ts)
- 어떤 타입이어도 상관없는 타입이다.
- 이걸 최대한 쓰지 않는게 핵심이다.
- 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문이다.
- 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다.
  - nolmplicitAny
```ts
function returnAny(message): any {
  console.log(message);
}
returnVoid('리턴은 아무거나');
```
- The any will continue to progagate through your objects:
  - progagate : 전파
- After all, remember that all the convenience of any comes at the cost of losing type safety.
- Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.
```ts
let looselyTyped: any = {};
let d = looselyTyped.a.b.c.d;
//  ^ = let d: any
```

----
## [unknown](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/basic_types/ex10.ts)
- We may need to **describe** the type of variables that we do not know when we are writing an application.
  - describe : 묘사하다.
- These values may come from **dynamic** content - e.g. from the user - or we may want to **intentionally** accept all values in our API.
  - dynamic : 동적
  - intentionally : 의도적으로
- In these cases, we want to provied a type that tells the compiler and future readders that this variable could be anything, so we give it the unknown type.
- TypeScript 3.0 버전부터 지원
- any와 짝으로 any보다 Type-safe 한 타입
  - any와 같이 아무거나 할당할 수 있다.
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
- unknown 타입을 사용하면 runtime error를 줄일 수 있을 것 같다.
  - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.
  