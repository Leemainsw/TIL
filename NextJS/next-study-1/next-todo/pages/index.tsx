import { GetServerSideProps, NextPage } from 'next';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';
import Axios from 'axios';

const app: NextPage = () => {
    return <TodoList todos={[]} />;
}

export const getServerSideProps: GetServerSideProps = async() => {
    try{
        const { data } = await Axios.get<TodoType[]>('http://localhost:3000/api/todos');
        console.log(data);
        return { props: {}}
    }catch(e){
        console.log(e);
        return { props: {} };
    }
}

export default app;