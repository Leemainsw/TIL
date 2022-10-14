# Chapter 07 리덕스(Redux)

## 목차
1. 리덕스란?
2. 리덕스 필요한 개념
3. 리덕스 사용하기
4. 리덕스 툴킷
5. useSelector 사용하기
6. useDispatch

### 리덕스란?

리덕스란 ContextAPI로 감당하지 못할 규모의 상태들을 관리할 수 있는 상태관리 라이브러리 중 하나로 여러 가지 상태관리 라이브러리 중 가장 많이 사용되고 있다.  

**리덕스의 특징**  
1. Store라는 변수를 이용하여 전역 상태관리를 한다
2. 스토어를 사용하면 상태를 조회/관리 하는 것이 간편해진다.
3. 불필요하고 복잡한 Props 작업 -> props-drilling이라고 불리는 고통을 해결해준다.
4. 크롬 브라우저의 확장 프로그램인 redux-devTools를 지원하기 때문에 이를 사용하여 상태의 조회, 변경의 추적 등이 간편하다.

### 리덕스에 필요한 개념

**1. Action(액션)**  
상태를 변화시키기 위해 변화에 대한 정보가 필요한데 이 'Action'은 상태 변화에 대해 알려주는 순수 자바 스크립트 객체이다.
- 액션 객체는 상태 변화에 대한 type을 필수로 가지고 있어야 한다.
- 액션의 type은 액션의 행위를 나타내는 문자열이다.

예시
```json
{
    { "type": "ADD_TODO", "todo": [] },
    { "type": "CHECK_TODO", "id": 1 },
}
```


**2. Reducer(리듀서)**  
- 리듀서는 상태와 액션을 가지고 함수를 실행하는 역할
- 첫 번째 인자는 이전 상태의 정보를 가진다.
- 두 번째 인자는 액션 객체를 받는다.
- 액션에 대한 함수를 정의하고 함수를 실행하여 상태를 업데이트 한다.


**3. Dispatch(디스패치)**  
- 디스패치는 액션을 실행시키는 역할을 한다.
- 액션을 인자로 받는다.
- 디스패치로 액션을 실행할 때 발생한다. ex) (dispatch(action))
- 리듀서는 이전 상태와 액션 객체를 받아 스토어 상태를 업데이트 한다. ex) (reducer(prevState, action))


**리덕스의 세 가지 원칙**  
[Redux Three Principles](https://redux.js.org/understanding/thinking-in-redux/three-principles)
1. 응용 프로그램의 전역 상태는 단일 저장소 내의 트리에 저장된다
2. 상태는 읽기 전용이다
3. 순수 함수에 의해 변경 되어야 함

**ducks 패턴**  
ducks 패턴이란 파일을 구조 중심이 아닌 기능 중심으로 나누는 것이다. ducks 패턴을 사용하게 되면 코드가 직관적이고 읽기 쉽게 사용할 수 있다.

**ducks 패턴의 규칙**
- 항상 reducer()란 이름의 함수는 export default 해야 합니다.
- 항상 모듈의 action 생성자들을 함수형태로 export 해야 합니다.
- 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야 합니다.
- 경우에 따라 action 타입들을 UPPER_SNAKE_CASE로 export 할 수 있습니다.



```javascript
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import todo from './todo';

// 리듀서들을 모듈별로 관리하여 combineReducers를 사용하여 하나로 모아서 사용한다.
const rootReducer = combineReducers({
    todo,
});

// HYDRATE는 서버에서 생성된 리덕스 스토어를 클라이언트에서 사용할 수 있도록 전달해주는 역할을 한다.
const reducer = (state, action) => {
    if(action.type == HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        return nextState;
    }
    return rootReducer(state, action);
};

export type RooteState = ReturnType<typeof rootReducer>;

// 미들웨어 적용을 위한 스토어 enhancer
// 리덕스에서 미들웨어는 액션이 dispatch 되어 리듀서에서 처리하기 전에 사전에 지정된 작업들을 의미한다. 
const bindMiddleware = (middleware: any) => {
    if(process.env.NODE_ENV !== 'production') {
        // 리덕스 데브툴 확장 프로그램을 사용하기 위해 미드루에어에서 리덕스 데브툴을 사용하도록 하는 코드
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    } 
    return applyMiddleware(...middleware);
};

const initStore = () => {
    return createStore(reducer, bindMiddleware([]));
};

// App 컴포넌트에서 wrapper로 사용하기 위해 'next-redux-wrapper'에서 createWrapper를 import하여 wrapper를 만들었다.
export const wrapper = createWrapper(initStore);
```