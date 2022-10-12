# Chapter 05 투두리스트 만들기

## 목차
1. 투두리스트 헤더 만들기
2. 투두리스트 스타일링하기
3. 아이콘 다운로드 받기
4. SVG 컴포넌트 사용하기

### 투두리스트 스타일링하기
1) TodoList에 todos를 prop으로 받아야 하는 상황  
interface도 type과 동일하게 타일을 지정할 수 있다. 저자는 export를 하지 않는 타입에 대해서는 interface를 사용하는 것을 선호함. 그래서 props 타입에 대해서는 interface를 사용한다고 함

2) React.FC  
React.FC의 타입을 살펴보면 '<>'는 제네릭이라고 읽며 여기서는 타입을 제네릭을 사용하여 React.FunctionComponent에 전달해주고 있다. 