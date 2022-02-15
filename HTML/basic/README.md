# HTML Basic
## head
- meta, title 태그 등을 이용해 페이지에 대한 정보 및 설정을 할 수 있음
## body
- 눈에 보이는(글씨, 사진, 이미지 등) 것들을 작성할 수 있음
- h1 ~ h6 : 제목, 부제목 등의 폰트 크기로 설정
- p : paragraph의 약자로 <u>한 문단</u>을 의미
- br : p 태그와 기능은 같지만 br 태그는 <u>한 문장</u>을 의미
- i, em : 텍스트 기울임
- small : 폰트 작게
- cite : 저작권
- img : 이미지 삽입
  - alt : 이미지가 출력이 안될 시 이미지 설명
- a : 하이퍼링크, 클릭시 해당 페이지로 연결 시켜줌
  - href : 연결 될 페이지의 주소
  - target="_blank" : 링크를 클릭 시 새 탭으로 열리게 해줌
- mark : 강조 표시
- sup : 글자 위로 올리기
- s : 취소선
- sub : 글자 아래로 내리기
- hr : 선 (잘 안씀)
- blockquote : 저작권이 걸려있는 문단을 가져올 때 사용 (cite 속성으로 해당 주소 써놓기)

ul | ol | li
-|-|-
Unordered list, 순서가 없다. | Ordered list, 순서가 있다. | ul, ol 안에 항목을 나열할 떄 사용한다.
square : 불릿 대신 네모를 사용한다 | type="A" : 숫자 대신 영대문자를 사용한다. |

- table : 표
  - tr : table row의 약자로 열을 의미
  - th : table header의 약자로 열과 행의 머리를 의미
    - scope : 열, 행, 그룹 등의 머리를 뜻함
  - td : table data의 약자로 표의 칸을 의미
    - rowspan, colspan : 열, 행 병합

----

## inline 요소
```html
<a> <b> <br> <button> <cite> <em> <i> <img> <input> <label> <script> <select> <small> <span> <strong> <sub> <sup> <textarea>
```
> button 등 일부는 일반적으로 브라우저에서 inline-block 요소로 변환됨
- _내용부의 크기_ 가 요소의 크기를 결정 (**자체적 크기 없음**)
  - 높이, 너비, 외부/내부 여백 설정 불가
  - 내용부의 가로, 세로 정렬 설정 불가
- 줄바꿈을 강제하지 않음
- 보통은 다른 데이터와 인라인 요소만 포함 (블록 레벨 요소 포함 불가)

## block level 요소
```html
<article> <aside> <blockquote> <div> <footer> <form> <h1><h6> <header> <hr> <li> <nav> <ol> <p> <section> <ul>
```
- 자체적인 크기와 여백을 가짐
- 부모 요소의 한 줄을 독점, _강제 줄바꿈_ (자기 너비에 관계없이)
- 일반적으로 타 인라인 요소와 블록 레벨 요소를 포함 가능

## inline-block 요소
inline 요소와 block 요소의 특징을 혼합
- 자체적인 크기와 여백을 가짐
- 줄바꿈을 강제하지 않음

## 구획을 나누는 태그
`<div>`: division
- _순수 컨테이너_ : 스스로는 아무것도 표현하지 않음
- 다른 요소들을 묶거나, 문서의 구획을 나누는 데 사용
- 전역(공통) 속성만 가짐
> - 유사한 `<span>` (inline 요소)와 달리 **블럭 요소**

**<u>한계</u> 코드로는 용도를 추론할 수 없는 단순 컨테이너**

## Semantics - 의미가 부여된 태그
각 구획의 용도와 내용의 의미를 태그로써 알 수 있도록 한다.  
검색엔진 등이 사이트를 분석하는 데 도움을 준다.
> `<div>`를 대체해서 사용
### `<header>`
- 페이지의 _최상단_ 에 위치
- 일반적으로 제목, 로고, 검색창 등의 내용 등 포함
- 페이지의 소개 및 탐색에 도움을 준다.
### `<footer>`
- 페이지의 _최하단_ 에 위치
- 일반적으로 작성자, 저작권 정보, 관련 문서 등 포함
### `<nav>`
- _링크들_ (현재 페이지 내 구획 또는 다른 페이지로의)을 포함
### `<aside>`
- 문서의 주 내용과 간접적으로 연관된 부분
- 주로 사이드바 등에 사용
### `<main>`
- `<body>`의 _주요 컨텐츠_
- 메인 컨텐츠가 이 구획에 들어간다.
### `<section>`
- 컨텐츠 내 큰 단위의 _독립적인 구획_
- 다른 시멘틱 태그의 의미에 해당하지 않는 구획
### `<article>`
- 독립적으로 재사용되거나 반복적으로 나타나는 구획
- 게시판이나 뉴스, 갤러리의 목록상 각 항목

----

## `<form>`
- 정보 제출에 사용되는 문서 구획
- 내부 입력 양식들의 부모, 컨테이너 역할
- 입력된 정보들을 어떻게 서버에 전달할지 설정
- 내부에 폼 관련 태그가 아닌 요소도 포함 가능

속성 | 역할 | 값
-|-|-
id | 고유 값(이전의 name을 대체) | 
~~name~~ | id를 사용할 것 | 텍스트
method | 입력된 정보들의 전달 방식 | get, post
action | 정보들을 처리할 서버상의 프로그램 지정 | 텍스트
autocomplete | 이전 입력 내역 있을 시 자동완성 | on, off

> `<form>` 태그 없이도 정보 제출이 가능하지만, 활용시 여러 유용한 기능들이 있다.

## 폼 요소
### `<label>`
각 입력 양식의 레이블을 표시 <br>
_★_ 입력 양식의 **클릭 가능 영역** 확장

속성 | 역할 | 값
-|-|-
for | 어떤 입력 양식의 레이블인지 지정 | 해당 입력 양식 요소의 id값

### `<input>`
공통 속성 | 역할 | 값 | 비고
-|-|-|-
id | 고유값, label과 연결 | 텍스트 |
autocomplete | 자동완성 | boolean |
autofocus | 페이지로 들어올 때 커서가 위치 | boolean | 페이지에서 하나만 사용되어야 한다.
disabled | 수정 불가, 값이 전송되지 않는다. | boolean |
name | 서버로 전송될 항목명 | 텍스트 |
readonly | 수정 불가, 입력된 값은 전송된다. | boolean |

`<input type="text">` : 일반 텍스트 입력  
`<input type="password">` : 패스워드 입력 (●●● 등으로 표시)  
`<input type="tel">` : 전화번호 입력 (모바일 등에서 전화번호 키패드 표시)  
속성 | 역할 | 값
-|-|-
placeholder | 입력값이 공백일 시 보여질 텍스트 | 텍스트
maxlength | 최대 글자 수 | 숫자  
  
`<input type="number">` : 숫자값 입력  
속성 | 역할 | 값
-|-|-
max | 최대 입력값 | 숫자
min | 최소 입력값 | 숫자
step | 입력 가능한 값의 간격 (2: 0, 2, 4, 8) | 숫자  
  
`<input type="checkbox">` : 체크박스  
속성 | 역할 | 값
-|-|-
checked | 체크로 초기화 여부 | boolean  
  
`<input type="radio">` : 라디오(택일)
속성 | 역할 | 값
-|-|-
checked | 체크로 초기화 여부 | boolean
name | 속한 선택지의 구분자 | 텍스트
  
`<input type="file">` : 파일 첨부
속성 | 역할 | 값
-|-|-
multiple | 여러 파일 가능 여부 | boolean

### `<select>`와 `<option>`
`<select>` : 선택자
속성 | 역할 | 값
-|-|-
id | 고유값, label과 연결 | 텍스트
name | 서버로 전송될 항목명 | 텍스트

`<option>` : 선택 항목
속성 | 역할 | 값 | 비고
-|-|-|-
value | 서버로 전송될 값 | 텍스트 |
selected | 선택 여부 | boolean | `<select>` 당 하나의 `<option>`에만 가능

### `<textarea>` 
여러 줄의 텍스트를 입력할 수 있는 태그
속성 | 역할 | 값
-|-|-
placeholder | 입력값이 공백일 시 보여질 텍스트 | 텍스트
maxlength | 최대 글자 수 | 숫자
rows | 보이는 줄의 수 | 숫자

### `<button>`
속성 | 역할 | 값
-|-|-
type | 버튼의 역할 | _submit_, ~reset~, _button_
disabled | 비활성화 | boolean

_[주의]_ 제출용 버튼이 아닐 시 type을 '**button**'으로 지정할 것

[CSS](https://github.com/dudcks5477/Front_end/tree/master/CSS)  
[JavaScript](https://github.com/dudcks5477/Front_end/tree/master/JS)