# TypeScript Compiler
## [Compilation Context](https://basarat.gitbook.io/typescript/project/compilation-context)
- The compilation context is basically just a fancy term for grouping of the files that TypeScript will parse and analyze to determine what is valid and what isn't.
- Along with the information about which files, the compilation context contains information about which compiler options are in use.
- A great way to define this logical grouping (we also like to use the term project) is using a tsconfig.json file.

----
## [tsconfig shema](http://json.schemastore.org/tsconfig)
### 최상위 프로퍼티
- compileOnSave
- extends
- compileOptions
- files
- include
- exclude
- references
- ~~typeAcquisition~~
- ~~tsNode~~

----
## compileOnSave
```ts
{
  ...,
  "compileOnSaveDefinition": {
    "properties": {
      "compileOnSave": {
        "description": "Enable Compile-on-Save for this project.",
        "type": "boolean"
      }
    }
  },
  ...,
}
```
- true / false (default false)
- 누가 ??
  - Visual Studio 2015 with TypeScript 1.8.4 이상
  - atom-typescript 플러그인
    - https://github.com/TypeStrong/atom-typescript#compile-on-save

----
## extends
```ts
{
  ...,
  "extendsDefinition": {
    "properties": {
      "extends": {
        "description": "Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.",
        "type": "string"
      }
    }
  },
  ...,
}
```
- 파일(상대) 경로명: string
- TypeScript 2.1 New Spec
```ts
// in PROJECT/base.json
{
  "compilerOptions": {
    "strict": true
  }
}

// in PROJECT/tsconfig.json
{
  "extends": "./base.json",
}
```
### [tsconfig/bases](https://github.com/tsconfig/bases)
```bash
$ npm install --save-dev @tsconfig/deno
```
```ts
{
  "extends": "@tsconfig/deno/tsconfig.json",
  ...
}
```

----
## files, include, exclude
```ts
{
  ...,
  "filesDefinition": {
    "properties": {
      "files": {
        "description": "If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. When a 'files' property is specified, only those files and those specified by 'include' are included.",
        "type": "array",
        "uniqueItems": true,
        "items": {
          "type": "string"
        }
      }
    }
  },
  "excludeDefinition": {
    "properties" {
      "exclude": {
        "description": "Specifies a list of files to be excluded from compilation. The 'exclude' property only affects the files included via the 'include' property and not the 'files' property. Glob patterns require TypeScript version 2.0 or later.",
        "type": "array",
        "uniqueItems": true,
        "items": {
          "type": "string"
        }
      }
    }
  },
  "includeDefinition": {
    "properties": {
      "include": {
        "description": "Specifies a list of glob patterns that match files to be included in compilation. If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. Requires TypeScript version 2.0 or later.",
        "type": "array",
        "uniqueItems": true,
        "itema": {
          "type": "string"
        }
      }
    }
  },
  ...,
}
```
- 셋다 설정이 없으면, 전부다 컴파일
- files
  - 상대 혹은 절대 경로의 리스트 배열이다.
  - exclude 보다 쎄다.
- include, exclude
  - glob 패턴 (마치 .gitignore)
  - include
    - exclude 보다 약하다
    - '*' 같은걸 사용하면, .ts / .tsx / .d.ts 만 include (allowJS)
  - exclude
    - 설정 안하면 4가지(node_modules, bower_components, jspm_packages, outDir를 default로 제외한다.)
    - outDir은 항상 제외한다. (include에 있어도)

----
## compileOptions
### typeRoots, types
```bash
$ npm i react
```
- compileOptions: type
```ts
{
  ...,
  "typeRoots": {
    "descriptions": "Specify multiple folders that act like `./node_modules/@types`.",
    "type": "array",
    "uniqueItems": true,
    "items": {
      "type": "string"
    },
    "markdownDescription": "Specify multiple folders that act like `./node_modules/@types`.\n\nSee more: https://www.typescriptlang.org/tsconfig#typeRoots"
  },
  "types": {
    "description": "Specify type package names to be included without being referenced in a source file.",
    "type": "array",
    "uniqueItems": true,
    "items": {
      "type": "string"
    },
    "markdownDescription": "Specify type package names to be included without being referenced in a source file.\n\nSee more: https://www.typescriptlang.org/tsconfig#types"
  },
  ...,
}
```
```bash
$ npm i @types/react -D
```
#### @types
- TypeScript 2.0 부터 사용 가능해진 내장 type definition 시스템
- 아무 설정을 안하면 ?
  - node_modules/@types 라는 모든 경로를 찾아서 사용
- typeRoots를 사용하면 ?
  - 배열 안에 들어있는 경로들 아래서만 가져온다.
- types를 사용하면?
  - 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아온다.
  - [] 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 것이다.
- typeRoots 와 types를 같이 사용하지 않는다.

### target과 lib
- compileOptions : target
```ts
{
  "target": {
    "description": "Set the JavaScript language version for emitted JavaScript and include compatible library declarations",
    "type": "string",
    "default": "ES3",
    "anyOf": [
      {
        "enum": [
          "ES3",
          "ES5",
          "ES6",
          "ES2015",
          "ES2016",
          "ES2017",
          "ES2018",
          "ES2019",
          "ES2020",
          "ESNext"
        ]
      },
      {
        "pattern": "^([Ee][Ss]([356]|(20(1[56789]|20))|[Nn][Ee][Xx][Tt]))$"
      }
    ],
    "markdownDescription": "Set the JavaScript language version for emitted JavaScript and include compatible library declaration."
  },
}
```
- compileOptions : lib
```ts
{
  "lib": {
    "description": "Specify a set of bundled library declaration files that describe the target runtime environment.",
    "type": "array",
    "uniqueItems": true,
    "items": {
      "type": "string",
      "anyOf" [
        {
          "enum": [
            "ES5", "ES6", "ES2015", "ES2015.Collection", "ES2015.Core", "ES2015.Generator", "ES2015.Iterable", "ES2015.Promise", "ES2015.Proxy", "ES2015.Reflect", "ES015.Symbol.WellKnown", "ES2015.Symbol", "ES2016", "ES2016.Array.Include", "ES2017", "ES2017.Intl", "ES2017.Object", "ES2017.SharedMemory", "ES2017.String", "ES2017.TypedArrays", "ES2018", "ES2018.AsyncGenerator", "ES2018.AsyncIterable", "ES2018.Intl", "ES2018.Promise", "ES2018.Regexp", "ES2019", "ES2019.Array", "ES2019.Object", "ES2019.String", "ES2019.Symbol", "ES2020", "ES2020.BigInt", "ES2020.Promise", "ES2020.String", "ES2020.Symbol.WellKnown", "ESNext", "ESNext,Array", "ESNext.AsyncIterable", "ESNext.BigInt", "ESNext.Intl", "ESNext.Promise", "ESNext.String", "ESNext.Symbol", "DOM", "DOM.Iterable", "ScriptHost", "WebWorker", "WebWorker.ImportScripts"
          ]
        },
        {
          "pattern": "^[Ee][Ss]5|[Ee][Ss]6|[Ee][Ss]7$"
        },
      ]
    }
  }
}
```
- target
  - 빌드의 결과물을 어떤 버전으로 할 것이냐
  - 지정을 안하면 es3 이다.
- lib
  - 기본 type definition 라이브러리를 어떤 것을 사용할 것이냐
  - lib를 지정하지 않을 때,
    - target이 'es3'이고, 디폴트로 lib.d.ts를 사용한다.
    - target이 'es5'이면, 디폴트로 dom, es5, scripthost를 사용한다.
    - target이 'es6'이면, 디폴트로 dom, es6, dom.iterable, scripthost를 사용한다.
  - lib를 지정하면 그 lib 배열로만 라이브러리를 사용한다.
    - 빈 [] => 'no definition found ~~'
### outDir, outFile, rootDir
```ts
{
  "outFile": {
    "description": "Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.",
    "type": "string",
    "markdownDescription": "Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.\n\nSee more: https://www.typescriptlang.org/tsconfig#outFile"
  },
  "outDir": {
    "description": "Specify an output folder for all emitted files.",
    "type": "string",
    "markdownDescription": "Specify an output folder for all emitted files.\n\nSee more: https://www.typescriptlang.org/tsconfig#outDir"
  },
  "rootDir": {
    "description": "Specify the root folder within your source files.",
    "type": "string",
    "markdownDescription": "Specify the root folder within your source files.\n\nSee more: https://www.typescriptlang.org/tsconfig#rootDir"
  }
}
```
### strict
```ts
{
  "strict": {
    "description": "Enable all strict type checking options.",
    "type": "boolean",
    "default": false,
    "markdownDescription": "Enable all strict type checking options.\n\nSee more: https://www.typescriptlang.org/tsconfig#strict"
  }
}
```
#### Enable all strict type checking options.
- --nolmplicitAny
  > Raise error on expressions and declarations with an implied any type.  
  - 명시적이지 않게 any 타입을 사용하여, 표현식과 선언에 사용하면, 에러를 발생
    - 타입스크립트가 추론을 실패한 경우, any가 맞으면, any라고 지정한다.
    - 아무것도 쓰지 않으면, 에러를 발생
    - 이 오류를 해결하면, any 라고 지정되어 있지 않은 경우는 any가 아닌 것이다. (타입 추론이 되었으므로)
  - suppresslmplicitAnyIndexErrors
    > Suppress --nolmplicitAny errors for indexing objects lacking index signatures.
    - nolmplicitAny 사용할 때, 인덱스 객체에 인덱스 signature 가 없는 경우 오류가 발생 하는데 이를 예외처리 한다.
      ```ts
      // suppressImplicitAnyIndexErrors
      var obj = {
        bar: 10
      };

      obj['foo'] = 10; // Error: Index signature of object type implicitly has an 'any' type
      obj['bar'] = 10; // Okay
      obj.baz = 10;
      ```
      - obj['foo']로 사용할 때, 인덱스 객체라 판단하여, 타입에 인덱스 시그니처가 없는 경우, 에러를 발생시킨다.
      - 이때 suppresslmplicitAnyIndexErrors 옵션을 사용하면, 이런 경우 예외로 간주하여, 에러를 발생시키지 않는다.
- --nolmplicitThis
  > Raise error on this expressions with an implied any type.
  - 명시적이지 않게 any 타입을 사용하여, this 표현식에 사용하면, 에러를 발생한다.
    - 첫번째 매개변수 자리에 this를 놓고, this에 대한 타입을 어떤 것이라도 표현하지 않으면, nolmplicitAny가 오류를 발생시킨다.
    - JavaScript에서는 매개변수에 this를 넣으면, 이미 예약된 키워드라 SyntaxError를 발생시킨다.
    - call / apply / bind와 같이 this를 대체하여 함수 콜을 하는 용도로도 쓰인다.
    - this를 any로 명시적으로 지정하는 것은 합리적이다. (물론 구체적인 사용처가 있는 경우 타입을 표현하기도 한다.)
    - Class 에서는 this를 사용하면서, noImplicitThis와 관련한 에러가 나지 않는다.
    - Class 에서 constructor를 제외한 멤버 함수의 첫번째 매개변수도 일반 함수와 마찬가지로 this를 사용할 수 있다.
- --strictNullChecks
  > In strict null checking mode, the null and undefiend values are not in the domain of every type and are only assignable to themselves and any (the one exception being that undefiend is also assignable to void).
  - strictNullChecks 모드에서는, null 및 undefined 값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나, any일 경우에만 할당이 가능하다.
  - 한 가지 예외는 undefined에 void 할당 가능
  - strictNullChecks를 적용하지 않으면,
    - 모든 타입은 null, undefined값을 가질 수 있다.
    - string으로 타입을 지정해도, null 혹은 undefined 값을 할당할 수 있다는 것이다.
  - strictNullChecks를 적용하면,
    - 모든 타입은 null, undefined 값을 가질 수 없고, 가지려면 union type을 이용해서 직접 명시 해야 한다.
    - any 타입은 null과 undefined를 가진다.
    - 예외적으로 void 타입의 경우 undefined를 가진다.
  - strictNullChecks를 적용하지 않고, 어떤 값이 null과 undefined를 가진다는 것을 암묵적으로 인정하고 계속 사용하다 보면, 정확히 어떤 타입이 오는지를 개발자 스스로가 간과할 수 있다.
  - 정말로 null과 undefined를 가질 수 있는 경우, 해당 값을 조건부로 제외하고 사용하는 것이 좋다.
  - 이 옵션을 켜고 사용하는 경우,
    - 사용하려는 함수를 선언할 때부터 매개변수와 리턴 값에 정확한 타입을 지정하려는 노력을 기울여야 하고, 기울이게 될 것이다.
- --strictFunctionTypes
  > Disable bivariant parameter checking for function types.
  - 함수 타입에 대한 bivariant 매개변수 검사를 비활성화한다.
  - 반환 타입은 공변적(convariant)
  - 인자 타입은 반공변적(contrabariant)
  - 타입스크립트에서 인자 타입은 공변적이면서, 반공변적인게 문제
  - 이 문제를 해결하는 옵션이 strictFunctionTypes
  - 옵션을 켜면, 에러가 안나던걸 에러 나게 한다.
  ```ts
  const button - document.querySelector('#id') as HTMLButtonElement;

  button.addEventListener('keydown', (e: MouseEvent) => {});
  ```
  - 이전에는 위와 같은 코드도 에러를 발생시키지 않았지만, 이제는 에러가 발생하게 된다.
- --strictPropertyInitialization
  > Ensure non-undefiend class properties are initialized in the constructor.
  - 정의되지 않은 클래스의 속성이 생성자에게 초기화되었는지 확인한다.
  - 이 옵션을 사용하려면 --strictNullChecks를 사용하도록 설정해야 한다.
  - constructor에서 초기값을 할당한 경우 => 정상
  - constructor에서 안하는 경우
    - 보통 다른 함수로 이니셜라이즈 하는 경우 (async 함수)
    - constructor에는 async를 사용할 수 없다. 
- --strictBindCallApply
  > Enable stricter checking of the bind, call, and apply methods on functions.
  - bind, call, apply에 대해 더 엄격한 검사 수행
    - Function의 내장 함수인 bind / call / apply를 사용할 때, 엄격하게 체크하도록 하는 옵션이다.
    - bind는 해당 함수안에서 사용할 this와 인자를 설정해주는 역할을 하고 call과 apply는 this와 인자를 설정한 후, 실행까지 한다.
    - call과 apply는 인자를 설정하는 방식에서 차이점이 있다.
      - call은 함수의 인자를 여러 인자의 나열로 넣어서 사용하고, apply는 모든 인자를 배열 하나로 넣어서 사용한다.
- --alwaysStrict
  > Parse in strict mode and emit "use strict" for each source file
  - 각 소스 파일에 대해 JavaScript와 strict mode로 코드를 분석하고, "엄격하게 사용"을 해제한다.
  - syntax에러가 ts error로 나온다.
  - 컴파일된 JavaScript 파일에 "use strict" 추가 된다.