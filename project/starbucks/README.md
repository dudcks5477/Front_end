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

## 헤더와 드롭다운 메뉴 - 서브 메뉴
> URL 해시(Hash)는 몇 가지 쓰임이 있지만,   
>그중 CSS ID 선택자를 이용해 페이지 내 특정 위치로 이동할 수 있다.