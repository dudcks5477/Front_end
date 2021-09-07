# CSS 속성
- HTML 속성(Attributes)
- CSS 속성(Properties)
- JS 속성(Properties)
## 개요
- 박스 모델
- 글꼴, 문자
- 배경
- 배치
- 플렉스(정렬)
- 전환
- 변환
- 띄움
- 애니메이션
- 그리드
- 다단
- 필터
  - 흐림처리 : Blur
  - 흑백처리 : Grayscale
  - 반전처리 : Reverse

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex1.css">박스 모델</a>
- width, heigt : 요소의 가로/세로 **너비**
  - <span style="color: red">auto</span> : 브라우저가 너비를 계산
    - **기본값** (요소에 이미 들어있는 속성의 값)
  - 단위 : px, em, vw 등 단위로 지정
```html
<span>Hello</span>
<span>World</span>
<!-- <span>대표적인 인라인 요소, 본질적으로 아무것도 나타내지 않는, 콘텐츠 영역을 설정하는 용도</span> -->
```
- (가로, 세로) 포함한 콘텐츠 크기만큼 자동으로 **줄어듬**
```html
<div>Hello</div>
<div>World</div>
<!-- <div>대표적인 블록 요소, 본질적으로 아무것도 나타내지 않는, 콘텐츠 영역을 설정하는 용도</div> -->
```
- (가로) 부모 요소의 크기만큼 자동으로 **늘어남**
- (세로) 포함한 콘텐츠 크기만큼 자동으로 **줄어듬**
- max-width, max-height : 요소가 커질 수 있는 **최대** 가로/세로 너비
  - <span style="color: red">none</span> : 최대 너비 제한 없음
  - auto : 브라우저가 너비를 계산
  - 단위 : px, em, vw 등 단위로 지정
- min-width, min-heigth : 요소가 작아질 수 있는 **최소** 가로/세로 너비
  - <span style="color: red">0</span> : 최소 너비 제한 없음
  - auto : 브라우저가 너비를 계산
  - 단위 : px, em, vw 등 단위로 지정

  ----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex2.css">CSS 단위</a>
### 단위
- px : 픽셀
- % : 상대적 백분율
- em : 요소의 글꼴 크기
- rem : 루트 요소(html)의 글꼴 크기
- vw : 뷰포트 가로 너비의 백분율
- vh : 뷰포트 세로 너비의 백분율

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex3.css">외부 여백(margin)</a>
- margin : 요소의 **외부** 여백(공간)을 지정하는 **단축 속성**
  - _음수_ 를 사용할 수 있다.
  - <span style="color: red;">0</span> : 외부 여백 없음
  - auto : 브라우저가 여백을 계산
    - 가로(세로) 너비가 있는 요소의 _가운데 정렬_ 에 활용한다.
  - 단위 : px, em, vw 등 단위로 지정
  - % : 부모 요소의 _가로 너비_ 에 대한 비율로 지정
```css
margin: 10px;
/* top, right, bottom, left */

margin: 10px 20px;
/* top, bottom   left, rigth */

margin: 10px 20px 30px;
/* top    left, right   bottom */

margin: 10px 20px 30px 40px;
/* top    rigth   bottom    left */
```
- margin-방향 : 요소의 외부 여백(공간)을 지정하는 기타 **개별 속성** 들
  - margin-top
  - margin-bottom
  - margin-left
  - margin-right

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex4.css">내부 여백(padding)</a>
- padding : 요소의 **내부 여백** (공간)을 지정하는 **단축 속성**
  - 요소의 _크기가 커짐_
  - <span style="color: red;">0</span> : 내부 여백 없음
  - 단위 : px, em, vw 등 단위로 지정
  - % : 부모 요소의 _가로 너비_ 에 대한 비율로 지정
```css
padding: 10px;
/* top, right, bottom, left */

padding: 10px 20px;
/* top, bottom    right, left */

padding: 10px 20px 30px;
/* top    left, right, bottom */

padding: 10px 20px 30px 40px;
/* top    right   bottom    left */
```
- padding-방향 : 요소의 내부 여백(공간)을 지정하는 기타 **개별 속성** 들
  - padding-top
  - padding-bottom
  - padding-left
  - padding-right

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex5.css">테두리 선(border)과 색상 표현</a>
```css
border: 선-두께 선-종류 선-색상;
```
- border : 요소의 **테두리 선** 을 지정하는 **단축 속성**
  - 요소의 _크기가 커진다_
- 선-두께 : border-width
- 선-종류 : border-style
- 선-색상 : border-color
```css
border: medium none black;
/* border-width   border-style    border-color */

border: 4px solid black;
border: 10px solid black;

border-width: top, right, bottom, left;
border-width: top, right    bottom, left;
border-width: top   right, bottom    left;
border-width: top   right   bottom    left;

border-style: top, right, bottom, left;
border-style: top, right    bottom, left;
border-style: top   right, bottom    left;
border-style: top   right   bottom    left;

border-color: top, right, bottom, left;
border-color: top, right    bottom, left;
border-color: top   right, bottom    left;
border-color: top   right   bottom    left;
```
- none : 선의 종류가 없어서(none) 출력되지 않는다.
- black : **기본값** (요소에 이미 들어있는 속성의 값)
- border-width : 요소 테두리 선의 **두꼐**
  - medium : 중간 두께
  - this : 얇은 두께
  - thick : 두꺼운 두께
  - 단위 : px, em, % 등 단위로 지정
- border-style: 요소 테두리 선의 **종류**
  - <span style="color: red;">none</span> : 선 없음
  - solid : 실선(일반 선)
  - dotted : 점선
  - dashed : 파선
  - double : 두 줄 선
  - groove : 홈이 파여있는 모양
  - ridge : 솟은 모양 (groove의 반대)
  - inset : 요소 전체가 들어간 모양
  - outset : 요소 전체가 나온 모양
- border-color : 요소 테두리 선의 **색상을 지정하는 단축 속성**
  - <span style="color: red;">black</span> : 검정색
  - 색상 : 선의 색상
  - transparent : 투명
  - 색상 표현 : 색을 사용하는 모든 속성에 적용 가능한 색상 표현
  
  |색상 이름|Hex 색상코드|RGB|RGBA|HSL|HSLA|
  |---|---|---|---|---|---|
  |브라우저에서 제공하는 색상 이름|16진수 색상(Hexadeciaml Colors)|빛의 삼원색|빛의 삼원색 + 투명도|색상, 채도, 명도|색상, 채도, 명도 + 투명도|
  |red, tomato, royalblue|#000, #FFFFFF|rgb(255, 255, 255)|rgba(0, 0, 0, 0.5)|hsl(120, 100%, 50%)|hsla(120, 100%, 50%, 0.3)|

- border-방향(top, rigth, bottom, left), border-방향-속성 : 요소의 테두리 선을 지정하는 **기타 속성들**
  - border-top: 두께 종류 색상;
  - border-top-width: 두께;
  - border-top-style: 종류;
  - border-top-color: 색상;
  - ...

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex6.css">모서리 둥글게(border-radius)</a>
- border-radius : 요소의 모서리를 **둥글게 깎음**
  - <span style="color: red;">0</span> : 둥글게 없음
  - 단위 : px, em, vw 등 단위로 지정
```css
/* 각 위치에 깍을 수 있는 크기를 지정해 줄 수 있음 */
border-radius: 0 10px 0 0;
```

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex7.css">크기 계산(box-sizing)</a>
- box-sizing : 요소의 **크기 계산 기준** 을 지정
  - <span style="color: red;">content-box</span> : 요소의 내용(content)으로 크기 계산
  - border-box : 요소의 내용 + padding + border로 크기 계산

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex8.css">넘침 제어(overflow)</a>
- overflow : 요소의 크기 이상으로 **내용이 넘쳤을 때, 보여짐을 제어** 하는 **단축 속성**
  - <span style="color: red;">visible</span> : 넘친 내용을 그대로 보여줌
  - hidden : 넘친 내용을 잘라냄
  - scroll : 넘친 내용을 잘라냄, 스크롤바 생성
  - auto : 넘친 내용이 있은 경우에만 잘라내고 스크롤바 생성
```css
/* 내용이 넘쳤을 때 */
overflow: visible; /* 내용 넘침 */
overflow: hidden; /* 잘라냄 */
overflow: scroll; /* 스크롤바 (x축, y축) */
overflow: auto;
```
- overflow-x, overflow-y : 요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 **개별 속성들**

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex9.css">출력 특성(display)</a>
- display : 요소의 화면 **출력(보여짐) 특성**
  - 각 요소에 이미 지정되어 있는 값
    - <span style="color: red;">block</span> : 상자(레이아웃) 요소
    - <span style="color: red;">inline</span> : 글자 요소
    - <span style="color: red;">inline-block</span> : 글자 + 상자 요소
  - 따로 지정해서 사용하는 값
    - flex : 플렉스 박스 (1차원 레이아웃)
    - grid : 그리드 (2차원 레이아웃)
    - none : 보여짐 특성 없음, 화면에서 사라짐
    - <span style="color: red;">기타</span> : table, table-row, table-cell 등

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex10.css">투명도</a>
- opacity : 요소 **투명도**
  - <span style="color: red;">1</span> : 불투명
  - 0~1 : 0부터 1 사이의 소수점 숫자

----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex11.css">글꼴</a>
- font-style : 글자의 **기울기**
  - <span style="color:red;">normal</span> : 기울기 없음
  - italic : 이텔릭체
  - oblique : 기울어진 글자
- font-weight : 글자의 **두께(가중치)**
  - <span style="color:red;">normal, 400</span> : 기본 두께
  - bold, 700 : 두껍게
  - bolder : 상위(부모) 요소보다 더 두껍게
  - lighter : 상위(부모) 요소보다 더 얇게
  - 100 ~ 900 : 100 단위의 숫자 9개, normal과 bold 이외 두께
- font-size : 글자의 **크기**
  - <span style="color:red;">16px</span> : 기본 크기
  - 단위 : px, em, rem 등 단위로 지정
  - % : 부모 요소의 폰트 크기에 대한 비율
  - smaller : 상위(부모) 요소보다 작은 크기
  - larger : 상위(부모) 요소보다 큰 크기
  - xx-small ~ xx-large : 가장 작은 크기 ~ 가장 큰 크기까지, 7단계의 크기를 지정
- line-height : 한 **줄의 높이**, 행간의 유사
  - <span style="color:red;">normal</span> : 브라우저의 기본 정의를 사용
  - 숫자 : 요소의 글꼴 크기의 배수로 지정
  - 단위 : px, em, rem 등의 단위로 지정
  - % : 요소의 글꼴 크기의 비율로 지정
  ```css
  font-size: 16px;
  line-height: 32px;
  /* line-height: 2; */
  /* line-height: 200%; */
  ```
- font-family: 글꼴1, "글꼴2", ...<span style="color:red;">글꼴계열</span>;
  - **글꼴(서체)** 지정
  - "글꼴2" : 띄어쓰기 등 특수문자가 포함된 글꼴 이름은 큰 따옴표로 묶어야 한다.
  - ...<span style="color:red;">글꼴계열</span>; : 필수로 작성
    - serif : 바탕체 계열
    - sans-serif : 고딕체 계열
    - monospace : 고정너비(가로폭이 동등) 글꼴 계열
    - cursive : 필기체 계열
    - fantasy : 장식 글꼴 계열
