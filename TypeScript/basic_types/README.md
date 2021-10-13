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