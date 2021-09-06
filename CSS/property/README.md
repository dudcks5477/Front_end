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