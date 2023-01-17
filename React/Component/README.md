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
