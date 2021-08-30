# 무작정 시작하기
<a href="https://github.com/dudcks5477/Front-end/tree/master/Start/ex1.html">Doctype(DTD)</a>
```html
<!DOCTYPE html>
<!-- 문서의 HTML 버전을 지정 -->
<!-- DOCTYPE(DTD, Document Type Definition)은 마크업 언어에서 문서 형식을 정의하며, 웹 브라우저가 어떤 HTML 버전의 해석 방식으로 페이지를 이해하면 되는지를 알려주는 용도 -->
```
- index.html 파일을 **HTML 문서** 라고도 부른다.
- 혹은 main.css 파일을 **CSS 문서**, main.js 파일을 **JavaScript 문서** 라고도 부른다.

----

<a href="https://github.com/dudcks5477/Front-end/tree/master/Start/ex2.html">HTML, HEAD, BODY</a>
```html
<html>
<!-- 문서의 전체 범위 -->
<!-- HTML 문서가 어디에서 시작하고, 어디에서 끝나는지 알려주는 역할 -->
  <head>
    <!-- 문서의 정보를 나타내는 범위 -->
    <!-- 웹 브라우저가 해석해야 할 웹 페이지의 제목, 설명, 사용할 파일 위치, 스타일(CSS) 같은, 웹페이지의 보이지 않는 정보를 작성하는 범위 -->
  </head>
  <body>
    <!-- 문서의 구조를 나타내는 범위 -->
    <!-- 사용자 화면을 통해 보여지는 로고, 헤더, 푸터, 내비게이션, 메뉴, 버튼, 이미지 같은, 웹페이지의 보여지는 구조를 작성하는 범위 -->
  </body>
</html>
```

----

<a href="https://github.com/dudcks5477/Front-end/tree/master/Start/ex3.html">CSS, JS 연결하기</a>
```HTML
<head>
  <!-- JS 연결 -->
  <script src="./ex3.js"></script>
  <!-- CSS 연결 -->
  <link rel="stylesheet" href="./ex3.css">
</head>
```
- **lang**(language 단어의 약어)은 지정할 문서의 언어(ISO 639-1)를 명시하는 HTML 속성이다.
- 지정 가능한 언어 목록은 다음 링크에서 확인할 수 있다. <br>
<a href="https://ko.wikipedia.org/wiki/ISO_639-1_코드_목록">ISO 639-1 코드 목록</a>

----

<a href="https://github.com/dudcks5477/Front-end/tree/master/Start/ex4.html">정보를 의미하는 태그</a>
```html
<head>
  <title>Naver</title>
  <!-- HTML 문서의 제목(title)을 정의 -->
  <link rel="stylesheet" href="./main.css" />
  <link rel="icon" href="./favicon.png" />
  <!-- 외부 문서를 가져와 연결할 때 사용(대부분 CSS 파일) -->
  <style>
    /* 스타일(CSS)를 HTML 문서 안에서 작성하는 경우에 사용 */
  </style>
  <script src="./main.js"></script>
  <!-- 자바스크립트(JS) 파일 가져오는 경우 -->
  <script>
    // 자바스크립트(JS)를 HTML 문서 안에서 작성하는 경우
  </script>
  <meta charset="UTF-8" />
  <meta name="author" content="CHAN" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- <meta />는 HTML 문서(웹페이지)의 제작자, 내용, 키워드 같은, 여러 정보를 검색엔진이나 브라우저에게 제공 -->
</head>
```
- rel : 가져올 문서와 **관계**
  - _rel_(Relationship 단어의 약어)은 가져올 외부 문서(대표적으로 CSS 파일)가 현재의 HTML과 어떤 관계인지를 명시하는 HTML 속성(Attribute)이다.
- href : 가져올 문서의 **경로**
  - _href_(Hyper Text Reference 단어의 약어)는 브라우저가 참조할 특정 경로(Path)를 지정하는 HTML 속성(Attribute)이다.
- **src**(Source 단어의 약어)는 사용할 소스 코드(파일)을 지정하는 HMTL 속성(Attribute)이다.
- charset : 문자인코딩 방식
  - **charset**(Charcter Set 단어의 약어)은 문자 인코딩 방식을 지정하는 HTML 속성(Attribute)이다.
  - **문자 인코딩(Encoding)** 이란 문자나 기호들을 컴퓨터가 이용할 수 있는 신호로 만드는 것을 말하며, 대표적으로 한글 사용에서는 EUC-KR 혹은 UTF-8 등이 사용되며, **웹에선 UTF-8의 사용을 권장** 한다.
- name : 정보의 종류
- content : 정보의 값
- 우리는 스마트폰(타블렛)에서 웹 사이트를 오픈할 수 있다. 그 스마트폰이 여기서 말하는 모바일 장치(디바이스)이다. 그리고 그런 모바일에서 웹 페이지의 가로 너비를 모바일 환경의 가로 너비와 일치시키거나, 웹 사이트가 처음 출력될 때 확대/축소 여부나 정도를 어떻게 결정하겠다 등 몇 가지 정보를 META 태그로 명시하는 개념이 **name="viewport"** 의 내용이다.