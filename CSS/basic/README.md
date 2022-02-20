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

----

## CSS 기본 스타일
### 글꼴, 글 관련 스타일
_상속_ 됨 : 부모의 스타일이 자식 스타일에도 적용

#### _font-family_ : 글꼴 그룹
> 사용자의 컴퓨터에 지정한 폰트가 없을 때를 대비하여 여럿 지정
```css
p { font-family: 돋움; }
p { font-family: "맑은 고딕", 돋움, 굴림; }
```

_★_ 웹 폰트 사용
- [구글 폰트 사용해보기](https://fonts.google.com/)

#### _font-size_ : 글자 크기
단위 | 설명 | 비고
-|-|-
_px_ | 절대 크기 : 모니터상의 한 점 | 사용자가 브라우저를 통해 조정 불가 : **낮은 접근성**
_em_ | 상대 크기 : 바로 윗 부모의 크기에 비례 | 중첩마다 제곱
_rem_ | 상대 크기 : 최상위 조상의 크기에 비례 | 일반적으로 body의 글자 크기: 16px
```html
일반 텍스트
<span>바깥쪽 span
  <span>중간 span
    <span>안쪽 span
    </span>
  </span>
</span>
```
```css
span { font-size: 24px; }
```
```css
span { font-size: 1.5em; }
```
```css
span { font-size: 1.5rem; }
```

#### _font-weight_ : 글자 굵기
값 | 설명 | 비고
-|-|-
_100 ~ 900_ | 절대값 | 100 단위로 입력
_normal_ | 일반 굵기 | 400
_bold_ | 두껍게 | 700, 자주 사용됨
_lighter_ , _bolder_ | 상속보다 얇거나 두껍게 | 정도는 값마다 다름
```css
span { font-weight: 900; }
```
```css
span { font-weight: bold; }
```
```css
body { font-weight: 100; }
span { font-weight: bolder; }
```

#### _font-style_ : 글자 스타일
값 | 설명 | 비고
-|-|-
_normal_ | 일반 서체 |
_italic_ | 기울임 | 기울여 쓴 서체 - 주로 사용됨
_oblique_ | 기울임 | 본 서체를 기울인 것

#### _color_ : 글자 색
```html
일반 텍스트 <span>글자색 적용</span>
```
```css
span { color: blue; }
```
```css
/* 빨강 + 초록 + 파랑 (0~255) */
span { color: rgb(0, 0, 255); }
```
```css
/* 빨강 + 초록 + 파랑 (0~255) + 불투명도 (0~1) */
span { color: rgba(0, 0, 255, 0.5); }
```
```css
/* 16진수 표기 */
span { color: #FF0000; }
```
> Google에 rgb(a)값, #hax 값 또는 _color picker_ 검색

#### _text-decoration_ : 글자에 선 긋기
```html
<span>일반</span>
<span class="underline">밑줄</span>
<span class="overline">윗줄</span>
<span class="line-through">취소선</span>
```
```css
.none { text-decoration: none; }
.underline { text-decoration: underline; }
.overline { text-decoration: overline; }
.line-through { text-decoration: line-through; }
```

#### _letter-spacing_ : 자간 조정
```html
일반 텍스트
<span>자간이 조정된 텍스트</span>
```
```css
span { letter-spacing: 0.1em; }
```

#### text-align_ : 텍스트 정렬
> block, inline-block, table 요소

_left_ | _right_ | _center_ | _justify_
```html
  <p>
    Cascading Style Sheets(CSS)는 HTML이나 XML(SVG, XHTML 같은 XML 방언(dialect) 포함)로 작성된 문서의 표현을 기술하기 위해 쓰이는 스타일시트 언어입니다. CSS는 요소가 화면, 종이, 음성이나 다른 매체 상에 어떻게 렌더링되어야 하는지 기술합니다.<br>
    CSS는 오픈 웹의 핵심 언어 중 하나이며 여러 브라우저가 표준으로 사용하는 W3C 명세가 있습니다. 레벨 단위로 개발한 CSS1은 더 이상 사용하지 않고, 다음 레벨인 CSS2.1은 권고안(recommendation)입니다. 더 작은 모듈로 나눈 CSS3은 표준화 과정을 밟고 있습니다.
  </p>
```
```css
/* left, right, center, justify */
p { text-align: left; }
```

#### _line-height_ : 행간
```css
p { line-height: 24px; }
```
```css
p { line-height: 1.25; }
```
```css
p { line-height: 1.25em; }
```
```css
p { line-height: 125%; }
```

#### _list-style_ : ul 목록의 불릿 없애기
```html
<ul>
  <li>못생긴</li>
  <li>불릿은</li>
  <li>이제 그만</li>
</ul>
```
```css
ul {
  list-style: none;
  padding: 0;
}
```

#### _opacity_ : 불투명도
```html
<span>오퍼시티가 적용된 요소</span>
```
```css
span {
  opacity: 0.5;
}
```

### 상자 관련 스타일
#### _width_ , _height_ : 높이와 너비
단위 | 설명
-|-
_px_ | 절대 크기 : 모니터상의 한 점
_%_ | 상대 크기 : 바로 윗 부모의 크기에 비례
_vw_ | 상대 크기 : 뷰포트 너비의 1/100
_vh_ | 상대 크기 : 뷰포트 높이의 1/100
_vmax_ | 상대 크기 : 뷰포트 너비, 높이 중 긴 쪽의 1/100
_vmin_ | 상대 크기 : 뷰포트 너비, 높이 중 짧은 쪽의 1/100
```html
<div class="outer">
  <div class="inner"></div>
</div>
```
```css
body {
  padding: 0;
  margin: 0;
}
.outer {
  width: 80%;
  height: 640px;
  background-color: red;
}
.inner { 
  background-color: green; 
}
```
```css
.inner {
  width: 400px;
  height: 300px;
}
```
```css
.inner {
  width: 50%;
  height: 50%;
}
```
```css
.inner {
  width: 50vw;
  height: 50vh;
}
```
```css
.inner {
  width: 50vmin;
  height: 50vmax;
}
```
```css
.inner {
  width: calc(100% - 100px);
  height: calc(50vh + 200px);
}
```

#### _margin_ : 바깥쪽 여백
```html
<div class="outer">
  <div class="inner">inner div</div>
  <div class="inner">inner div</div>
  <div class="inner">inner div</div>
</div>
```
```css
/* 기본세팅 */
body {
  padding: 0;
  margin: 0;
}
.outer {
  background-color: red;
}
.inner {
  color: white;
  background-color: green;
}
```
```css
.inner {
  margin: 24px;
}
```
```css
.inner {
  margin-top: 24px;
  margin-right: 48px;
  margin-bottom: 0;
  margin-left: 12px;
}
```
```css
.inner {
  margin: 24px 48px 0 12px;
}
```
```css
.inner {
  margin: 10px 48px;
}
```

#### _padding_ : 안쪽 여백
```css
.outer {
  padding: 24px;
}
```
```css
.outer {
  padding-top: 24px;
  padding-right: 48px;
  padding-bottom: 0px;
  padding-left: 18px;
}
```

#### _border_ : 테두리 선
border: (_선 굵기_) (_선 스타일_) (_선 색_);
선스타일 | 설명
-|-
solid | 직선
dashed | 점이 긴 점선
dotted | 점선
> [더 자세히 보기](https://developer.mozilla.org/ko/docs/Web/CSS/border-style)

```html
<div>테두리가 있는 div</div>
```
```css
/* 기본 세팅 */
div {
  margin: 24px;
  padding: 24px;
}
```
```css
div {
  border: 1px solid black;
}
```

#### _border-radius_ : 둥근 모서리
```html
<div>둥근 모서리</div>
```
```css
/* 기본 세팅 */
div {
  width: 400px;
  height: 400px;
  line-height: 400px;
  text-align: center;
  color: red;
  background-color: green;
  border: 1px solid blue;
}
```
```css
div {
  border-radius: 30px;
}
```
```css
div {
  border-radius: 30%;
}
```
```css
div {
  border-radius: 10px 20px 30% 40%;
}
```

#### _background_ : 배경
속성 | 설명
-|-
_background-color_ | 배경색
_background-image_ | 배경 이미지
_background-size_ | 배경 이미지 크기
_background-position_ | 배경 이미지 위치
_background-repeat_ | 배경 이미지 반복 여부

```html
<div><div>
```
```css
/* 기본 세팅 */
div {
  width: 480px;
  height: 360px;
  border: 1px solid black;
}
```
```css
div { 
  background-color: green; 
}
```
```css
div { 
  background-color: rgba(255, 255, 0, 0.5); 
}
```
```css
div {
  background-image: url("./nature.jpg");
}
```
```css
div {
  background-image: url("./nature.jpg");
  background-size: 480px 360px;
}
```
```css
div {
  background-image: url("./nature.jpg");
  background-size: 50% 50%;
  background-repeat: no-repeat;
  background-position: 50px 50%;
}
```
```css
div {
  /* 비율 유지, 상자에 빈 곳이 없도록 꽉 채움 */
  background-image: url("./nature.jpg");
  background-size: cover;
}
```
```css
div {
  /* 비율 유지, 상자를 벗어나지 않도록 꽉 채움 */
  background-image: url("./nature.jpg");
  background-size: contain;
}
```

#### _box-shadow_ : 그림자
box-shadow: (_x축 위치_) (_y축 위치_) ([옵션]_번짐_) (_색상_);
```html
<div></div>
```
```css
/* 기본 세팅 */
body { background-color: lightgray; }
div {
  background-color: white;
  width: 320px;
  height: 120px;
  border-radius: 16px;
}
```
```css
div {
  box-shadow: 1px 1px black;
}
```
```css
div {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}
```

----

## CSS 레이아웃
### _position_ : 위치 관련 스타일
#### _static_ : 기본값
> 문서를 요소의 일반적인 흐름에 따라 배치
```html
<span>SPAN 1</span>
<span>SPAN 2</span>
<span>SPAN 3</span>
<span>SPAN 4</span>
```
```css
span {
  font-size: 24px;
  color: red;
  background-color: green;
  border: 2px solid blue;
}
```

#### _relative_ : 상대적 배치
> static과 같으나 _top_ , _bottom_ , _left_ , _right_ 속성을 지정 가능
> - _absoulte_ 을 포함하는 부모 요소로 주로 사용됨
```css
span { position: relative; }
span:nth-child(1) { top: 12px; }
span:nth-child(2) { right: 12px; }
span:nth-child(3) { bottom: 12px; }
span:nth-child(4) { left: 12px; }
```

#### _absolute_ : 절대적 배치
> 족보상 가장 가까운, _static_ 이 아닌 조상 기준 상대적 위치에 배치
> - 페이지 내 **공간을 차지하지 않음**
> - static이 아닌 요소들끼리는 _z-index_ 값으로 위, 아래(앞쪽, 뒷쪽) 배치
```html
<div class="relative">
  <div class="absolute"></div>
</div>
```
```css
div {
  width: 400px;
  height: 400px;
}
.relative {
  position: relative;
  background-color: green;
}
.absolute {
  position: absolute;
}
.absolute._1 {
  top: 100px;
  left: 25%;
  background-color: red;
  z-index: 2;
}
.absolute._2 {
  top: 200px;
  left: 50%;
  background-color: blue;
  z-index: 1;
}
```

#### _fixed_ : 고정
> 부모 요소가 아닌, viewport를 기준으로 배치
> - **스크롤에 영향을 받지 않음**
> - 페이지 내 **공간을 차지하지 않음**
```html
<div class="tall"></div>
<div class="fixed"></div>
```
```css
.tall {
  margin: 48px;
  width: 200px;
  height: 5000px;
  background-color: red;
}

.fixed {
  position: fixed;
  top: 24px;
  left: 80px;
  width: 300px;
  height: 100px;
  background-color: green;
}
```

#### _display_ : 요소를 보여주는 방법
_inline_ | _block_ | _inline-block_
```html
<div>
  <div>DIV 요소</div>
  <span>SPAN 요소</span>
  <p>P 요소</p>
</div>
```
```css
/* 기본 세팅 */
body > div > * {
  background-color: red;
}
```
```css
body > div>  * { display: inline; }
```
```css
body > div>  * { display: block; }
```
```css
body > div>  * { display: inline-block; }
```
_none_
스타일 | 설명 | 비고
-|-|-
display: _none_ | 요소를 화면에 두지 않음 | 자리를 차지하지 않음
visibility: _hidden_ | 요소를 화면에 두되 보이지 않도록 함 | 자리 차지
opacity: _0_ | 요소를 화면에 두고 불투명도를 0으로 함 | 자리 차지
```css
body > div > * {
  background-color: red;
  display: inline-block;
  padding: 24px;
}
```
```css
body > div>  * { display: inline; }
```
```css
body > div>  * { display: block; }
```
```css
body > div>  * { display: inline-block; }
```