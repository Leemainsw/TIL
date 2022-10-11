import fetch from 'isomorphic-unfetch'; 

const name = ({user}) => {
    const username = user && user.name;
    return <div>{username}</div>
}

// export const getServerSideProps = async ({query}) => {
//     const {name} = query;
//     try{
//         // fetch를 이용하여 github api의 유저 정보를 불러오게 된다.
//         const res = await fetch(`https://api.github.com/users/${name}`);
//         if(res.status == 200){
//             const user = await res.json();
//             return { props: { user }};
//         }
//         return { props: {} };
//     }catch(e){
//         console.log(e);
//         return { props: {} };
//     }
// };

name.getInitialProps = async ({query}) => {
    const { name } = query;
    try{
        const res = await fetch(`https://api.github.com/users/${name}`);
        if(res.status === 200){
            const user = await res.json();
            console.log(user)
            return { props: { user } };
        }
        return { props: {} };
    }catch(e){
        console.log(e);
        return {};
    }
}

export default name;