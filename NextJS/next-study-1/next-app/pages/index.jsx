import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import Link from 'next/link'

const App = () => {
    const [username, setUsername] = useState('');
    return(
        <div>
            <label>
                username
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
            </label>
            <p>{username} 깃허브 검색하기</p>
            <Link href={`users/${username}`}>
                <a>검색하기</a>
            </Link>
        </div>
    )
}

export const getServerSideProps = async () => {
    try{
        // fetch를 이용하여 github api의 유저 정보를 불러오게 된다.
        const res = await fetch('https://api.github.com/users/jerrynim');
        if(res.status == 200){
            const user = await res.json();
            return { props: { user }};
        }
        return { props: {} };
    }catch(e){
        console.log(e);
        return { props: {} };
    }
};

export default App;