import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Header from "../MainPage/Header";
import axios from "axios";

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

interface SFormInputs {
    username: string
    email: string
    password: string
}

const SignUp: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, getValues, setError, clearErrors, watch } = useForm({
        mode: "onChange"
    });
    const onSubmitValid = (data: any) => {
        console.log(data);
        axios.post('http://localhost:3001/auth/register', {
            username: data.username,
            email: data.email,
            password: data.password
        }).then(function(response) {
            console.log(response);
        }).catch(function(response) {
            console.log(response);
        })
    }
    return (
        <>
            <Header />
            <Container>
            <AuthBox>
                <Wrapper>Sign Up</Wrapper>
                <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input {...register("username", { required: true, maxLength: 20 })} name="username" type="text" placeholder="Username" />
                    {errors.username?.type === "required" && "Username is required"}
                    <Input {...register("email", { required: true })} name="email" type="text" placeholder="Email" />
                    {errors.email?.type === "required" && "Email is required"}
                    <Input {...register("password", { required: true })} name="password" type="password" placeholder="Password" />
                    {errors.password?.type === "required" && "Password is required"}
                    <Input {...register("confirmedpassword", { required: true })}  name="confirmedpassword" type="password" placeholder="Password" />
                    {(errors.confirmedpassword?.type === "required" && "Password is required")}
                    <Button type="submit">sign up</Button>
                </form>
            </AuthBox>
        </Container>
    </>
    )
}

export default SignUp;

function password(password: any) {
    throw new Error("Function not implemented.");
}
