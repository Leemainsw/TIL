# Chapter 06 넥스트 API

## 목차
1. 넥스트 api 사용해보기
2. 투두리스트 불러오기 api 만들기
3. axios 설정하기
4. 환경변수 설정하기
5. 투두 체크하기
6. 투두 추가하기
7. 투두 삭제하기
8. 푸터 만들기

### 넥스트 API 사용해보기

넥스트는 express 기반으로 만들어져 있어 api를 만들고 사용할 수 있다.

### 투두리스트 불러오기 api 만들기

api를 만들면서 다음의 과정을 수행하게 된다.
1. HTTP 메서드가 GET인지 확인한다
2. 파일 데이터를 불러온다
3. 파일의 데이터를 객체로 결과 값으로 보내준다.

파일의 데이터 불러오는 GET 행위이기 때문에 req.method가 GET인지 확인해야 함.

### axios 설정하기
Axios를 사용할 때 마다 매번 같은 호스트 주소를 적어 사용하는 것은 번거로운 일이다. 따라서 axios의 기본경로를 설정하여 이를 방지해보겠다.
```lib/api/index.ts``` 파일을 만들어 아래의 코드처럼 Axios에 BaseURL을 설정한다.
```javascript
const axios = Axios.create({
    baseURL: "http://localhost:3000"
})
```