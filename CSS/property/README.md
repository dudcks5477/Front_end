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

----
## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex12.css">문자</a>
- color : 글자의 **색상**
  - <span style="color: red;">rgb(0, 0, 0)</span> : 검정색
  - 색상 : 기타 지정 가능한 색상
- text-align : 문자의 **정렬 방식**
  - <span style="color: red;">left</span> : 왼쪽 정렬
  - right : 오른쪽 정렬
  - center : 가운데 정렬
  - justify : 양쪽 정렬
- text-decoration : 문자의 **장식(선)**
  - <span style="color: red;">none</span> : 장식 없음
  - underline : 밑줄
  - overline : 윗줄
  - line-through : 중앙 선
- text-indent : 문자 **첫 줄** 의 **들여쓰기**
  - _음수_ 를 사용할 수 있다.
  - 반대는 내어쓰기(outdent)이다.
  - <span style="color: red;">0</span> : 들여쓰기 없음
  - 단위 : px, em, rem 등 단위로 지정
  - % : 요소의 가로 너비에 대한 비율

----
## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex13.css">배경</a>
- background-color : 요소의 **배경 색상**
  - <span style="color: red;">transparent</span> : 투명함
  - 색상 : 지정 가능한 색상
- background-image : 요소의 **배경 이미지 삽입**
  - <span style="color: red;">none</span> : 이미지 없음
  - url("경로") : 이미지 경로
```css
background-color: red;
background-image: url("경로");
/* 배경 색상은 이미지 뒤에 나온다. */
```
- background-repeat : 요소의 **배경 이미지 반복**
  - <span style="color: red;">repeat</span> : 이미지를 수직, 수평 반복
  - repeat-x : 이미지를 수평 반복
  - repeat-y : 이미지를 수직 반복
  - no-repeat : 반복 없음
```css
background-color: red;
background-image: url("경로");
/* background-repeat: repeat-x; */
/* background-repeat: repeat-y; */
background-repeat: no-repeat;
```
- background-position : 요소의 **배경 이미지 위치**
  - <span style="color: red;">0% 0%</span> : 0% ~ 100% 사이의 값
  - 방향 : top, bottom, left, right, center 방향
    - 방향1 방향2
  - 단위 : px, em, rem 등 단위로 지정
    - x축 y축
```css
background-color: red;
background-image: url("경로");
background-repeat: no-repeat;
/* background-position: top right; */
/* background-position: center; */
background-position: 100px 30px;
```
- background-size : 요소의 **배경 이미지 크기**
  - <span style="color: red;">auto</span> : 이미지의 _실제_ 크기
  - 단위 : px, em, rem 등 단위로 지정
  - cover : 비율을 유지, 요소의 더 _넓은_ 너비에 맞춤
  - contain : 비율을 유지, 요소의 더 _짧은_ 너비에 맞춤
```css
background-color: red;
background-image: url("경로");
background-repeat: no-repeat;
background-size: cover;
/* ---- */
background-color: red;
background-image: url("경로");
background-repeat: no-repeat;
background-size: contain;
```
- background-attachment : 요소의 **배경 이미지 스크롤 특성**
  - <span style="color: red;">scroll</span> : 이미지가 요소를 따라서 같이 스크롤
  - fixed : 이미지가 뷰포트에 고정, 스크롤 X
  - local : 요소 내 스크롤 시 이미지가 같이 스크롤
```css
background-color: red;
background-image: url("경로");
background-repeat: no-repeat;
background-size: cover;
/* background-attachment: scroll; */
background-attachment: fixed;
```

----
## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex14.css">배치</a>
- position : 요소의 위치 지정 **기준**
  - position과 같이 사용하는 CSS 속성들, 모두 _음수_ 를 사용할 수 있다.
    - top, bottom, left, right, z-index
  - <span style="color: red;">static</span> : 기준 없음
  - relative : 요소 ~~자신~~ 을 기준
  - absolute : 위치 상 ~~부모~~ 요소를 기준
    - 위치 상 부모 요소를 꼭 확인해야 한다.
  - fixed : ~~뷰포트~~ (브라우저)를 기준 
  - sticky : ~~스크롤 영역~~ 기준
- top, bottom, left, right : 요소의 각 방향별 거리 지정
  - <span style="color: red;">auto</span> : 브라우저가 계산
  - 단위 : px, em, rem 등 단위로 지정
- 요소 쌓임 순서(Stack order) : **어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지) 결정**
  1. 요소에 position 속성의 값이 있는 경우 위에 쌓임.(기본값 static 제외)
  1. 1번 조건이 같은 경우, z-index 속성의 숫자 값이 높을 수록 위에 쌓임
  1. 1번과 2번 조건까지 같은 경우, HTML의 다음 구조일 수록 위에 쌓임
- z-index : 요소의 쌓임 정도를 지정
  - <span style="color: red;">auto</span> : 부모 요소와 동일한 쌓임 정도
  - 숫자 : 숫자가 높을 수록 위에 쌓임
- 요소의 display가 변경됨
  - position 속성의 값으로 **absoulte, fixed**가 지정된 요소는, display 속성이 **block으로 변경**됨

----
## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex15.css">플렉스(정렬)</a>
- display : Flex Container의 화면 **출력(보여짐) 특성**
  - flex : 블록 요소와 같이 Flex Container 정의
  - inline-flex : 인라인 요소와 같이 Flex Container 정의
- flex-direction : 주 축을 설정
  - <span style="color: red;">row</span> : 행 축(좌 => 우)
  - row-reverse : 행 축 (우 => 좌)
  - column : 열 축 (위 => 아래)
  - column-reverse : 열 축 (아래 => 위)
- flex-wrap : Flex Items 묶음(**줄 바꿈**) 여부
  - <span style="color: red; background-color: green;">nowrap</span> : 묶음(쭐 바꿈) 없음
  - wrap : 여러 줄로 묶음
  - wrap-reverse : wrap의 반대 방향으로 묶음
- justify-content : **주 축** 의 정렬 방법
  - <span style="color: red;">flex-start</span> : Flex Items를 시작점으로 정렬
  - flex-end : Flex Items를 끝점으로 정렬
  - center : Flex Items를 가운데 정렬
  - space-between : 각 Flex Item 사이를 균등하게 정렬
  - space-around : 각 Flex Item의 외부 여백을 균등하게 정렬
- align-centent : **교차 축** 의 **여러 줄** 정렬 방법
  - <span style="color: red;">stretch</span> : Flex Items를 시작점으로 정렬
  - flex-start : Flex Items를 시작점으로 정렬
  - flex-end : Flex Items를 끝점으로 정렬
  - center : Flex Items를 가운데 정렬
  - space-between : 각 Flex Item 사이를 균등하게 정렬
  - space-around : 각 Flex Item의 외부 여백을 균등하게 정렬
- <span style="background-color: green;">align-items</span> : **교차 축** 의 **한 줄** 정렬 방법
  - <span style="color: red;">strech</span> : Flex Items를 교차 축으로 늘림
  - flex-start : Flex Items를 각 줄의 시작점으로 정렬
  - flex-end : Flex Items를 각 줄의 끝점으로 정렬
  - center : Flex Items를 각 줄의 가운데 정렬
  - baseline : Flex Items를 각 줄의 문자 기준선에 정렬
- order : Flex Item의 순서
  - <span style="color: red;">0</span> : 순서 없음
  - 숫자 : 숫자가 작을 수록 먼저
- <span style="background-color: green;">flex-grow : Flex Item의 **증가** 너비 비율</span>
  - <span style="color: red; background-color: green;">0</span> : 증가 비율 없음
  - 숫자 : 증가 비율
- flex-shrink : Flex Item의 **감소** 너비 비율
  - <span style="color: red; background-color: green;">1</span> : Flex Container 너비에 따라 감소 비율 적용
  - 숫자 : 감소 비율
- flex-basis : Flex Item의 공간 배분 전 **기본** 너비
  - <span style="color: red;">auto</span> : 요소의 Content 너비
  - 단위 : px, em, rem 등 단위로 지정

----
## <a href="https://github.com/dudcks5477/Front-end/tree/master/CSS/property/css/ex16.css">전환</a>
- transition: 속성명(transition-property) <span style="color: red;">지속시간</span>(transition-duration) 타이밍함수(transition-timing-function) 대기시간(transition-delay);
  - 요소의 **전환(시작과 끝)** 효과를 지정하는 **단축 속성**
  - 지속시간 : 단축형으로 작성할 때, 필수 포함 속성
  - transition-property : 전환 효과를 사용할 **속성 이름** 을 지정
    - <span style="color: red; background-color: green">all</span> : 모든 속성에 적용
    - 속성이름 : 전환 효과를 사용할 속성 이름 명시
  - <span style="background-color: green">transition-duration</span> : 전환 효과의 **지속시간** 을 지정
    - <span style="color: red;">0s</span> : 전환 효과 없음
    - 시간 : 지속시간(s)을 지정
  - transition-timing-function : 전환 효과의 **타이밍(Easing) 함수** 를 지정
    - <span style="color: red;">ease</span> : 느리게 - 빠르게 - 느리게 = cubic-bezier(0.25, 0.1, 0.25, 1)
    - linear : 일정하게 = cubic-bezier(0, 0, 1, 1)
    - ease-in : 느리게 - 빠르게 = cubic-bezier(0.42, 0, 1, 1)
    - ease-out : 빠르게 - 느리게 = cubic-bezier(0, 0, 0.58, 1)
    - ease-in-out : 느리게 - 빠르게 - 느리게 = cubic-bezier(0.42, 0, 0.58, 1)
    - cubic-bezier(n, n, n, n) : 자신만의 값을 정의(0~1)
    - steps(n) : n번 분할된 애니메이션
  - transition-delay : 전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정
    - <span style="color: red;">0s</span> : 대기시간 없음
    - 시간 : 대기시간(s)을 지정