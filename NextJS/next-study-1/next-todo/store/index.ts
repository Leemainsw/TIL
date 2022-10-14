import { createStore, applyMiddleware, combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import todo from './todo';

// 리듀서들을 모듈별로 관리하여 combineReducers를 사용하여 하나로 모아서 사용한다.
const rootReducer = combineReducers({
    todo,
});

// HYDRATE는 서버에서 생성된 리덕스 스토어를 클라이언트에서 사용할 수 있도록 전달해주는 역할을 한다.
const reducer = (state, action) => {
    if(action.type === HYDRATE) {
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

