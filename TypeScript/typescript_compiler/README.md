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