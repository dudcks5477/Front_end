# starbucks-vanilla
<a href="https://github.com/ParkYoungWoong/starbucks-vanilla-app">스타벅스 예제 원본</a>

----

## 오픈그래프(The Open Graph protocol)
<span>웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정한다.</span>
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```
- og:type : 페이지의 유형(E.g, website, video.movie)
- og:site_name : 속한 사이트의 이름
- og:title : 페이지의 이름(제목)
- og:description : 페이지의 간단한 설명
- og:image : 페이지의 대표 이미지 주소(URL)
- og:url : 페이지 주소(URL)

## 트위터 카드(Twitter Cards)
<span>웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정한다.</span>
```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
```
- twitter:card : 페이지(카드)의 유형(E.g, summary, player)
- twitter:site : 속한 사이트의 이름
- twitter:title : 페이지의 이름(제목)
- twitter:description : 페이지의 간단한 설명
- twitter:image : 페이지의 대표 이미지 주소(URL)
- twitter:url : 페이지 주소(URL)
> SEO (검색 엔진 최적화, Search Engine Optimization)란,  
> 구글이나 네이버 등에 자신의 웹 사이트/페이지를 노출할 수 있도록 정보를 최적화하는 작업을 말한다.

----

## 헤더와 드롭다운 메뉴 - 서브 메뉴
> URL 해시(Hash)는 몇 가지 쓰임이 있지만,   
>그중 CSS ID 선택자를 이용해 페이지 내 특정 위치로 이동할 수 있다.

## 헤더와 드롭다운 메뉴 - 메인 메뉴
> top이나 bottom 속성을 사용하지 않아 수직 위치 값이 없다면,  
> 요소의 원래 위치를 그대로 사용한다.  
> 만약 position: absolute;를 사용했다면, (위치상) 부모 요소를 기준으로 하므로  
> 화면의 뷰포트 좌우 끝까지 늘어날 수 없게 된다.

----

## BEM (Block Element Modifier)
- HTML 클래스 속성의 작명법
- 요소__일부분 : Underscore(Lodash) 기호로 요소의 일부분을 표시
- 요소--상태 : Hyphen(Dash) 기호로 요소의 상태를 표시
```html
<!-- 예시 1 -->
<div class="container">
  <div class="name"></div>
  <div class="item">
    <div class="name"></div>
  </div>
</div>

<div class="btn primary"></div>
<div class="btn success"></div>
<div class="btn error"></div>
```
```html
<!-- 예시 2 -->
<div class="container">
  <div class="container__name"></div>
  <div class="item">
    <div class="item__name"></div>
  </div>
</div>

<div class="btn btn--primary"></div>
<div class="btn btn--success"></div>
<div class="btn btn--error"></div>
```
> opacity 속성처럼 값을 숫자로 입력하는 속성들은,  
> 전환효과(transition 속성이나 GSAP 라이브러리 등)를 통해  
> 요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만,  
> display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에,  
> 자연스러운 전환 효과를 적용할 수 없다.
----
## 요소 슬라이드 - 수직 슬라이드(Swiper)
<a href="https://swiperjs.com/get-started">Getting Started With Swiper</a>

### Use Swiper from CDN
```html
<!-- HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```