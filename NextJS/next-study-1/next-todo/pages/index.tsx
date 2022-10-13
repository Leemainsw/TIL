import { GetServerSideProps, NextPage } from 'next';
import TodoList from '../components/TodoList';
import { getTodosAPI } from '../lib/api/todo';

const app: NextPage = () => {
    return <TodoList todos={[]} />;
}

export const getServerSideProps: GetServerSideProps = async() => {
    try{
        const { data } = await getTodosAPI();
        console.log(data);
        return { props: {}}
    }catch(e){
        console.log(e);
        return { props: {} };
    }
}

export default app;