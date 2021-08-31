# HTML (Hyper Text Markup Language)
### 페이지의 제목, 문단, 표, 이미지, 동영상 등의 <u>웹의 구조</u>를 담당
- _하이퍼 텍스트(Hyper Text)_ 는 참조를 통해 현재 문서(페이지)에서 다른 문서로 즉시 접근(이동)할 수 있는 텍스트를 말한다.
- 일반적으로 알고 있을 _링크 버튼(텍스트)_ 을 의미한다.
```html
<h1>Hello HTML~</h1>
<!-- 요소(Element) : <태그>내용</태그> -->
```

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/HTML/ex1.html">부모와 자식 관계</a>
```html
<부모><자식>자식 내용</자식></부모>

<부모>
  <자식>자식 내용</자식>
</부모>

<부모> <!-- 상위(조상) 요소 -->
  <자식1 (자식2의 부모)>
    <자식2>자식2 내용</자식2> <!-- 하위(후손) 요소 -->
  </자식1 (자식2의 부모)>
</부모>
```
- tab : 들여쓰기(Indent)
- shift + tab : 내어쓰기(Outdent)

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/HTML/ex2.html">빈태그</a>

```html
<빈 태그 /> <!-- 닫힌 태그가 없음 -->

<태그 속성(Attribute)="값"(value)>내용</태그>

<img />
<!-- 이미지를 삽입하는 요소(태그)! -->
<img src="./cat.jpg" alt="고양이" />
```
- src : 이미지의 경로
- alt : 이미지의 이름(대체 텍스트 / Alternate Text)
```html
<input />
<!-- 사용자가 데이터를 입력하는 요소(태그)! -->
<input type="text" />
<input type="checkbox" />
```
- type : 데이터의 타입
- text : 사용자에게 일반 텍스트를 입력 받음
- checkbox : 사용자에게 체크 여부를 입력 받음

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/HTML/ex3.html">글자와 상자</a>
- **요소가 화면에 출력되는 특성, 크게 2가지로 구분**
- 인라인(Inline) 요소 : 글자를 만들기 위한 요소들
  - 요소가 수평으로 쌓임
  - (가로, 세로)포함한 콘텐츠 크기만큼 자동으로 _줄어듬_
- 블록(Block) 요소 : 상자(레이아웃)를 만들기 위한 요소들
  - 요소가 수직으로 쌓임
```html
<span>Hello</span>
<span>World</span>
<!-- <span>대표적인 인라인 요소</span> -->
<!-- <span>본질적으로 아무것도 나타내지 않는, 콘텐츠 영역을 설정하는 용도</span> -->

<span style="width: 100px;">Hello</span>
<!-- width : 요소의 가로 너비를 지정하는 CSS 속성 -->
<span style="height: 100px;">World</span>
<!-- height : 요소의 세로 너비를 지정하는 CSS 속성 -->

<span style="margin: 20px 20px;">Hello</span>
<!-- 요소의 외부 여백을 지정하는 CSS 속성 -->
<span style="padding: 20px 20px;">World</span>
<!-- 요소의 내부 여백을 지정하는 CSS 속성 -->

<span><div></div></span>
<!-- 인라인(span, 글자) 요소안에 블록(div, 상자) 요소는 불가능 -->
<span><span></span></span>

<div>Hello</div>
<div>World</div>
<!-- <div></div> -->
<!-- 대표적인 블록 요소 -->
<!-- 본질적으로 아무것도 나타내지 않는, 콘텐츠 영역을 설정하는 용도 -->

<div style="width: 100px;">Hello</div>
<!-- 요소의 가로 너비를 지정하는 CSS 속성 -->
<div style="height: 40px;">World</div>
<!-- 요소의 세로 너비를 지정하는 CSS 속성 -->

<div style="margin: 10px;">Hello</div>
<!-- 요소의 외부 여백을 지정하는 CSS 속성 -->
<div style="padding: 10px;">World</div>
<!-- 요소의 내부 여백을 지정하는 CSS 속성 -->

<div><div></div></div>
<div><span></span></span>
<!-- 블록(div)요소 안에 인라인(span)요소 사용 가능 -->
```
