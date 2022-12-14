# Chapter 03 타입스크립트

## 목차
1. 타입스크립트란?
2. 타입스크립트 환경 설정하기
3. 타입스크립트와 넥스트 페이지 만들기

### 타입스크립트란?
> 타입스크립트는 마이크로소프트에서 구현한 자바스크립트의 슈퍼셋 프로그래밍 언어이다.

자바스크립트의 데이터 타입은 동적 타입이기 때문에 프로그램을 실행하면 타입이 맞지 않아 에러가 나는 경우가 많습니다. 하지만 타입스크립트를 사용하여 실행 이전에 타입으로 인하여 생길 수 있는 에러를 미리 방지 할 수 있으며, 개발 도구와 함께 사용하면서 자동 완성 기능을 편리하게 사용할 수 있다.

타입스크립트의 장점
- 생산성과 안정성의 향상을 이뤄낼 수 있다.

### 타입스크립트 환경 설정하기
- 넥스트를 수동으로 설치한 뒤 ```yarn add typescript @types/react @types/node``` 명령어로 모듈 설치
- 타입스크립트는 빌드 과정에서 자바스크립트로 변환되기 때문에 실제 배포될 결과물에는 포함되지 않는다.