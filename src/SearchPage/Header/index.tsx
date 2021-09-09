import React from "react";
import { Container, Image, Input, Search, Basket, MyPage } from './styles';

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

            <Basket>Basket</Basket>
            <MyPage>MyPage</MyPage>
        </Container>
    )
}
export default Header;
