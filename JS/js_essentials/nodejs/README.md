# NODE.JS
## 개요 및 설치
- Chrome V8 JavaScript 엔진으로 빌드된 _JavaScript 런타임_.
  - JavaScript 런타임 : 프로그래밍 언어가 동작하는 환경

[nodejs](https://nodejs.org/ko/)
> _LTS(Long Term Supported)_ 는 장기적으로 안정되고 신뢰도가 높은 지원이 보장되는 버전으로, 유지/보수와 보안(서버 운영 등)에 초점을 맞춰 대부분 사용자에게 추천되는 버전이다.

----
## NVM 사용법
```bash
$ nvm ls # 현재 버전 확인
$ nvm install 12.14.1 # nvm 12.14.1 버전 설치
$ nvm use 12.14.1 # nvm 12.14.1 버전 사용
$ nvm uninstall 12.14.1 # nvm 12.14.1 버전 삭제
$ nvm --help # nvm 관련된 명령어들 확인하기
$ node --version # node 버전 확인
```

----
## NPM 개요
- NPM(Node Package Manager)은 전세계의 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리
```bash
$ npm install XXX # XXX 패키지 설치
$ npm init -y # package.json 생성
$ npm install parcel-bundler -D
$ npm install lodash
$ npm i # node_modules 설치
```
- 패키지를 설치하면 자동적으로 node_modules가 생성됨
- node_modules를 삭제해도 npm i 로 재설치 가능
- package.json, package-lock.json은 삭제하면 패키지들을 다시 설치해야함
- 개발용 의존성 패키지 설치 (-D, --save-dev)
  ```bash
  $ npm install -D XXX
  ```
- 일반 의존성 설치
  ```bash
  $ npm install XXX
  ```

----
## 개발 서버 실행과 빌드
```bash
$ npm run dev # package.json에서 scripts에 입력한 dev를 사용 (개발용)
$ npm run build # pakcage.json에서 scripts에 입력한 build를 사용 (사용자들이 볼 수 있는 것들)
```
- ctrl + c 또는 q : 터미널에서 나가기
- 코드 _난독화_ : 작성된 코드를 읽기 어렵게 만드는 작업을 말한다.
  - 빌드된 결과(제품)는 브라우저에서 해석되는 용도로, 용량을 축소하고 읽기 어렵게 만드는 등의 최적화를 거치는 것이 좋다.
  - dist 폴더 안에 들어 있음 (npm run build)
  - parcel-bundler 패키지 안에 있음
- _번들(Bundle)_ : 우리가 프로젝트 개발에 사용한 여러 모듈(패키지)을 하나로 묶어내는 작업을 말한다.

----
## 유의적 버전(SemVer)
```bash
$ node --version # node 버전 확인
$ npm --version # npm 버전 확인
```
- Major.Minor.Patch
  - E.g, 12.14.1
  - Major(12) : 기존 버전과 호환되지 않는 새로운 버전
  - Minor(14) : 기존 버전과 호환되는 새로운 기능이 추가된 버전
  - Patch(1) : 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전
- **^** Major.Minor.Patch
  - E.g, **^** 12.14.1
  - Major 버전 안에서 가장 최신 버전으로 업데이트 가능
```bash
$ npm info lodash # lodash의 정보 확인
$ npm install lodash@4.17.20 # 특정 버전을 설치
$ npm update lodash # 버전 업데이트
```