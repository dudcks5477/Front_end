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
