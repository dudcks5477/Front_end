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