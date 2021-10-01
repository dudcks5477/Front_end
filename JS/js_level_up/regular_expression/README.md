# 정규표현식
- 참조 [HEROPY Tech](https://heropy.blog/2018/10/28/regexp/)
## 개요 및 프로젝트 시작
```bash
$ npm init -y
$ npm i parcel-bundler -D
```

----
## 정규식 생성
- 정규표현식이란 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)이다.
- 간단한 문자 검색부터 이메일, 패스워드 검사 등의 복잡한 문자 일치 기능 등을 정규식 패턴으로 빠르게 수행할 수 있다.
- 정규표현식은 크게 다음과 같은 역할을 수행한다.
  1. 문자 검색(search)
  1. 문자 대체(replace)
  1. 문자 추출(extract)
### 정규표현식 테스트 사이트
  - https://regexr.com/
### 생성자 함수 방식
```js
const regexp1 = new RegExp("^abc"); // new RegExp(표현식)

const regexp2 = new RegExp("^abc", "gi"); // new RegExp(표현식, 플래그)

new RegExp('[a-z]', 'gi')
```
### 리터럴(Literal) 방식
```js
const regexp1 = /^abc/; // /표현식/

const regexp2 = /^abc/gi; // /표현식/플래그

/[a-z]/gi
```