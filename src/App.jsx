import React from 'react'
import styled from 'styled-components'
import Loginbox from './components/Loginbox';
import Picturebox from './components/Picturebox';


const Container = styled.div`
    margin : 20px;
    display : flex;
    @media (max-width : 500px){
        flex-direction : column;
    }
`;

const App = () => {
  return (
    <Container>
        <Picturebox />
        <Loginbox />
    </Container>
  )
}

export default App