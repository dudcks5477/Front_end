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
- <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/ex2.css">링크 방식</a>
- 인라인 방식
- <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/ex2_box.html">@import 방식</a>

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

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/ex3.html">선택자 기본</a>
- 기본
- 복합
- 가상 클래스
- 가상 요소
- 속성

```css
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