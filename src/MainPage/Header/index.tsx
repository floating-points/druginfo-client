import React from "react";
import { Container, Image, Input, Search, Login, SignUp } from './styles';

const Header = () => {
    return (
        <Container>
            <Image>
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
