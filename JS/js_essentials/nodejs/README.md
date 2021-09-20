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