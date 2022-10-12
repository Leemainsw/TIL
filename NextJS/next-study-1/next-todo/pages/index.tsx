import { NextPage } from 'next';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';

const todos: TodoType[] = [
    {id: 1, text: '할 일 목록 1', color: 'red', checked: false},
    {id: 2, text: '할 일 목록 2', color: 'orange', checked: false},
    {id: 3, text: '할 일 목록 3', color: 'yellow', checked: true},
    {id: 4, text: '할 일 목록 4', color: 'green', checked: true},
    {id: 5, text: '할 일 목록 5', color: 'blue', checked: false},
    {id: 6, text: '할 일 목록 6', color: 'navy', checked: false},
]

const app: NextPage = () => {
    return <TodoList todos={todos} />;
}

export default app;