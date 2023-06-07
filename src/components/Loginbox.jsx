import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex : 55%;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
    border-radius: 12px;
    display : flex;
    justify-content : center;
`;

const Content = styled.div`
    margin : 16vh 5vw 16vh 5vw;
    width : 80%;
`;

const Logintextbox = styled.div`
    display: flex;
    justify-content : center;
    margin-bottom : 20px;
`;

const Logintext = styled.p`
    font-weight : 850;
    font-size  : 30px;
`
const Detailsbox = styled.div`
    margin : 20px;
`;

const Detailtext = styled.p`
    font-weight: 600;
    font-size: 11px;
    margin : 10px 0px;
`;

const Detailinput = styled.input`
    border: 1px solid rgba(4, 7, 47, 0.4);
    border-radius: 8px;
    width : 100%;
    padding : 11px;
    font-size : 11px;
`;

const Downbox = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
`;

const Dnbox = styled.div`
    display : flex;
    margin : 0px 0px 10px 20px;
`;

const Textline = styled.p`
    font-weight: 400;
    font-size: 11px;
    color: ${props=> props.color};
    text-decoration: ${props=> props.textdec};
    cursor : ${props=> props.cursor};
`;

const Ckbx = styled.input`
    margin-right : 10px;
`;

const Btnbox = styled.div`
    margin-top : 20px;
    display : flex;
    justify-content : center;
`;

const Btn = styled.button`
    width : 70%;
    background: #1575A7;
    border-radius: 8px;
    padding : 10px;
    text-align : center;
    color : white;
    font-size : 11px;
    cursor : pointer;
`;

const Ftrbx = styled.div`
    justify-content : center;
    margin-top : 30px;
    display : flex;
`;

const Tickbox = styled.div`
    display : flex;
    flex-direction : column;
    min-width : 50%;
`;

const Textlinebox = styled.div`
    @media (max-width : 500px){
        margin: 5px 0px 0px 25px;
    }
`;

const Loginbox = () => {
  return (
    <Container>
        <Content>
            <Logintextbox>
                <Logintext>Login</Logintext>
            </Logintextbox>
            <Detailsbox>
                <Detailtext>Login ID</Detailtext>
                <Detailinput placeholder='Enter Login ID'/>
                <Detailtext>Password</Detailtext>
                <Detailinput placeholder='Enter Password' type='password'/>
            </Detailsbox>
            <Downbox>
                <Tickbox>
                    <Dnbox>
                        <Ckbx type='checkbox'/>
                        <Textline color={'#737B86;'}>Remember Me</Textline>
                    </Dnbox>
                    <Dnbox>
                        <Ckbx type='checkbox'/>
                        <Textline color={'#737B86;'}>Agree to &nbsp; </Textline>
                        <Textline color={'#F78719'} textdec={'underline'} cursor={'pointer'}>Terms & Conditions</Textline>
                    </Dnbox>
                </Tickbox>
                <Textlinebox>
                    <Textline color={'#F78719'} cursor={'pointer'}>Change Password</Textline>    
                </Textlinebox>  
            </Downbox>
            <Btnbox>
                <Btn>Login</Btn>
            </Btnbox>
            <Ftrbx>
                <Textline color={'#04072F'}>Dont have an account? &nbsp; </Textline>
                <Textline color={'#F78719'} textdec={'underline'} cursor={'pointer'}>Register Here</Textline>
            </Ftrbx>
        </Content>
    </Container>
  )
}

export default Loginbox