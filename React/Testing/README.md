# Testing

## JavaScript Unit Test & Jest 사용하기
### Unit Test
- 사람을 믿으시겠습니까? 테스트 코드를 믿으시겠습니까?
  - 실제로는 사람이 아니라, 사람의 감이다.
  - 코드는 거짓말을 하지 않는다.
- 통합테스트에 비해 빠르고 쉽다.
- 통합테스트를 진행하기 전에 문제를 찾아낼 수 있다.
  - 그렇다고, 통합테스트가 성공하리란 보장은 없다.
- 테스트 코드가 살아있는(동작을 설명하는) 명세가 된다.
  - 테스트를 읽고 어떻게 동작하는지도 예측 가능하다.
- 소프트웨어 장인이 되려면 TDD 해야한다.
  - 선 코딩 후, (몰아서) 단위테스트가 아니라

### facebook/[Jest](https://jestjs.io)
- 리액트의 영향이 크겠지만 가장 핫한 테스트 도구
- Easy Setup
- Instant Feedback
  - 고친 파일만 빠르게 테스트 다시 해주는 기능 등
- SnapShot Testing
  - 컴포넌트 테스트에 중요한 역할을 하는 스냅샷
```bash
npm init -y
npm i jest -D
npx jest --watchAll # 코드가 변경되면 바로 테스트
```

### .to~
```js
describe('.to~ test', () => {
  it('.toBe', () => {
    expect(37).toBe(37);
  });
  it('.toHaveLength', () => {
    expect('hello').toHaveLength(5);
  });
  it('.toHaveProperty', () => {
    expect({ name: 'Chan' }).toHaveProperty('name');
    expect({ name: 'Chan' }).toHaveProperty('name', 'Chan');
  });
  it('.toBeDefined', () => {
    expect({ name: 'Chan' }.name).toBeDefined();
  });
  it('.toBeFalsy', () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
  it('.toBeGreaterThan', () => {
    expect(10).toBeGraeterThan(9);
  });
});
```
```js
describe('.to~ test', () => {
  it('.toBeGreaterThanOrEqual', () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  it('.toBeInstanceOf', () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
  it('.toBeNull', () => {
    expect(null).toBeNull();
  });
  it('.toBeTruthy', () => {
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect('hello').toBeTruthy();
    expect({}).toBeTruthy();
  });
  it('.toBeUndefined', () => {
    expect({ name: 'Chan' }.age).toBeUndefined();
  });
  it('.toBeNaN', () => {
    expect(NaN).toBeNaN();
  });
});
```
### .not.to~
```js
describe('.not.to~ test', () => {
  it('.not.toBe', () => {
    expect(37).not.toBe(36);
  });

  it('.not.toBeFalsy', () => {
    expect(true).not.toBeFalsy();
    expect(1).not.toBeFalsy();
    expect('hello').not.toBeFalsy();
    expect({}).not.toBeFalsy();
  });

  it('.not.toBeGreaterThan', () => {
    expect(10).not.toBeGreaterThan(10);
  });
});
```
### async test with done callback
```js
describe('use async test', () => {
  it('setTimeout without done', () => {
    setTimeout(() => {
      expect(37).toBe(36);
    }, 1000);
  });

  it('setTimeout with done', done => {
    setTimeout(() => {
      expect(37).toBe(36);
      done();
    }, 1000);
  });
});
```
### async test with promise
```js
describe('use async test', () => {
  it('promise then', () => {
    function p() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }
    return p().then(data => expect(data).toBe(37));
  });

  it('promise catch', () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('error'));
        }, 1000);
      });
    }
    return p().catch(e => expect(e).toBeInstanceOf(Error));
  });
})
```
```js
describe('use async test', () => {
  it('promise .resloves', () => {
    function p() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }
    return expect(p()).resolves.toBe(37);
  });

  it('promise .rejects', () => {
    function p() {
      return new Promise((resolve, rejcet) => {
        setTimeout(() => {
          reject(new Error('error'));
        }, 1000);
      });
    }
    return expect(p()).rejects.toBeInstanceOf(Error);
  });
});
```
### async test with asynce-await
```js
describe('use async test', () => {
  it('async-await', async() => {
    function p() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }

    const data = await p();
    return expect(data).toBe(37);
  });
});
```
```js
describe('use async test', () => {
  it('async-await, catch', async() => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('error'));
        }, 1000);
      });
    }

    try {
      await p();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
```