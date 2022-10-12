import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
    paddingL 20px;
`

const index:NextPage = () => {
    return (
        <Container>
            <h1>Hello Styled-Component</h1>
            <h2>Hello Styled-Component</h2>
            <p>Hello Styled-Component</p>
            <ul>
                <li>hello Styled-components</li>
            </ul>
            <a>hello Styled-Components</a>
            <span>hello Styled-components</span>
        
        </Container>
    )
}

export default index;