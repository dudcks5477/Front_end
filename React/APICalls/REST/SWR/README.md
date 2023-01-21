# [SWR](https://swr.vercel.app/ko)

"SWR"이라는 이름은 [HTTP RFC 5861](https://tools.ietf.org/html/rfc5861)에 의해 알려진 HTTP 캐시 무효 전략인 `stale-while-revalidate`에서 유래되었다.

> :waring: SWR을 사용하면 컴포넌트는 _지속적_ 이며 _자동으로_ 데이터 업데이트 스트림을 받게된다. 그리고 UI는 항상 _빠르고 반응적_ 이다.

## 개요
```js
import useSWR from 'swr'

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```
이 예시에서, `useSWR` hook은 `key` 문자열과 `fetcher` 함수를 받는다. `key` 는 데이터의 고유한 식별자이며(일반적으로 API URL) `fetcher` 로 전달될 것이다. `fetcher` 는 데이터를 반환하는 어떠한 비동기 함수도 될 수 있다.

hook은 두 개의 값을 반환한다: 요청의 상태에 기반한 `data`와 `error`

## 기능
- _빠르고, 가볍고, 재사용 가능한_ 데이터 가져오기
- 내장된 _캐시_ 및 요청 중복 제거
- _실시간_ 경험