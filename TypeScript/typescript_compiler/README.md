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