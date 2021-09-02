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