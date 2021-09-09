import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #EFF1FF;
`;

const AuthBox = styled.div`
    width: 350px;
    height: 500px;
    border-radius: 15px;
    box-shadow: 5px 5px 20px #36359E;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 700;
    color: #3736D4;
    margin-top: 15px;
`;

const Input = styled.input`
    width: 100%;
    border-radius: 3px;
    padding: 5px;
    background-color: #fafafa;
    
`;

const Login: React.FC = () => {
    return (
        <Container>
            <AuthBox>
                <Wrapper>Login</Wrapper>
                <form>
                    <Input />
                </form>
            </AuthBox>
        </Container>
    )
}

export default Login;