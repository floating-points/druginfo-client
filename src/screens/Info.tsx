import React from "react";
import styled from "styled-components";

const Background = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Grid = styled.div`
    display: grid;
    width: 1000px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
`;

const Image = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 5;
    border-radius: 25px;
    box-shadow: 5px 5px 15px #36359E;
`;

const Effect = styled.div`
    grid-column: 3 / 5;
    grid-row: 1 / 3;
    border-radius: 25px;
    box-shadow: 5px 5px 15px #36359E;
    padding: 20px 15px;
    span {
        color: #36359E;
        font-size: 30px;
        font-weight: 600;
    }
`;

const Alert = styled.div`
    grid-column: 3 / 5;
    grid-row: 3 / 5;
    border-radius: 25px;
    box-shadow: 5px 5px 15px #36359E;
    padding: 20px 15px;
    span {
        color: #36359E;
        font-size: 30px;
        font-weight: 600;
    }
`;

const Elements = styled.div`
    grid-column: 1 / 3;
    grid-row: 5 / 7;
    border-radius: 15px;
    background-color: #36359E;
    box-shadow: 5px 5px 15px #36359E;
    padding: 20px 15px;
    span {
        color: white;
        font-size: 40px;
        font-weight: 600;
    }
`;

const Subscribe = styled.span`
    grid-column: 3 / 5;
    grid-row: 5 / 6;
    border-radius: 15px;
    background-color: #36359E;
    box-shadow: 5px 5px 15px #36359E;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
        color: white;
        font-size: 40px;
        font-weight: 600;
    }
`;

const Basket = styled.span`
    grid-column: 3 / 5;
    grid-row: 6 / 7;
    border-radius: 15px;
    background-color: #36359E;
    box-shadow: 5px 5px 15px #36359E;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
        color: white;
        font-size: 40px;
        font-weight: 600;
    }
`;


const Info: React.FC = () => {

    return (
        <Background>
            <Grid>
                <Image></Image>
                <Effect>
                    <span>효능 효과</span>
                </Effect>
                <Alert>
                    <span>병용 금기</span>
                </Alert>
                <Elements>
                    <span>주요 성분</span>
                </Elements>
                <Subscribe>
                    <span>구독하기</span>
                </Subscribe>
                <Basket>
                    <span>바구니 담기</span>
                </Basket>
            </Grid>
        </Background>
    )
}

export default Info;