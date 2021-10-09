import React from "react";
import styled from "styled-components";
import { SubmitHandler, useForm, UseFormRegisterReturn } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import Header from "../MainPage/Header";

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
        padding: 5px 7px;
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
    cursor: pointer;
`;

const FacebookLogin = styled.button`
    background-color: #385385;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 2.5px;
    margin-right: 2.5px;
    padding: 5px 0px;
    width: 98%;
    cursor: pointer;
    span {
        font-size: 20px;
        font-weight: 600;
        color: white;
    }
`;

const GoogleLogin = styled.button`
    background-color: #EA4335;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 2.5px;
    margin-right: 2.5px;
    padding: 5px 0px;
    width: 98%;
    cursor: pointer;
    span {
        font-size: 20px;
        font-weight: 600;
        color: white;
    }
`;

interface PathParamsProps {
    id: string;
}

interface IFormInputs {
    username: string
    password: string
}

const Login: React.FC<RouteComponentProps<PathParamsProps>> = ({ location }: RouteComponentProps<PathParamsProps>) => {
    // console.log(location)
    const { register, handleSubmit, formState: { errors }, getValues, setError, clearErrors } = useForm({
        mode: "onChange"
    });
    const onSubmitValid: SubmitHandler<IFormInputs> = (data) => {
        console.log(data)
    }
    const clearLoginError = () => {
        clearErrors("result")
    }
    return (
        <>
            <Header />
            <Container>
                <AuthBox>
                    <Wrapper>Login</Wrapper>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                        <Input {...register("username", { required: true, maxLength: 20 })} onChange={clearLoginError} name="username" type="text" placeholder="Username" />
                        {errors.username?.type === "required" && "Username is required"}
                        <Input {...register("password", { required: true })} onChange={clearLoginError} name="password" type="password" placeholder="Password" />
                        {errors.password?.type === "required" && "Password is required"}
                        <Button type="submit">login</Button>
                    </form>
                    <FacebookLogin>
                        <span>Login with Facebook</span>
                    </FacebookLogin>
                    <GoogleLogin>
                        <span>Login with Google</span>
                    </GoogleLogin>
                </AuthBox>
            </Container>
        </>
    )
}

export default Login;