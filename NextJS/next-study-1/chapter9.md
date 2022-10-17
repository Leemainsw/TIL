# Chapter 09 공통 헤더 만들기

## 목차
1. 공통 헤더 스타일링 하기
2. 모달 컴포넌트 만들기


### 모달 컴포넌트 만들기

모달을 만드는 방법 중에는 리액트의 포털(Portal)을 이용하는 방법도 있다. 
> 부모 컴포넌트의 DOM 계층 외부에 있는 DOM 노드로 자식을 렌더링 하는 방법

사용방법  
```javascript
ReactDOM.createPortal(child, container);
```

