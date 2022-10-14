import { combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import todo from './todo';
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";

// 리듀서들을 모듈별로 관리하여 combineReducers를 사용하여 하나로 모아서 사용한다.
const rootReducer = combineReducers({
    todo: todo.reducer,
});

// HYDRATE는 서버에서 생성된 리덕스 스토어를 클라이언트에서 사용할 수 있도록 전달해주는 역할을 한다.
const reducer = (state, action) => {
    if(action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if(state.count) nextState.count = state.count;
        return nextState;
    }
    return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

// 타입 지원되는 커스텀 useSelector 만들기 1
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

// // 타입 지원되는 커스텀 useSelector 만들기 2
// declare module 'react-redux' {
//     interface DefaultRootState extends RootState {}
// }

const initStore = () => {
    return configureStore({
        reducer,
        devTools: true
    })
};

// App 컴포넌트에서 wrapper로 사용하기 위해 'next-redux-wrapper'에서 createWrapper를 import하여 wrapper를 만들었다.
export const wrapper = createWrapper(initStore);

