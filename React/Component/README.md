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
