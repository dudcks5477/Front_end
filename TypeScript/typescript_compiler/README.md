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