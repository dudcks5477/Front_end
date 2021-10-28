# Interfaces
## [What are Interfaces](https://github.com/dudcks5477/Front_end/blob/master/TypeScript/interfaces/interface1.ts)
```bash
$ npm init -y
$ npm i typescript -D
$ npx tsc --init # tsconfig.json 파일 생성
$ npx tsc # complie
```

----
## [Optional property](https://github.com/dudcks5477/Front_end/blob/master/TypeScript/interfaces/interface2.ts)

----
## [Function in interface](https://github.com/dudcks5477/Front_end/blob/master/TypeScript/interfaces/interface4.ts)
```bash
$ npx tsc
$ node interface4.js
```

----
## [Class implements interface](https://github.com/dudcks5477/Front_end/blob/master/TypeScript/interfaces/interface5.ts)

----
## [Interface extends interface](https://github.com/dudcks5477/Front_end/blob/master/TypeScript/interfaces/interface6.ts)

----
## [Function interface](https://github.com/dudcks5477/Front_end/blob/master/TypeScript/interfaces/interface7.ts)

----
## [Readonly interface Properties](https://github.com/dudcks5477/Front_end/blob/master/TypeScript/interfaces/interface8.ts)

----
## Type alias vs interface
- function
```ts
// type alias
type EatType = (food: string) => void;

// interface
interface IEat {
  (food: string): void;
}
```
- array
```ts
// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index: number]: string;
}
```
- intersection
```ts
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistsResponse;
```
- union types
```ts
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

interface IPet extends PetType {} // error TS2312: An interface can only extend an object type or intersection of object type with statically known members.

class Pet implements PetType {} // error TS2312: An interface can only extend an object type or intersection of object type with statically known members.
```
- Declaration Merging - interface
```ts
interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}

let mi: MergingInterface;
mi.
```
- Declaration Meging - type alias
```ts
type MergingType = {
  a: string,
};

type MergingType = {
  b: string;
};
```