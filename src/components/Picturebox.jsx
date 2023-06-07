import React from 'react';
import styled from 'styled-components';
import pic from "../pic.jpg";

const Container = styled.div`
    flex : 40%;
    display : flex;
    justify-content : center;
`;

const Imagecont = styled.div`
    margin-top : 18vh;
    width : 60%;

    @media (max-width : 500px){
      margin: 10px;
  }
`;

const Image = styled.img`
    width : 100%;
`;

const Picturebox = () => {
  return (
    <Container>
      <Imagecont>
          <Image src={pic}/>
      </Imagecont>
    </Container>
  )
}

export default Picturebox