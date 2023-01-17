# Component
## Hooks 이전
- 컴포넌트 내부에 상태가 있다면?
  - class
- 컴포넌트 내부에 상태가 없다면?
  - 라이프사이클을 사용해야 한다면?
    - class
  - 라이프사이클에 관계 없다면?
    - function

## Hooks 이후
- class
- function

## Class 컴포넌트
```js
import React from 'react';

// 정의
class ClassComponent extends React.Component {
  render() {
    return (<div>Hello</div>);
  }
}

// 사용
<ClassComponent />
```

## Function 컴포넌트
```js
import React from 'react';

// 정의 1
function FunctionComponent() {
  return <div>Hello</div>;
}

// 정의 2
function FunctionComponent = () => <div>Hello</div>;

// 사용
<FunctionComponent />
```

---

## React.createElement(type, [props], [...children])
- type: 태그 이름 문자열, 리액트 컴포넌트, React.Fragment
- [props]: 리엑트 컴포넌트에 넣어주는 데이터 객체
- [...children]: 자식으로 넣어주는 요소들

### type
```js
// 1. 태그 이름 문자열
ReactDOM.render(
  React.createElement('h1', null, `type이 "태그 이름 문자열" 입니다.`),
  document.querySelector("#root");
);

// 2. 리액트 컴포넌트
const Component = () => {
  return React.createElement('p', null, `type이 "React 컴포넌트" 입니다.`);
};

ReactDOM.render(
  React.createElement(Component, null, null),
  document.querySelector("#root");
);

// 3. React.Fragment
ReactDOM.render(
  React.creatElement(
    React.Fragment,
    null,
    `type이 "React Fragment"입니다.`
  ),
  document.querySelector("#root");
);

// 4. 복잡한 리엑트 엘리먼트 모임
    ReactDOM.render(
      React.createElement(
        "div", 
        null, 
        React.createElement(
          "div",
          null, 
          React.createElement("h1", null, "주제"),
          React.createElement(
            "ul", 
            null, 
            React.createElement("li", null, "React"),
            React.createElement("li", null, "Vue")
          )
        )
      ),
      document.querySelector("#root")
    );
```

---

## JSX
- JSX 문법으로 작성된 순수한 JavaScript로 컴파일하여 사용한다.
- 누가 해주나? => [babel](https://babeljs.io)
### 왜 JSX을 쓸까?
- React.createElement VS JSX
  - 가독성 완승
- babel과 같은 컴파일 과정에서 문법적 오류를 인지하기 쉬움
### JSX 문법
- 최상위 요소가 하나여야 한다.
- 최상위 요소 리턴하는 경우, () 로 감싸야 한다.
- 자식들을 바로 랜더링하고 싶으면, <>자식들</>를 사용한다. => Fragment
- 자바스크립트 표현식을 사용하려면, {표현식}를 이용한다.
- if문은 사용할 수 없다.
  - 삼항 연산자 혹은 && 를 사용한다.
- style을 이용해 인라인 스타일링이 가능하다.
- class 대신 className을 사용해 class를 적용할 수 있다.
- 자식요소가 있으면, 꼭 닫아야 하고, 자식요소가 없으면 열면서 닫아야 한다.
  ```html
  <p>어쩌구</p>
  <br />
  ```

---
## Event Handling
- HTML DOM에 클릭하면 이벤트가 발생하고, 발생하면 그에 맞는 변경이 일어나도록 해야한다.
- JSX에 이벤트를 설정할 수 있다.
```js
class Comp extends React.Component {
  render() {
    return {
      <div>
        <button onClick={() => {
          console.log('clicked');
        }}>클릭</button>
      </div>
    };
  }
}
```
- camelCase로만 사용할 수 있다.
  - onClick, onMouseEnter
- 이벤트에 연결된 자바스크립트 코드는 함수이다.
  - 이벤트={함수} 와 같이 쓴다.
- 실제 DOM 요소들에만 사용 가능하다.
  - 리액트 컴포넌트에 사용하면, 그냥 props로 전달한다.

---

## Component Lifecycle
### Declarative
- Design simple view for each state in your application, and React will efficiently update and render just the right components when your data changes.
### Component 생성 및 마운트 (< v16.3)
- constructor
- componentWillMount
- **render (최초 랜더)**
- componentDidMount
### Component props, state 변경 (< v16.3)
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- **render**
- componentDidUpdate
### componentWillReceiveProps
- props를 새로 지정했을 때 바로 호출된다.
- 여기는 state의 변경에 반응하지 않는다.
  - 여기서 props의 값에 따라 state를 변경해야 한다면
    - setState를 이용해 state를 변경한다.
    - **그러면 다음 이벤트로 각각 가는 것이 아니라 한번에 변경된다.**
### shouldComponentUpdate
- props만 변경되어도
- state만 변경되어도
- props & state 둘 다 변경되어도
- newProps와 newState를 인자로 해서 호출
- return type이 boolean이다.
  - true면 render
  - false면 render가 호출되지 않는다.
  - 이 함수를 구현하지 않으면, 디폴트는 true
### componentWillUpdate
- 컴포넌트가 재 랜더링 되기 직전에 불린다.
- 여기선 setState같은 것을 쓰면 안된다.
### componentDidUpdate
- 컴포넌트가 재 랜더링을 마치면 불린다.
### Component 언마운트(< v16.3)
- componentWillUnmount
### Component 라이프사이클 변경(v16.3)
- constructor
- ~~componentWillMount~~ => **getDerivedStateFromProps**
- render
- componentDidMount
- ~~componentWillReceiveProps~~ => **getDerivedStateFromProps**
- shouldComponentUpdate
- render
- ~~componentWillUpdate~~ => **getSnapshotBeforeUpdate**
- (dom에 적용)
- componentDidUpdate
- componentWillUnmount
### Component 에러 캐치
- componentDidCatch