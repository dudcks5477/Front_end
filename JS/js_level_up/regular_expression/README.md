# 정규표현식
- 참조 [HEROPY Tech](https://heropy.blog/2018/10/28/regexp/)
## 개요 및 프로젝트 시작
```bash
$ npm init -y
$ npm i parcel-bundler -D
```

----
## [정규식 생성](https://github.com/dudcks5477/Front_end/blob/master/JS/js_level_up/regular_expression/js/ex1.js)
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

----
## [메소드](https://github.com/dudcks5477/Front_end/blob/master/JS/js_level_up/regular_expression/js/ex2.js)
메소드|문법|설명
--|--|--
test|정규식.test(문자열)|일치 여부(Boolean) 반환
match|문자열.match(정규식)|일치하는 문자열의 배열(Array) 반환
replace|문자열.replace(정규식, 대체문자)|일치하는 문자열을 대체하고 대체된 문자열(String) 반환
### 예제 문자
```js
const str = `
010-1234-5678
rladudcks5477@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
```

----
## [플래그(옵션)](https://github.com/dudcks5477/Front_end/blob/master/JS/js_level_up/regular_expression/js/ex3.js)
플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line)
- _이스케이프 문자(Escape Character)_ : 백슬래시 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말한다.

----
## [패턴(표현)](https://github.com/dudcks5477/Front_end/blob/master/JS/js_level_up/regular_expression/js/ex4.js)
패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5개) 연속일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대소영문52개 + 숫자 10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)