# Routers

## React의 라우팅 이해하기
- **S**ingle **P**age **A**pplication
### SPA 라우팅 과정
1. 브라우저에서 최초에 '/'경로로 요청을 하면,
1. React Web App을 내려준다.
1. 내려받은 React App 에서 '/' 경로에 맞는 컴포넌트를 보여준다.
1. React App에서 다른 페이지로 이동하는 동작을 수행하면,
1. 새로운 경로에 맞는 컴포넌트를 보여준다.
- [React Router](https://reactrouter.com)
```cdn
npm i react-router-dom
```
- cra에 기본 내장된 패키지가 아니다.
- react-router-dom은 Facebook의 공식 패키지는 아니다.
- 가장 대표적인 라우팅 패키지이다.

### 특정 경로에서 보여줄 컴포넌트를 준비한다.
- '/' => Home 컴포넌트
- '/profile' => profile 컴포넌트
- '/about' => About 컴포넌트
```js
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
```
- Route 컴포넌트에 경로(path)와 컴포넌트(component)를 설정하여 나열해준다.
- BrowserRouter로 Route들을 감싸준다.
- 브라우저에서 요청한 경로에 Route의 path가 들어있으면 해당 component를 보여준다.

---

## Dynamic 라우팅
### /profile/1
```js
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
```
```js
export default function Profile(props) {
  const id = props.match.params.id;
  console.log(id, typeof id);
  return (
    <div>
      <h2>Profile 페이지입니다.</h2>
      {id && <p>id는 {id} 입니다.</p>}
    </div>
  );
}
```
- [URLSearchParams](https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams)
- [query-string](https://github.com/sindresorhus/query-string)

---

## Switch와 NotFound
### Switch
- 여러 Route 중 순서대로 먼저 맞는 하나만 보여준다.
- exact를 뺄 수 있는 로직을 만들 수 있다.
- 가장 마지막에 어디 path에도 맞지 않으면 보여지는 컴포넌트를 설정해서, "Not Found" 페이지를 만들 수 있다.

---

## JSX 링크로 라우팅 이동하기
```
<NavLink>
activeClassName: String
activeStyle: object
exact: bool
strict: bool
isActive: func
location: object
aria-current: string
```
- import{ **NavLink** } from **'react-router-dom'**;
- activeClassName, activeStyle처럼 active 상태에 대한 스타일 지정이 가능하다.
- Route의 path처럼 동작하기 때문에 exact가 잇다.