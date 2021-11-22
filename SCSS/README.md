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