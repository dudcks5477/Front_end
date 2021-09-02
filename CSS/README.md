# CSS (Cascading Style Sheets)
### 실제 화면에 표시되는 방법(색상, 크기, 폰트, 레이아웃 등)을 지정해 콘텐츠를 꾸며주는 <u>시각적인 표현(정적)</u>을 담당

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/ex1.html">기본 문법, 주석</a>
```css
/* CSS의 기본 문법 */
선택자 { 속성: 값; }

div { color: red; }
```
- 선택자 : 스타일(CSS)을 적용할 **대상** (Selector)
- 속성 : 스타일(CSS)의 **종류** (Property)
- 값 : 스타일(CSS)의 **값** (Value)
- : : 속성**은**
- ; : 값**이다**
- { } : 스타일 범위의 **시작**과 **끝**

```css
div { color: red; margin: 20px; }

div {
  color: red;
  margin: 20px;
}
```
- margin : 요소 외부 여백

```css
/* 설명 작성 */
```
- /* */ : 주석, 브라우저는 이 범위를 해석하지 않음

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/ex2.html">선언 방식</a>
- 내장 방식
- <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/css/ex2.css">링크 방식</a>
- 인라인 방식
- <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/css/ex2_box.html">@import 방식</a>

```css
/* 내장 방식 */
<style>
  div {
    color: red;
    margin: 20px
  }
</style>
/* <style></style>의 내용(Contents)으로 스타일을 작성하는 방식 */
```

```css
/* 인라인 방식 */
<div style="color: red; margin: 20px;"></div>
```
-  인라인 방식 : 요소의 **style 속성** 에 직접 스타일을 작성하는 방식(선택자 없음)

```css
/* 링크 방식 */
<link rel="stylesheet" href="./ex2.css">

/* ex2.css */
div {
  color: red;
  margin: 20px;
}
```
- 링크 방식 : link 로 외부 CSS 문서를 가져와서 연결하는 방식

```css
/* @import 방식 */
<link rel="stylesheet" href="./ex2.css">

/* ex2.css */
@import url("./box.css");
div {
  color: red;
  margin: 20px;
}

/* box.css */
.box {
  background-color: red;
  padding: 20px;
}
```
- @import 방식 : CSS의 **@import 규칙**으로 CSS 문서 안에서 또 다른 CSS 문서를 가져와 연결하는 방식

----

## 선택자 기본
- 기본
- 복합
- 가상 클래스
- 가상 요소
- 속성

```html
<div>
  <ul>
    <li>사과</li>
    <li>딸기</li>
    <li id="oranage" class="orange">오렌지</li>
  </ul>
  <div>당근</div>
  <p>토마토</p>
  <span class="orange">오렌지</span>
</div>
```
```css
/* 기본 선택자 */

/* 전체 선택자(Universal Selector) */
/* 모든 요소를 선택 */
* {
  color: red;
}

/* 태그 선택자 */
li {
  color: red;
}

/* 클래스 선택자 */
.orange {
  color: red;
}

/* 아이디 선택자 */
#orange {
  color: red;
}
```
- 태그 선택자(Type Selector) : **태그 이름**이 ABC인 요소 선택
- 클래스 선택자(Class Selector) : HTML **class 속성의 값**이 ABC인 요소 선택
- 아이디 선택자(ID Selector) : HTML **id 속성의 값**이 ABC인 요소 선택

----

## 선택자 복합
```html
<div>
  <ul>
    <li>사과</li>
    <li>딸기</li>
    <li class="orange">오렌지</li>
    <li>망고</li>
    <li>사과</li>
  </ul>
  <div>당근</div>
  <p>토마토</p>
  <span class="orange">오렌지</span>
</div>
<span class="orange">오렌지</span>
```
```css
/* 일치 선택자 */
span.orange {
  color: red;
}

/* 자식 선택자 */
ul > .orange {
  color: red;
}

/* 하위(후손) 선택자 */
div .orange {
  color: red;
}

/* 인접 형제 선택자 */
.orange + li {
  color: red;
}

/* 일반 형제 선택자 */
.orange ~ li {
  color: red;
}
```
- 일치 선택자 (Basic Combinator) : 선택자 ABC와 XYZ를 **동시에 만족**하는 요소 선택
- 자식 선택자 (Child Combinator) : 선택자 ABC의 **자식** 요소 XYZ 선택
- 하위(후손) 선택자 (Descendant Combinator) : 선택자 ABC의 **하위** 요소 XYZ 선택, '띄어쓰기'가 선택자의 기호
- 인접 형제 선택자 (Adjacent Sibling Combinator) : 선택자 ABC의 다음 형제 요소 XYZ **하나**를 선택
- 일반 형제 선택자 (General Sibling Combinator) : 선택자 ABC의 다음 형제 요소 XYZ **모두**를 선택

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/css/ex3.css">가상 클래스 선택자</a>
```html
<a href="https://www.naver.com">NAVER</a>
<input type="text" />
```
```css
/* 가상 클래스 선택자 (Pseudo-Classes) */

/* HOVER */
a:hover {
  color: red;
}

/* ACTIVE */
a:active {
  color: red;
}

/* FOCUS */
input:foucs {
  background-color: orange;
}
```
- HOVER : 선택자 ABC 요소에 **마우스 커서가 올라가 있는 동안** 선택
- ACTIVE : 선택자 ABC 요소에 **마우스를 클릭하고 있는 동안** 선택
- FOUCS : 선택자 ABC 요소가 **포커스되면** 선택
  - Foucs가 될 수 있는 요소는 _HTML 대화형 콘텐츠_ 가 해당한다.
  - INPUT, A, BUTTON, LABEL, SELECT 등 여러 요소가 있다.
  - HTML 대화형 콘텐츠 요소가 아니더라도, _tabindex_ 속성을 사용한 요소도 Focus가 될 수 있다.
    - **tabindex** 속성을 통해 Foucs가 될 수 있는 요소를 만들 수 있다.
    - 이름에서도 알 수 있듯, Tab 키를 사용해 Focus 할 수 있는 순서를 지정하는 속성이다.
    - 순서(값)로 **-1** 이 아닌 다른 값을 넣는 것은 논리적 흐름을 방해하기 떄문에 권장하지 않는다.
    - 검색 추천: tabindex mdn
  - 구글 검색: HTML 대화형 콘텐츠 mdn
```html
<div class="fruits">
  <span>딸기</span>
  <span>수박</span>
  <div>오렌지</div>
  <p>망고</p>
  <h3>사과</h3>
</div>
```
```css
/* 가상 클래스 선택자 (Pseudo-Classes) */

/* FIRST CHILD */
.fruits span:first-child {
  color: red;
}
.fruits div:first-child {
  color: green;
} /* X */

/* LAST CHILD */
.fruits h3:last-child {
  color: red;
}

/* NTH CHILD */
.fruits *:nth-child(2) {
  color: red;
}
.fruits *:nth-child(2n) {
  color: green;
}
.fruits *:nth-child(2n+1) {
  color: blue;
}
.fruits *:nth-child(n+2) {
  color: rebeccapurple;
}
```
- FRIST CHILD : 선택자 ABC가 형제 요소 중 첫쨰라면 선택
- LAST CHILD : 선택자 ABC가 형제 요소 중 막내라면 선택
- NTH CHILD : 선택자 ABC가 형제 요소 중 (n)째라면 선택
  - 2n : n은 0부터 시작 (Zero-Based Numbering)

```html
<div class="fruits">
  <span>딸기</span>
  <span>수박</span>
  <div>오렌지</div>
  <p>망고</p>
  <h3>사과</h3>
</div>
```
```css
/* 부정 선택자 (Negation) */

/* NOT */
.fruits *:not(span) {
  color: red;
}
```
- NOT : 선택자 XYZ가 아닌 ABC 요소 선택

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/css/ex4.css">선택자 가상 요소</a>
```html
<div class="box">

  Content

</div>
```
```css
/* 가상 요소 선택자 (Pseudo-Elements) */
/* BEFORE, AFTER는 사용하지 않더라도 content를 써야함 */

/* BEFORE (인라인[글자] 요소)*/
.box::before {
  content: "앞";
}

/* AFTER (인라인[글자] 요소) */
.box::after {
  content: "뒤";
}
```
- BEFORE : 선택자 ABC 요소의 **내부 앞** 에 내용(Content)을 삽입
- AFTER : 선택자 ABC 요소의 **내부 뒤** 에 내용(Content)을 삽입

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/css/ex5.css">선택자 속성</a>
```html
<input type="text" value="CHAN" />
<input type="password" value="0318" />
<input type="text" value="ABCD" disabled />
```
```css
/* 속성 선택자 (Attribute) */

/* ATTR */
[disabled] {
  color: red;
}
[type] {
  color: red;
}

/* ATTR=VALUE */
[type="password"] {
  color: red;
}
```
- ATTR : 속성 ABC을 포함한 요소 선택
- ATTR=VALUE = 속성 ABC을 포함하고 값이 XYZ인 요소 선택

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/css/ex6.css">스타일 상속</a>
### 상속되는 CSS 속성들
- **모든 글자/문자 관련 속성들**(모든 글자/문자 속성은 아님) 
- font-style: 글자 기울기
- font-weight: 글자 두께
- font-size: 글자 크기
- ...
```html
<div class="ecosystem">생태계
  <div class="animal">동물
    <div class="tiger">호랑이</div>
    <div class="lion">사자</div>
    <div class="elephant">코끼리</div>
  </div>
  <div class="plant">식물</div>
</div>
```
```css
.animal {
  color: red;
}
```