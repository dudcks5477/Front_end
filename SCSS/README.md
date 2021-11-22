# SCSS
[참조(https://sass-lang.com/guide)](https://sass-lang.com/guide)

## 개요
### Variables
```scss
// scss
$frot-stack: Helvertica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

// sass
$font-stack: Helvertica, sans-serif;
$primary-color: #333;

body
  font: 100% $font-stack
  color: $primary-color
```
### Mixins
```scss
// scss
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}

// sass
@mixin theme($theme: DarkGray)
  background: $theme
  box-shadow: 0 0 1px rgba($theme, .25)
  color: #fff

.info
  @include theme

.alert
  @include theme($theme: DarkRed)

.success
  @include theme($theme: DarkGreen)
```
- CSS Preprocessor (CSS 전처리기)

----
## 프로젝트 생성
```bash
$ npm init -y
$ npm i -D parcel-bundler
```

----
## 주석
```html
<div class="container">
  <h1>Hello SCSS!</h1>
</div>
```
```scss
.container {
  h1 {
    color: royalblue;
    /* background-color: orange; */
    // font-size: 60px; // scss -> css 로 컴파일 될 때 사라짐
  }
}
```

----
## 중첩 with SassMesiter
```html
<div class="container">
  <ul>
    <li>
      <div class="name">CHAN</div>
      <div class="age">98</div>
    </li>
  </ul>
</div>
```
```scss
.container {
  ul {
    li {
      font-size: 40px;
      .name {
        color: red;
      }
      .age {
        color: green;
      }
    }
  }
}
```
- [sassMeister](https://www.sassmeister.com/)

----
## 상위(부모) 선택자 참조
- & - 상위 선택자 참조
```scss
.btn {
  position: absoulte;
  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}
```
- 치환 : 바꾸어 놓는 일
```scss
.fs {
  &-small { font-size: 12px; }
  &-medium { font-size: 14px; }
  &-large { font-size: 16px; }
}
```

----
## 중첩된 속성
```scss
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  };
  margin: {
    top: 10px;
    left: 20px;
  };
  padding: {
    top: 10px;
    bottom: 40px;
    left: 20px;
    right: 30px;
  };
}
```
- **네임스페이스**란 이름을 통해 구분 가능한 범위를 만들어내는 것으로 일종의 유효범위를 지정하는 방법을 말한다.

----
## 변수
```scss
// $size: 200px; // 전역변수

.container {
  $size: 200px; // 유효범위 (container 안에서만 사용 가능)
  position: fixed;
  top: $size;
  .item {
    width: $size;
    height: $size;
    transform: translateX($size);
  }
}
.box {
  width: $size; // error
}
```
