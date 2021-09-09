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
    form {
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-items: center;
        flex-direction: column;
        align-items: center;
    }
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
    height: 25px;
    border-radius: 10px;
    background-color: #fafafa;
    margin-top: 5px;
`;

const Button = styled.button`
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    background-color: #36359E;
    color: white;
    text-align: center;
    padding: 5px 0px;
    font-weight: 600;
    width: 100%;
`;

const Login: React.FC = () => {
    return (
        <Container>
            <AuthBox>
                <Wrapper>Login</Wrapper>
                <form>
                    <Input />
                    <Input />
                    <Button>login</Button>
                </form>
            </AuthBox>
        </Container>
    )
}

export default Login;