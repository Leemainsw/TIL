import fetch from 'isomorphic-unfetch'; 
import Profile from '../../components/Profile';
import css from 'styled-jsx/css';
import Repositories from '../../components/Repositories';

const style = css`
    .user-contents-wrapper{
        display: flex;
        padding: 20px;
    }
`

const name = ({user, repos}) => {
    if(!user || !repos) {
        return null;
    }

    return (
        <div className='user-contents-wrapper'>
            <Profile user={user} />
            <Repositories user={user} repos={repos} />
            <style jsx>{style}</style>
        </div>
    )
};

export const getServerSideProps = async ({query}) => {
    const {name, page} = query;
    try{
        let user;
        let repos;
        
        // fetch를 이용하여 github api의 유저 정보를 불러오게 된다.
        const userRes = await fetch(`https://api.github.com/users/${name}`);
        console.log('userRes',userRes.status)
        if(userRes.status === 200){
            user = await userRes.json();
        }
        const repoRes = await fetch(`https://api.github.com/users/${name}/repos?sort=updated&page=${page}&per_page=10`);
        console.log('repoRes',repoRes.status)
        if(repoRes.status === 200 ){
            repos = await repoRes.json();
        }
        return { props: { user, repos }};
    }catch(e){
        console.log(e);
        return { props: {} };
    }
};

// name.getInitialProps = async ({query}) => {
//     const { name } = query;
//     try{
//         const res = await fetch(`https://api.github.com/users/${name}`);
//         if(res.status === 200){
//             const user = await res.json();
//             return { user };
//         }
//         return { };
//     }catch(e){
//         console.log(e);
//         return {};
//     }
// }

export default name;