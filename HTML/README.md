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