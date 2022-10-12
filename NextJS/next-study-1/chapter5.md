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

**색상별 투두리스트 개수 구하기**  
색상별 투두리스트 개수를 구하려는 함수 getTodoColorNums를 만들었지만 이는 컴포넌트가 리렌더링 될 때마다 재계산이 되기 때문에 성능적으로 비효율 적이라고 할 수 있다. 이를 방지하기 위해 성능 개선을 얻을 수 있는 방법으로는 ```useCallback```과 ```useMemo``` hooks를 사용하는 것이다.  

useMemo : 변수에 종속성을 주어 함수의 재연산을 방지할 수 있는 hooks이다.
useCallback : 함수에 종속성을 줄 수 있다.  

하지만 이런 hooks를 사용하는 것이 항상 좋은 것은 아니다. useMemo와 useCallback 또한 값의 변화를 비교하게 되며, 배열을 생성하여 사용하는 만큼 메모리를 사용하게 된다. 이러한 비용이 재연산하는 비용보다 클 수 있기 때문에 잘 보고 써야 한다.

### svg 컴포넌트 사용하기
SVG 아이콘을 사용하기 위해서는 설정이 필요하다. 넥스트에서 제공하는 svg-components 예제를 참고하여 설정하였다.  

1. svg를 리액트 안에서 컴포넌트로 사용하기 위해서는 바벨 플러그인을 설치하여야 한다.
```
    yarn add babel-plugin-inline-react-svg -D
```

2. 바벨 설정을 해야한다. ```.babelrc``` 파일
```
    {
        ...
        "plugins": ["inline-react-svg"]
    }
```

3. svg를 모듈로 설정한다.
이를 설정하지 않는다면 '.svg'라는 모듈을 찾을 수 없다는 오류 메시지가 나올 수 있다.  
'image.d.ts' 파일을 생성한다.

```
    declare module "*.svg";
```

