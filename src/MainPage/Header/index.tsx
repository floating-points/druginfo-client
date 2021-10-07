import React from "react";
import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 1rem;
	//height: 10vh;
    background-color: #EFF1FF;
`

export const Image = styled(Link)`
    margin-left: 2rem;
`
export const Input = styled.input`
    max-width: 30rem;
    width: 100%;
    padding: 0.5rem 0.5rem;
    margin-left: 3rem;
    font-weight: 500;
    font-size: 1.2rem;
    border: 0.1rem solid;
    border-radius: 0.5rem;
    background-color: white;
    border: none;
`

export const Search = styled.button`
    padding: 0.7rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: transparent;
    color: #36359E;
    font-size: 1rem;
    font-weight: 600;
`
export const Login = styled(Link)`
    margin-left: auto;
    margin-right: 2rem;
    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;
`

export const SignUp = styled(Link)`
    margin-right: 3rem;
    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;
`
const Header = () => {
    return (
        <Container>
            <Image to="/">
                로고 이미지
            </Image>

            <Input
            type='text'
            placeholder='Search'
            />
            <Search>검색</Search>

            <Login to="/Login">Login</Login>
            <SignUp to="/SignUp">SignUp</SignUp>
        </Container>
    )
}
export default Header;
