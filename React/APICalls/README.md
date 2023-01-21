# API Calls

## [GraphQL](https://graphql.org) 맛보기 (Server 만들기)
### Rest API와 GraphQL
```js
// 책 목록보기
axios.get(
  'https://api.marktube.tv/v1/book',
  { headers: `Bearer ${token}`},
);
```
```js
// 책 추가하기
axios.post(
  'https://api.marktube.tv/v1/book',
  {
    title,
    message,
    author,
    url,
  },
  { headers: `Bearer ${token}`}
)
```
```js
// 책 상세보기
axios.get(
  `https://api.marktube.tv/b1/book/${book.id}`,
  { headers: `Bearer ${token}`},
);
```
```js
// 책 수정하기
axios.patch(
  `https://api.marktube.tv/v1/book/${book.id}`,
  {
    title,
    message,
    author,
    url,
  },
  { header: `Bearer ${token}` },
)
```
```js
// 책 삭제하기
axios.delete(
  `https://api.marktube.tv/v1/book/${book.id}`,
  { headers: `Bearer ${token}` },
);
```

---

### Apollo를 이용해서 Node.js 서버 만들기
```bash
npm init -y
npm i apollo-server # Apollo 라이브러리 다운
npm i nodemon -D # 자동 새로고침
```
- [Apollo Github](https://github.com/apollographql/apollo-server)
```bash
npm i graphql
npm install @apollo/server graphql
```

---
### typeDef와 resolver
#### typeDef(s)
- GraphQL Schema를 정의하는 곳
  - Object
  - Query
  - Mutation
  - Input
- gql과 Tagged Template Literals로 작성한다.
#### resolver(s)
- Schema에 해당하는 구현을 하는 곳
- 요청을 받아 데이터를 조회, 수정, 삭제

