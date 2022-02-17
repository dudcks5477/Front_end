# CSS BASIC
- CSS : _C_ ascade _S_ tyle _S_ heet

HTML | CSS | Javascript
-|-|-
갖다놓고 | _꾸미고_ | 시킨다

## CSS 선택자
> head 내 style 태그 또는 분리된 파일에 적용시

### 선택자의 종류
#### _tag_ 선택자
> 문서 내 지명된 모든 태그에 적용

#### _class_ 선택자
> 문서 내 다수 요소에 동일하게 적용될 수 있는 class 속성에 따라 적용

#### _id_ 선택자
> 문서 내 유일한 요소에 적용될 수 있는 id 속성에 따라 적용
> - 하나 이상 사용 시 자바스크립트 등에서 오류 소지

#### _attr_(속성) 선택자
> 태그의 속성과 그 값에 따라 적용
> - [더 자세히 보기 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/Attribute_selectors)

----

### 결합자
#### _자손_ 결합자
> 내부의 모든 요소들을 선택
> - [더 자세히 보기 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/Descendant_combinator)

#### _자식_ 결합자
> 바로 안 단계의 요소들을 선택
> - [더 자세히 보기 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/Child_combinator)

#### _인접 형제_ (바로 다음 동생) 결합자
> 바로 안 단계의 요소들을 선택
> - [더 자세히 보기 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/General_sibling_combinator)

#### _전체_ 선택자
> 모든 태그에 적용

----

### psudo(가상) 클래스
#### _부정_ 가상 클래스
```html
<h1 class="underline">부정 가상 클래스 사용 예</h1>
<ul>
  <li>특성 없음</li>
  <li class="blue">파랑 글씨</li>
  <li class="blue underline">파랑글씨에 밑줄</li>
  <li class="underline">파랑글씨는 아닌데 밑줄</li>
</ul>
```
```css
.blue { color: blue; }
.underline { text-decoration: underline; }
.underline:not(.blue) { color: red; }
.underline:not(.blue):not(li) { color: inherit; }
```

#### _순서_ 관련 가상 클래스
```html
<ul>
  <li>첫번째 글</li>
  <li>두번째 글</li>
  <li>세번째 글</li>
  <li>네번째 글</li>
  <li>다섯번째 글</li>
  <li>여섯번째 글</li>
  <li>일곱번째 글</li>
  <li>여덟번째 글</li>
</ul>
```
```css
ul { padding: 0; }
ul li {
  list-style: none;
  padding: 8px 10px;
  border-top: 1px solid lightgray;
}

ul li:first-child { border-top: 2px solid black; }
ul li:last-child { border-bottom: 2px solid black; }
ul li:nth-child(3) { color: purple; }
ul li:nth-child(even) { background-color: #ece;}
ul li:nth-child(odd) { background-color: #cec;}
ul li:nth-child(4n+2) { text-decoration: underline; }
```

#### _마우스오버_ 가상 클래스
```html
<button class="blue-button">
  클릭
</button>

<br><br>

<div>
  파일
  <ul>
    <li>저장</li>
    <li>열기</li>
    <li>닫기</li>
  </ul>
</div>
```
```css
.blue-button {
  font-size: 1em;
  padding: 16px 24px;
  color: white;
  background-color: dodgerblue;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
}
.blue-button:hover {
  background-color: darkblue;
}
div {
  position: relative;
  display: inline-block;
  color: white;
  background-color: tomato;
  height: 56px;
  line-height: 56px;
  padding: 0 24px;
  cursor: pointer;
}
div ul {
  display: none;
  position: absolute;
  width: 100px;
  left: 17px;
  top: 56px;
  margin: 0;
  padding: 0;
}
div:hover ul { display: block; }
div ul li {
  background-color: #444;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
div ul li:hover { background-color: #222; }
```

----

### 우선순위
- _인라인 스타일_ > _id 선택자_ > _class 선택자_ > _태그 선택자_
- 구체적일수록 높은 순위
- 같은 우선순위라면 다음에(더 아랫줄) 오늘 것이 덮어씀