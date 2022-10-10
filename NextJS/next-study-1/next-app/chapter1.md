# Chapter 01 넥스트(Next.js)

## 목차
1. 넥스트(Next.js)?
2. 넥스트의 특징 
3. 넥스트 설치하기
4. eslint 및 prettier 설치하기

### Next의 특징

1. React 기반의 프레임워크
2. React의 단점을 해결할 수 있다.
- SPA로서 첫 로딩시간이 오래 걸린다.
- SEO에 좋지 않다.
3. 개발 환경 설정의 번거로움이 적다.
4. 사전 렌더링 및 서버 사이드 렌더링을 지원한다.
5. Hot Code Reloading을 지원하는 개발 환경이다.
6. 자동 코드 분할 -> 불필요한 코드가 페이지에 로드되지 않는다.
7. Typescript가 내장되어있다.
8. 파일 기반 네비게이션을 지원한다.
9. Styled-Jsx를 지원한다.

### 폴더 설명
#### 1.3.5 CNA를 사용하여 넥스트 설치하기
```npx create-next-app````

#### 1.3.6 넥스트 수동으로 설치하기 

1. 모듈 설치
```
yarn init -y
yarn add next react react-dom
```

2. package.json에 script 명령어 추가
```
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```