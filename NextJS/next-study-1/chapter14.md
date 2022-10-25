# Chapter 10 회원가입과 로그인

## 목차
1. 숙소 등록하기 4단계 리덕스 설정
2. 숙소 등록하기 4단계 스타일링
3. 구글 API 사용 설정하기
4. 현재 위치 불러오기
5. 구글 API로 주소 불러오기
6. 구글 지도로 숙소 위치 조정하기

### 구글 API 사용 설정하기

Google Cloud Platform (GCP)에 접속하여 Geocoding API를 사용설정 한 뒤, API 키를 발급받는다.  


### 구글 지도로 숙소 위치 조정하기

> 컴포넌트를 dynamic을 사용하여 서버 사이드 렌더링을 하지 않고 불러온다. 컴포넌트 안에서 window를 사용하게 될 예정이기 떄문에 서버 사이드 렌더링을 방지하였다. 만약, dynamic을 사용하지 않고 import하게 된다면 window is undefined라는 에러를 보게 된다. 서버에서는 window와 document를 사용할 수 없기 때문이다.