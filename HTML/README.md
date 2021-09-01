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

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/HTML/ex4.html">핵심 요소 정리</a>
```html
<div>
  블록(상자) 요소, 특별한 의미가 없는 구분을 위한 요소 (Division)
  <h1>블록(상자) 요소, 제목을 의미하는 요소 (Heading)</h1>
  <p>블록(상자) 요소, 문장을 의미하는 요소 (Paragraph)</p>
  <img src="img/weather.jpg" alt="12호 태풍" />
  인라인(글자) 요소, 이미지를 삽입하는 요소 (Image)
</div>
```
- src(source) : 삽입할 이미지의 **경로**
- alt(alternate) : 삽입할 이미지의 **이름**

```html
블록(상자) 요소
<h1>제목1</h1>
<h2>제목2</h2>
<h3>제목3</h3>
<h4>제목4</h4>
<h5>제목5</h5>
<h6>제목6</h6>
```
- 제목을 의미하는 요소 (Heading)
- 숫자가 **작을수록 더 중요한 _제목_** 을 정의

```html
<ul> <!-- 블록(상자) 요소 -->
  <li>사과</li> <!-- 블록(상자) 요소 -->
  <li>딸기</li>
  <li>수박</li>
  <li>오렌지</li>
</ul>
```
- ul : 순서가 필요없는 목록의 집합을 의미 (Unordered List)
- li : 목록 내 각 항목 (List Item)
- ol 도 있다 (ul과 반대)

```html
<a href="https://www.naver.com">NAVER</a> <!-- 인라인(글자) 요소 -->
<a href="https://google.com" target="_blank">Google</a>
```
- a : 다른/같은 페이지로 이동하는 하이퍼링크를 지정하는 요소 (Anchor)
- href : 링크 **URL**
- target : 링크 URL의 _표시(브라우저 탭) 위치_

```html
<head>
  <style>
    span { color: red; }
  </style>
</head>
<body>
  <span>동해물</span> <!-- 인라인(글자) 요소 -->
</body>
```
- span : 특별한 의미가 없는 구분을 위한 요소

```html
동해물과 백두산이<br />마르고 닳도록
<!-- 인라인(글자) 요소 -->
```
- br : 줄바꿈 요소 (Break)

```html
<input type="text" value="CHAN" Placehholder="이름을 입력하세요!" disabled />
<!-- 인라인(글자) 요소, 블록(상자) 요소 = Inline-block -->
```
- input : 사용자가 데이터를 입력하는 요소
- type : 입력받을 데이터의 **타입**
- value : 미리 입력된 **값(데이터)**
- placeholder : 사용자가 입력할 값(데이터)의 **힌트**
- disabled : 입력 요소 **비활성화**

```html
<label>
  <input type="checkbox" /> Apple
</label>
<label>
  <input type="checkbox" checked/> Banana
</label>
<!-- 인라인(글자) 요소 -->

<label>
  <input type="radio" name="fruits" /> Apple
</label>
<label>
  <input type="radio" name="fruits" /> Banana
</label>
```
- label : 라벨 가능 요소(input)의 제목
- checkbox : 사용자에게 체크 여부를 입력 받음
- checked : 체크박스 입력 요소 **체크됨**
- radio : 사용자에게 체크 여부를 **그룹에서 1개만 입력** 받음
- name="fruits" : 'fruits'란 이름의 **그룹**

```html
<table>
  <!-- 테이블 요소 = table -->
  <tr>
    <!-- 테이블 요소 = table-row -->
    <td>A</td><td>B</td>
    <!-- 테이블 요소 = table-cell -->
  </tr>
  <tr>

  </tr>
</table>
```
- table : 표 요소 행(Row)과 열(Column)의 집합
- tr : 행(Row)을 지정하는 요소 (Table Row)
- td : 열(Column)을 지정하는 요소 (Table Data)

> **HTML은 구조를 만드는 역할**을 하므로, 각 태그(요소)가 어떤 역할을 하는지, 어떤 속성을 사용하는지 정도만 기억해 두면 충분하다. <br>
눈에 보이는 **예쁘게 만드는 작업은 CSS**가 그 역할을 담당한다.

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/HTML/ex5.html">주석</a>
```html
<!-- Comment -->
```
- ctrl + /
- 주석(Comment) : 수정사항이나 설명 등을 작성
- 브라우저는 이 태그를 해석하지 않기 때문에 화면에 내용이 표시되지 않음