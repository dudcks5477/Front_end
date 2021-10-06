# TypeScript Essentials
## [TypeScript](https://www.typescriptlang.org/)
= Language  
= Typed Superset of JavaScript  
= compiles to plain JavaScript
### TypeScript란 무엇인가
#### Typed JavaScript at any Scale
- TypeScript extends JavaScript by adding types.
- By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.
- Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.
- 타입스크립트는 **Programming Language 언어'** 이다.
- 타입스크립트는 **'Compiled Language'** 이다.
  - 전통적인 Compiled Language 와는 다른 점이 많다.
  - **'Transpile'** 이라는 용어를 사용하기도 한다.
- 자바스크립트는 **'Interpreted Language'** 이다.

Compiled | Interpreted
-|-
컴파일이 필요하다 | 컴파일이 필요 없다.
컴파일러가 필요하다 | 컴파일러가 필요 없다.
컴파일하는 시점이 있다 | 컴파일하는 시점이 없다.
컴파일된 결과물을 실행한다 | 코드 자체를 실행한다.
컴파일된 결과물을 실행하는 시점 | 코드를 실행하는 시점

----
## TypeScript 설치 및 사용
- node.js : Chromes's V8 JavaScript engine을 사용하여, 자바 스크립트를 해석하고 OS레벨에서의 API를 제공하는 서버사이드 용 자바스크립트 런타임 환경
- browser : HTML 을 동적으로 만들기 위해 브라우저에서 자바스크립트를 해석하고, DOM을 제어할 수 있도록 하는 자바스크립트 런타임 환경
### node.js 설치
- https://nodejs.org
  - 14.18.0 LTS
  - 16.10.0 Current
- node.js version manager
  - nvm
    - https://github.com/creationix/nvm
    - https://github.com/coreybutler/nvm-windows
  - n
    - https://github.com/tj/n
### 타입스크립트 컴파일러 설치
#### npm / Visual Studio plugin
- npm
  - npm i typescript -g
  - node_modules/.bin/tsc
  - tsc source.ts
- Visual Studio plugin 설치
  - Visual Studio 2017 / 2015 Update 3 이후로는 디폴트로 설치되어 있다.
  - 없으면 설치하기
#### 간단한 컴파일러 사용 예제
- 타입스크립트 컴파일러를 글로벌로 설치
  - cli 명령어로 파일 컴파일
  - 특정 프로젝트 폴더에서 타입스크립트 컴파일러 설정에 맞춰 컴파일
  - 특정 프로젝트 폴더에서 타입스크립트 컴파일러 설정에 맞춰 컴파일 (watch 모드)
  ```bash
  $ npm i typescript -g
  $ tsc test.ts # test.ts를 컴파일 -> test.js 생성됨
  $ tsc --init # tsconfig.json 생성
  $ tsc # 현재 폴더 모든 .ts파일을 컴파일 (tsconfig.json 이 필요)
  $ tsc -w # watch 모드로 파일이 수정될 때마다 바뀜
  ````
- 프로젝트에 타입스크립트 컴파일러를 설치 후,
  - .bin 안의 명령어로 파일 컴파일
  - npm 스크립트로 파일 컴파일
  - 프로젝트에 있는 타입스크립트 설정에 맞춰, npm 스크립트로 컴파일
  - 프로젝트에 있는 타입스크립트 설정에 맞춰, npm 스크립트로 컴파일 (watch 모드)
  ```bash
  $ npm init -y
  $ npm i typescript
  $ node_modules/.bin/tsc # tsc 사용방법
  $ node_modules/typescript/bin/tsc # tsc 사용방법
  $ npx tsc # tsc 사용방법
  $ npx tsc --init # tsconfig.json 생성
  $ npx tsc -w # watch 모드
  ```

----
## VS Code 설치 및 설정
### [Visual Studio Code](https://code.visualstudio.com/)
- **TypeScript Compiler**
  - **VS Code** 에 컴파일러가 내장되어 있다.
  - 내장된 컴파일러 버전은 **VS Code** 가 업데이트 되면서 올라간다.
    - 컴파일러 버전과 **VS Code** 의 버전은 상관 관계가 있다.
  - 내장된 컴파일러를 선택할수 있고, 직접 설치한 컴파일러를 선택할 수도 있다.
```bash
$ npm init -y
$ npm i typescript -D
```

----
## [First Type Annotation](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/test2.ts)
