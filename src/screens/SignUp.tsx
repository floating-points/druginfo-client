import React from "react";
import styled from "styled-components";

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
        padding: 5px 10px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 700;
    color: #3736D4;
    margin-top: 20px;
`;

const Input = styled.input`
    width: 100%;
    height: 20px;
    border-radius: 10px;
    background-color: #fafafa;
    margin-top: 23px;
    padding: 5px;
`;

const Button = styled.button`
    border: none;
    border-radius: 8px;
    margin-top: 30px;
    background-color: #36359E;
    color: white;
    text-align: center;
    padding: 5px 0px;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
`;


interface PathParamsProps {
    id: string;
}

const SignUp: React.FC = () => {
    return (
        <Container>
        <AuthBox>
            <Wrapper>Sign Up</Wrapper>
            <form>
                <Input name="username" type="text" placeholder="Username" />
                <Input name="email" type="text" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
                <Input name="password" type="password" placeholder="Password" />
                <Button type="submit">sign up</Button>
            </form>
        </AuthBox>
    </Container>
    )
}

export default SignUp;