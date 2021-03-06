# FastCampus : Front-end
- 제작된 웹 사이트(웹 애플리케이션, 웹앱)를 **제품(Product)** 이라고 부르기도 한다.

----

## 웹앱의 동작 원리
- **통신 프로토콜(Communication Protocol, 통신 규약)** 은 컴퓨터나 원거리 통신 장비 사이에서 메시지를 주고 받는 양식 및 규칙의 체계를 의미한다.
- 대표적으로 **HTTP, HTTPS** , FTP, SSL 등이 있다.
- 웹 사이트를 개발할 우리의 컴퓨터 환경을 '**로컬(Local) 개발 환경** ' 이라고 부른다.

----

## 웹 표준과 브라우저
### 웹 표준
- 웹 표준(Web Standard)이란 '웹에서 사용되는 표준 기술이나 규칙'을 의미, W3C의 표준화 제정 단계의 '권고안(REC)'에 해당하는 기술

> W3C의 표준화 제정 단계는 크게 다음과 같이 4가지 단계를 가진다. <br>
> 1. **초안** (Working Draft, WD) <br>
> 2. **후보권고안** (Candidate Recommendation, CR) <br>
> 3. **제안권고안** (Proposed Recommendation, PR) <br>
> 4. **권고안** (W3C Recommendation, REC)

### 크로스 브라우징
- 크로스 브라우징(Cross Browsing)이란 조금은 다르게 구동되는 여러 브라우저에서, 동일한 사용자 경험(같은 화면, 같은 동작 등)을 줄 수 있도록 제작하는 기술, 방법.
- **랜더링(Rendering)** 이란 브라우저의 뷰포트에 웹 사이트를 출력하는(그림 그려내는) 행위를 말한다.

----

## 웹에서 사용하는 이미지
### 웹 이미지
1. **비트맵(Bitmap)**
    - 픽셀이 모여 만들어진 정보의 집합, 레스터(Raster) 이미지라고도 부름.
    - .jpeg, .gif, .png
    - 정교하고 다양한 색상을 자연스럽게 표현.
    - 확대/축소 시 계단 현상, 품질 저하
    1. JPG(JPEG)
        - JPG(Joint Photographic coding Experts Group)는 Full-color와 Gray-scale의 압축을 위해 만들어졌으며, 압축률이 훌륭해 사진이나 예술 분야에서 많이 사용한다.
        - **손실** 압축
        - 표현 색상도(**24비트**, 약 1600만 색상)가 뛰어남
        - 이미지의 품질과 **용량을 쉽게 조절** 가능하다.
        - 가장 널리 쓰이는 이미지 포맷이다.
    2. PNG
        - PNG(Portable Network Graphics)는 Gif의 대체 포맷으로 개발됬다.
        - **비손실** 압축
        - 8비트(256색상) / **24비트**(약 1600만 색상) 컬러 이미지 처리
        - Alpha Channel 지원(**투명도**)
        - W3C 권장 포맷
    3. GIF
        - GIF(Graphics Interchange Format)는 이미지 파일 내에 이미지 및 문자열 같은 정보들을 저장한다.
        - 비손실 압축
        - 여러 장의 이미지를 한 개의 파일에 담을 수 있다(**움짤, 애니메이션**).
        - **8비트 색상**만 지원(다양한 색상 표현에는 적합하지 않다).
    4. WEBP
        - JPG, PNG, GIF를 모두 대체할 수 있는 **구글이 개발**한 이미지 포맷
        - 완벽한 손실/비손실 압축 지원
        - GIF 같은 애니메이션 지원
        - Alpha Channel 지원(손실, 비손실 모두)
2. **벡터(Vector)**
    - 점, 선, 면의 위치(좌표), 색상 등 수학적 정보의 형태(Shape)로 이루어진 이미지.
    - .svg
    - 확대/축소에서 자유로움, 용량 변화가 없다.
    - 정교한 이미지(인물, 풍경 사진 같은)를 표현하기 어렵다.
    - _Material Design(머터리얼 디자인)_ 은 고품질 디지털 경험을 구축할 수 있도록 Google에서 만든 디자인 시스템(방식)이다.
    1. SVG
        - SVG(Scalable Vector Graphics)는 마크업 언어(HTML/XML) 기반의 벡터 그래픽을 표현하는 포맷
        - **해상도의 영향에서 자유로움**
        - CSS와 JS로 제어 가능
        - 파일 및 코드 삽입 가능 
        - SVG 이미지의 복잡한 코드를 CSS와 JS로 디테일하게 제어하기는 매우 어렵기 때문에, 색상이나 일부 영역의 추가/제거 혹은 간단한 형태 생성 정도로 가볍게 사용한다.

----

## 특수 기호
### 특수 문자 용어
- 특수 문자의 영어/한글 이름과 키보드 위치
1. `
    - Backtick, Grave
    - 백틱, 그레이브
1. ~
    - Tilde
    - 틸드, 물결 표시
1. !
    - Exclamation mark
    - 엑스클러메이션, 느낌표
1. @
    - At sign
    - 앳, 골뱅이
1. '#'
    - Sharp, Number Sign
    - 샵, 넘버, 우물 정
1. $
    - Dollar Sign
    - 달러
1. %
    - Percent sign
    - 퍼센트
1. ^
    - Caret
    - 캐럿
1. &
    - Ampersand
    - 엠퍼센드
1. '*'
    - Asterisk
    - 에스터리스크, 별표
1. '-'
    - Hyphen, Dash
    - 하이픈, 대시, 마이너스
1. _
    - Underscore, Low dash
    - 언더스코어, 로대시, 밑줄
1. =
    - Equals sign
    - 이퀄, 동등
1. "
    - Quotation mark
    - 쿼테이션, 큰 따옴표
1. '
    - Apostrophe
    - 아포스트로피, 작은 따옴표
1. :
    - Colon
    - 콜론
1. ;
    - Semicolon
    - 세미콜론
1. ,
    - Comma
    - 콤마, 쉼표
1. .
    - Period, Dot
    - 피리어드, 닷, 점, 마침표
1. ?
    - Question mark
    - 퀘스천, 물음표
1. /
    - Slash
    - 슬래시
1. |
    - Vertical bar
    - 버티컬 바
1. \
    - Backslash
    - 백슬래시, 역 슬래시
1. ( )
    - Parenthesis
    - 퍼렌서시스, 소괄호, 괄호
1. { }
    - Barce
    - 브레이스, 중괄호
1. '[ ]'
    - Bracket
    - 브래킷, 대괄호
1. < >
    - Angle Bracket
    - 앵글 브래킷, 꺽새 괄호

----

## 오픈 소스 라이선스
- 오픈소스란 어떤 제품을 개발하는 과정에 필요한 소스 코드나 설계도를, 누구나 접근해서 열람할 수 있도록 공개하는 것.
### Apache License
- 아파치 소프트웨어 재단에서 자체 소프트웨어에 적용하기 위해 만든 라이선스
- 개인적/상업적 이용, 배포, 수정, 특허 신청이 가능
### MIT License
- 매사추세츠공과대학(MIT)에서 소프트웨어 학생들을 위해 개발한 라이선스
- 개인 소스에 이 라이선스를 사용하고 있다는 표시만 지켜주면 되며, 나머지 사용에 대한 제약은 없다.
### BSD License
- BSD(Berkeley Software Distribution)는 버클리 캘리포니아대학에서 개발한 라이선스, MIT와 동일 조건이다.
### Beerware
- 오픈소스 개발자에게 맥주를 사줘야 하는 라이선스
- 물론 만날 수 있는 경우

