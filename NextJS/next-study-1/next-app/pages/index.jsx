import {useState} from 'react';
import { useRouter } from 'next/router';

const App = () => {
    const [name, setName] = useState('');
    const router = useRouter();

    return(
        <div>
            <img src="/cheese.png" alt="치즈 이미지"/>
        </div>
    )
}

export default App;